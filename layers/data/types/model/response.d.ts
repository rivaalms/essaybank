declare namespace Model {
   type Response = {
      id: number
      question_id: number
      question?: string
      reference_answer?: string
      answer: string
      total_reviews?: number
      total_ai_reviews?: number
      created_at: string
      updated_at: string
   }

   namespace Response {
      type Query = API.Paginable & Partial<{
         question: number
         load_question: boolean
         review_count: boolean
      }>

      type Request = {
         question_id: number
         answer: string
      }
   }
}