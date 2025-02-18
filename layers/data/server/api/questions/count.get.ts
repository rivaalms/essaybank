export default defineEventHandler(async (event) => {
   const $api = useApi(event)

   try {
      const response = await $api<API.Response<number>>(`/questions/count`, {
         method: "get",
      })
      return response
   } catch (e) {
      console.log("🚀 ~ defineEventHandler ~ e:", e)
      throwServerError(e)
   }
})