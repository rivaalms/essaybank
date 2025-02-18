export default defineEventHandler(async (event) => {
   const $api = useApi(event)
   const query = getQuery(event)

   try {
      const response = await $api<API.Response<API.Paginate<Model.Question[]>>>(`/questions`, {
         method: "get",
         query
      })
      return response
   } catch (e) {
      throwServerError(e)
   }
})