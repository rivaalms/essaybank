export default defineEventHandler(async (event) => {
   const $api = useApi(event)
   const query = getQuery(event)
   const { id } = getRouterParams(event)

   try {
      const response = await $api(`/questions/${id}`, {
         method: "get",
         query
      })
      return response
   } catch (e) {
      throwServerError(e)
   }
})