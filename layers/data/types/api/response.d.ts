declare namespace API {
   type Response<T> = {
      meta: {
         success: boolean
         code: number
         message: string
      }
      data: T
   }

   type Paginate<T> = {
      page: number
      per_page: number
      data: T
      total: number
      from: number
      to: number
      last_page: number
   }
}