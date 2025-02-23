export default defineEventHandler(async (event) => {
   const $api = useApi(event)
   const body = await readBody(event)

   try {
      const response = await $api<API.Response<Model.Question>>(`/questions`, {
         method: 'post',
         body
      })
      return response
   } catch (e) {
      console.log("🚀 ~ defineEventHandler ~ e:", e)
      throwServerError(e)
   }
})