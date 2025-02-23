declare namespace Model {
   type User = {
      id: number
      name: string
      email: string
      role: Model.User.Role
      created_at: string
      updated_at: string
   }

   namespace User {
      type Role = "admin" | "reviewer"

      namespace Request {
         type Login = {
            email: string
            password: string
         }
      }
   }
}