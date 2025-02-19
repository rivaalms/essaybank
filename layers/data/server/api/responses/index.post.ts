export default defineEventHandler(async (event) => {
   const $api = useApi(event)
   const body = await readBody<Model.Response.Request>(event)
   const requesterIp = getHeader(event, 'Requester-Ip')

   try {
      const response = await $api<API.Response<Model.Response>>(`/responses`, {
         method: "post",
         body,
         headers: {
            'Requester-Ip': requesterIp
         } as HeadersInit
      })
      return response
   } catch (e) {
      throwServerError(e)
   }
})
