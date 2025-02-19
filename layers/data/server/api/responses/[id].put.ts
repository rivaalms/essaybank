export default defineEventHandler(async (event) => {
   const $api = useApi(event)
   const body = await readBody<Model.Response.Request>(event)
   const { id } = getRouterParams(event)
   const requesterIp = getHeader(event, 'Requester-Ip')

   try {
      const response = await $api<API.Response<boolean>>(`/responses/${id}`, {
         method: "put",
         body,
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
