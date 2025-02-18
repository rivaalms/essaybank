export function $questionApi() {
   async function list(query?: Model.Question.Query) {
      return await $api<API.Response<API.Paginate<Model.Question[]>>>(`/api/questions`, {
         method: "get",
         query
      })
   }

   async function find(id: number) {
      return await $api<API.Response<Model.Question>>(`/api/questions/${id}`, {
         method: "get"
      })
   }

   async function count() {
      return await $api<API.Response<number>>(`/api/questions/count`, {
         method: "get"
      })
   }

   return {
      list,
      find,
      count
   }
}