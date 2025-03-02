export default defineEventHandler(async (event) => {
   const $api = useApi(event)

   try {
      const response = await $api<API.Response<Model.Option[]>>(`/options/questions`, {
         method: "get",
      })
      return response
   } catch (e) {
      throwServerError(e)
   }
})