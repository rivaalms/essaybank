export default defineEventHandler(async (event) => {
   const $api = useApi(event)
   const requesterIp = getHeader(event, 'Requester-Ip')

   try {
      const response = await $api<API.Response<boolean>>(`/auth/logout`, {
         method: "post",
         headers: {
            'Requester-Ip': requesterIp
         } as HeadersInit
      })
      deleteCookie(event, 'essaybank-auth-token', {
         path: "/"
      })
      return response
   } catch (e) {
      console.log("🚀 ~ defineEventHandler ~ e:", e)
      throwServerError(e)
   }
})
