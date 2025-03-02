<script setup lang="ts">
const props = defineProps<{
   response: Model.Response
}>()

const emit = defineEmits<{
   (e: "dialog:update", data: Model.Response): void
}>()

const dayjs = useDayjs()
const appStore = useAppStore()

async function onEdit() {
   emit("dialog:update", props.response)
}
</script>

<template>
   <div class="flex flex-col gap-4">
      <div
         v-if="props.response.question"
         class="flex flex-col"
      >
         <p class="text-sm text-surface-500">Pertanyaan</p>
         <p class="text-pretty">
            {{ props.response.question }}
         </p>
      </div>
      <div class="flex flex-col">
         <p class="text-sm text-surface-500">Jawaban</p>
         <p class="text-pretty">
            {{ props.response.answer }}
         </p>
      </div>
      <div
         v-if="props.response.reference_answer"
         class="flex flex-col"
      >
         <p class="text-sm text-surface-500">Referensi Jawaban</p>
         <p class="text-pretty">
            {{ props.response.reference_answer }}
         </p>
      </div>
      <div class="flex gap-x-2">
         <div class="flex-1 flex flex-col">
            <p class="text-sm text-surface-500">Tanggal Dibuat</p>
            <p class="text-pretty">
               {{
                  dayjs(props.response.created_at).format("DD MMMM YYYY | HH:mm")
               }}
            </p>
         </div>
         <div class="flex-1 flex flex-col">
            <p class="text-sm text-surface-500">Tanggal Diperbarui</p>
            <p class="text-pretty">
               {{
                  dayjs(props.response.updated_at).format("DD MMMM YYYY | HH:mm")
               }}
            </p>
         </div>
      </div>
      <div class="flex">
         <Button
            variant="text"
            icon="pi pi-comments"
            :label="`${props.response.total_reviews} Ulasan`"
         />
         <Divider layout="vertical" class="my-2"/>
         <Button
            variant="text"
            :label="`${props.response.total_ai_reviews} Ulasan AI`"
         >
            <template #icon>
               <Icon name="tabler:brand-openai" class="size-5"/>
            </template>
         </Button>
      </div>
   </div>
</template>
