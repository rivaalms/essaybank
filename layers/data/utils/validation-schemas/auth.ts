export function $authSchema() {
   const yup = useYup()

   const login = yup.object({
      email: yup.string().required().email().label("Email"),
      password: yup.string().required().label("Kata Sandi")
   })

   return {
      login
   }
}