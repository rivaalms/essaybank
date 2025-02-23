export function $authApi() {
   const schema = $authSchema()

   async function login(body: InferSchema<typeof schema.login>) {
      return await $api<API.Response<{ user: Model.User, token: string }>>(`/api/auth/login`, {
         method: "post",
         body
      })
   }

   async function logout() {
      return await $api<API.Response<boolean>>(`/api/auth/logout`, {
         method: "post"
      })
   }

   async function me() {
      return await $api<API.Response<Model.User>>(`/api/auth/me`, {
         method: "get"
      })
   }

   return {
      login,
      logout,
      me
   }
}