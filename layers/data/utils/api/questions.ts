export function $questionApi() {
   const schema = $questionSchema()

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

   async function create(body: InferSchema<typeof schema.create>) {
      return await $api<API.Response<Model.Question>>(`/api/questions`, {
         method: "post",
         body
      })
   }

   async function update(id: number, body: InferSchema<typeof schema.update>) {
      return await $api<API.Response<boolean>>(`/api/questions/${id}`, {
         method: "put",
         body
      })
   }

   async function remove(id: number) {
      return await $api<API.Response<boolean>>(`/api/questions/${id}`, {
         method: "delete"
      })
   }

   return {
      list,
      find,
      count,
      create,
      update,
      remove
   }
}