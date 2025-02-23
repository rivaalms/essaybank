export default defineEventHandler(async (event) => {
   const $api = useApi(event)
   const body = await readBody(event)
   const { id } = getRouterParams(event)

   try {
      const response = await $api<API.Response<Model.Question>>(`/questions/${id}`, {
         method: 'put',
         body
      })
      return response
   } catch (e) {
      throwServerError(e)
   }
})