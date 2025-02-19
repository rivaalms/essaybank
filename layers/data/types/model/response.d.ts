declare namespace Model {
   type Response = {
      id: number
      question_id: number
      question?: string
      reference_answer?: string
      answer: string
      created_at: string
      updated_at: string
   }

   namespace Response {
      type Query = API.Paginable & {
         question: number
      }

      type Request = {
         question_id: number
         answer: string
      }
   }
}