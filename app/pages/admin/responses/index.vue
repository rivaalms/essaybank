<script setup lang="ts">
definePageMeta({
   layout: "auth"
})

const dayjs = useDayjs()
const appStore = useAppStore()

const columns = [
   { field: 'id', header: 'ID' },
   { field: 'question_id', header: "ID Pertanyaan" },
   { field: "answer", header: "Jawaban" },
   { field: "created_at", header: "Tanggal Dibuat" },
   { field: "actions", header: "Aksi" },
]

const query = ref<Model.Response.Query>({
   page: 1,
   per_page: 10,
   question: undefined,
   load_question: true,
   review_count: true
})

const { data, status, refresh } = await useLazyAsyncData(
   "api-responses",
   () => $responseApi().list(query.value),
   {
      server: false,
      transform: (res) => res.data,
   }
)

watchDeep(query, () => refresh())

async function showResponseDetail(data: Model.Response) {
   appStore.showDialog(
      "Detail Respons",
      h(
         (await import("@/components/dialogs/DialogResponseDetail.vue")).default,
         {
            response: data,
            "onDialog:update": (data) => openForm(data)
         }
      ),
      {
         width: "800px"
      }
   )
}

async function openForm(data?: Model.Response) {
   appStore.showDialog(
      data ? "Edit Respons" : "Respons Baru",
      h((await import("@/components/forms/FormResponse.vue")).default, {
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
            <template #row.created_at="{ row }">
               {{ dayjs(row.created_at).format("DD MMMM YYYY | HH:mm") }}
            </template>
            <template #row.actions="{ row }">
               <div class="flex gap-2">
                  <Button
                     v-tooltip="'Lihat Detail'"
                     size="small"
                     variant="text"
                     icon="pi pi-eye"
                     rounded
                     @click="showResponseDetail(row)"
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
               </div>
            </template>
         </CoreDataTable>
      </template>
   </Card>
</template>