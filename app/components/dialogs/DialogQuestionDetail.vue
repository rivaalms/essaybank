<script setup lang="ts">
const props = defineProps<{
   question: Model.Question
}>()

const emit = defineEmits<{
   (e: "dialog:update", data: Model.Question): void
   (e: "dialog:delete", data: Model.Question): void
}>()

const dayjs = useDayjs()
const appStore = useAppStore()

async function onEdit() {
   emit("dialog:update", props.question)
}

async function onDelete() {
   emit("dialog:delete", props.question)
}
</script>

<template>
   <div class="flex flex-col gap-4">
      <div class="flex flex-col">
         <p class="text-sm text-surface-500">Pertanyaan</p>
         <p class="text-pretty">
            {{ props.question.question }}
         </p>
      </div>
      <div
         v-if="props.question.reference_answer"
         class="flex flex-col"
      >
         <p class="text-sm text-surface-500">Referensi Jawaban</p>
         <p class="text-pretty">
            {{ props.question.reference_answer }}
         </p>
      </div>
      <div class="flex gap-x-2">
         <div class="flex-1 flex flex-col">
            <p class="text-sm text-surface-500">Tanggal Dibuat</p>
            <p class="text-pretty">
               {{
                  dayjs(props.question.created_at).format("DD MMMM YYYY | HH:mm")
               }}
            </p>
         </div>
         <div class="flex-1 flex flex-col">
            <p class="text-sm text-surface-500">Tanggal Diperbarui</p>
            <p class="text-pretty">
               {{
                  dayjs(props.question.updated_at).format("DD MMMM YYYY | HH:mm")
               }}
            </p>
         </div>
      </div>
      <div class="mt-4 flex flex-row-reverse gap-4">
         <Button
            label="Tutup"
            severity="secondary"
            variant="text"
            @click="appStore.closeDialog"
         />
         <div class="flex-1 flex gap-4">
            <Button
               label="Hapus"
               icon="pi pi-trash"
               severity="danger"
               variant="text"
               @click="onDelete"
            />
            <Button
               label="Edit"
               icon="pi pi-pencil"
               severity="warn"
               variant="text"
               @click="onEdit"
            />
         </div>
      </div>
   </div>
</template>
