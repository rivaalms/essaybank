export default defineEventHandler(async (event) => {
   const $api = useApi(event)
   const body = await readBody<Model.User.Request.Login>(event)
   const requesterIp = getHeader(event, 'Requester-Ip')

   try {
      const response = await $api<API.Response<{ user: Model.User, token: string }>>(`/auth/login`, {
         method: "post",
         body,
         headers: {
            'Requester-Ip': requesterIp
         } as HeadersInit
      })
      setCookie(event, 'essaybank-auth-token', response.data.token, {
         path: "/",
      })
      return response
   } catch (e) {
      console.log("🚀 ~ defineEventHandler ~ e:", e)
      throwServerError(e)
   }
})
