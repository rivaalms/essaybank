export function $questionSchema() {
   const yup = useYup()

   const create = yup.object({
      question: yup.string().required().label("Pertanyaan"),
      reference_answer: yup.string().required().label("Jawaban Referensi"),
   })

   const update = create.clone()

   return {
      create,
      update
   }
}