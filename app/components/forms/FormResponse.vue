<script setup lang="ts">
const props = defineProps<{
   data?: Model.Response
}>()

const appStore = useAppStore()

const form = ref<Nullable<Model.Response.Request>>({
   question_id: props.data?.question_id ?? null,
   answer: "",
})

watchEffect(() => {
   if (props.data) {
      form.value.question_id = props.data.question_id
      form.value.answer = props.data.answer
   }
})

const errors = ref<
   Partial<Nullable<Record<keyof Model.Response.Request, string>>>
>({})

async function onSubmit() {
   const isEdit = !!props.data
   await useValidation(
      $responseSchema()[isEdit ? "update" : "create"],
      form.value as Model.Response.Request
   ).validate(
      async (values) => {
         const handler = () => {
            return isEdit
               ? $responseApi().update(props.data!.id, values)
               : $responseApi().create(values)
         }
         const response = await handler()
         appStore.dialog.callback?.()
      },
      (e) => {
         errors.value = e
      }
   )
}

const { data: questions, status, refresh } = await useLazyAsyncData(
   "api-question-options",
   () => $optionApi().questions(),
   {
      server: false,
      transform: (res) => res.data,
      default: () => [] as Model.Option[]
   }
)
</script>

<template>
   <form
      class="flex flex-col gap-4"
      @submit.prevent="onSubmit"
   >
      <div class="flex flex-col">
         <label
            for="question_id"
            class="text-surface-500"
         >
            Pertanyaan
         </label>
         <Select
            v-model="form.question_id"
            :options="questions"
            option-label="label"
            option-value="value"
            filter
            :loading="status === 'pending'"
            :invalid="!!errors.question_id"
         />
         <Message
            v-if="errors.question_id"
            severity="error"
            variant="simple"
            size="small"
         >
            {{ errors.question_id }}
         </Message>
      </div>
      <div class="flex flex-col">
         <label
            for="answer"
            class="text-surface-500"
         >
            Jawaban
         </label>
         <Textarea
            v-model="form.answer"
            id="answer"
            :invalid="!!errors.answer"
            fluid
            :rows="4"
            auto-resize
         />
         <Message
            v-if="errors.answer"
            severity="error"
            variant="simple"
            size="small"
         >
            {{ errors.answer }}
         </Message>
      </div>
      <div class="flex flex-row-reverse gap-4">
         <Button
            type="submit"
            label="Simpan"
            icon="pi pi-check"
         />
         <Button
            label="Batal"
            variant="text"
            severity="secondary"
            icon="pi pi-times"
            @click="appStore.closeDialog"
         />
      </div>
   </form>
</template>
