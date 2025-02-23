declare namespace Model {
   type Question = {
      id: number
      question: string
      reference_answer?: string
      created_at: string
      updated_at: string
   }

   namespace Question {
      type Query = API.Paginable & Nullable<API.Searchable>
      type Request = Required<Pick<Model.Question, 'question' | 'reference_answer'>>
   }
}