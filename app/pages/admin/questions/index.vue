<script setup lang="ts">
definePageMeta({
   layout: "auth",
})

const dayjs = useDayjs()
const appStore = useAppStore()

const columns = [
   { field: 'id', header: 'ID' },
   { field: "question", header: "Pertanyaan" },
   { field: "updated_at", header: "Tanggal Perbarui" },
   { field: "actions", header: "Aksi" },
]

const query = ref<Model.Question.Query>({
   page: 1,
   per_page: 10,
   search: null,
})

const { data, status, refresh } = await useLazyAsyncData(
   "api-questions",
   () => $questionApi().list(query.value),
   {
      server: false,
      transform: (res) => res.data,
   }
)

watchExcludable(query, () => refresh(), {
   exclude: ["search"],
})

watchDebounced(
   () => query.value.search,
   () => refresh(),
   { debounce: 800, maxWait: 1000 }
)

async function showQuestionDetail(data: Model.Question) {
   appStore.showDialog(
      "Detail Pertanyaan",
      h(
         (await import("@/components/dialogs/DialogQuestionDetail.vue"))
            .default,
         {
            question: data,
            "onDialog:update": (data) => openForm(data),
            "onDialog:delete": (data) => onDelete(data),
         }
      ),
      {
         width: "800px",
      }
   )
}

async function openForm(data?: Model.Question) {
   appStore.showDialog(
      data ? "Edit Pertanyaan" : "Pertanyaan Baru",
      h((await import("@/components/forms/FormQuestion.vue")).default, {
         data: data,
      }),
      {
         width: "800px",
         callback: () => {
            appStore.closeDialog()
            refresh()
         },
      }
   )
}

function onDelete(data: Model.Question) {
   appStore.showConfirmDialog({
      title: "Hapus Pertanyaan",
      message: "Apakah kamu yakin ingin menghapus pertanyaan ini?",
      data: data,
      onConfirm: async () =>
         await $questionApi()
            .remove(data.id)
            .then((res) => {
               refresh()
            }),
   })
}
</script>

<template>
   <Card>
      <template #content>
         <CoreDataTable
            v-model:page="query.page"
            v-model:per-page="query.per_page"
            :rows="data?.data || []"
            :columns="columns"
            :total="data?.total || 0"
            :loading="status === 'pending'"
         >
            <template #header>
               <div class="flex justify-between gap-2">
                  <div class="flex-1">
                     <IconField>
                        <InputIcon class="pi pi-search" />
                        <InputText
                           v-model="query.search"
                           placeholder="Cari..."
                        />
                     </IconField>
                  </div>
                  <Button
                     label="Pertanyaan Baru"
                     icon="pi pi-plus"
                     @click="openForm()"
                  />
               </div>
            </template>
            <template #row.updated_at="{ row }">
               {{ dayjs(row.updated_at).format("DD MMMM YYYY | HH:mm") }}
            </template>
            <template #row.actions="{ row }">
               <div class="flex gap-2">
                  <Button
                     v-tooltip="'Lihat Detail'"
                     size="small"
                     variant="text"
                     icon="pi pi-eye"
                     rounded
                     @click="showQuestionDetail(row)"
                  />
                  <Button
                     v-tooltip="'Edit'"
                     size="small"
                     variant="text"
                     severity="warn"
                     icon="pi pi-pencil"
                     rounded
                     @click="openForm(row)"
                  />
                  <Button
                     v-tooltip="'Hapus'"
                     size="small"
                     variant="text"
                     severity="danger"
                     icon="pi pi-trash"
                     rounded
                     @click="onDelete(row)"
                  />
               </div>
            </template>
         </CoreDataTable>
      </template>
   </Card>
</template>
