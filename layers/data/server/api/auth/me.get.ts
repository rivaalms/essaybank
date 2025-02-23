export default defineEventHandler(async (event) => {
   const $api = useApi(event)
   const requesterIp = getHeader(event, 'Requester-Ip')

   try {
      const response = await $api<API.Response<Model.User>>(`/auth/me`, {
         method: "get",
         headers: {
            'Requester-Ip': requesterIp
         } as HeadersInit
      })
      return response
   } catch (e) {
      console.log("🚀 ~ defineEventHandler ~ e:", e)
      throwServerError(e)
   }
})
