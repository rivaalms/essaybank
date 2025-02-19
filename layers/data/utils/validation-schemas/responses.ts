export function $responseSchema() {
   const yup = useYup()

   const create = yup.object({
      answer: yup.string().required().label("Jawaban"),
      question_id: yup.number().required().label("Pertanyaan"),
   })

   const update = create.clone()

   return {
      create,
      update
   }
}
