export default defineEventHandler(async (event) => {
   const $api = useApi(event)
   const { id } = getRouterParams(event)
   const query = getQuery(event)
   const requesterIp = getHeader(event, 'Requester-Ip')

   try {
      const response = await $api(`/responses/${id}`, {
         method: "get",
         query,
         headers: {
            "Requester-Ip": requesterIp
         } as HeadersInit
      })
      return response
   } catch (e) {
      throwServerError(e)
   }
})