export function $optionApi() {
   async function questions() {
      return await $api<API.Response<Model.Option[]>>(`/api/options/questions`, {
         method: "get"
      })
   }

   return {
      questions
   }
}