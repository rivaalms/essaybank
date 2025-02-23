<script setup lang="ts">
const props = defineProps<{
   data?: Model.Question
}>()

const appStore = useAppStore()

const form = ref<Model.Question.Request>({
   question: "",
   reference_answer: "",
})

watchEffect(() => {
   if (props.data) {
      form.value.question = props.data.question
      form.value.reference_answer = props.data.reference_answer ?? ""
   }
})

const errors = ref<
   Partial<Nullable<Record<keyof Model.Question.Request, string>>>
>({})

async function onSubmit() {
   const isEdit = !!props.data
   await useValidation(
      $questionSchema()[isEdit ? "update" : "create"],
      form.value
   ).validate(
      async (values) => {
         const handler = () => {
            return isEdit
               ? $questionApi().update(props.data!.id, values)
               : $questionApi().create(values)
         }
         const response = await handler()
         appStore.dialog.callback?.()
      },
      (e) => {
         errors.value = e
      }
   )
}
</script>

<template>
   <form
      class="flex flex-col gap-4"
      @submit.prevent="onSubmit"
   >
      <div class="flex flex-col">
         <label
            for="question"
            class="text-surface-500"
         >
            Pertanyaan
         </label>
         <Textarea
            v-model="form.question"
            id="question"
            :invalid="!!errors.question"
            fluid
            :rows="4"
            auto-resize
         />
         <Message
            v-if="errors.question"
            severity="error"
            variant="simple"
            size="small"
         >
            {{ errors.question }}
         </Message>
      </div>
      <div class="flex flex-col">
         <label
            for="reference_answer"
            class="text-surface-500"
         >
            Referensi Jawaban
         </label>
         <Textarea
            v-model="form.reference_answer"
            id="reference_answer"
            :invalid="!!errors.reference_answer"
            fluid
            :rows="4"
            auto-resize
         />
         <Message
            v-if="errors.reference_answer"
            severity="error"
            variant="simple"
            size="small"
         >
            {{ errors.reference_answer }}
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
