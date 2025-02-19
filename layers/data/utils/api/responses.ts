export function $responseApi() {
   const essayStore = useEssayStore()
   const schema = $responseSchema()

   async function list(query?: Model.Response.Query) {
      return await $api<API.Response<API.Paginate<Model.Response[]>>>(`/api/responses`, {
         method: "get",
         query,
         headers: {
            'Requester-Ip': essayStore.getIp
         } as HeadersInit
      })
   }

   async function find(id: number) {
      return await $api<API.Response<Model.Response>>(`/api/responses/${id}`, {
         method: "get",
         headers: {
            'Requester-Ip': essayStore.getIp
         } as HeadersInit
      })
   }

   async function create(body: InferSchema<typeof schema.create>) {
      return await $api<API.Response<Model.Response>>(`/api/responses`, {
         method: "post",
         body,
         headers: {
            'Requester-Ip': essayStore.getIp
         } as HeadersInit
      })
   }

   async function update(id: number, body: InferSchema<typeof schema.update>) {
      return await $api<API.Response<boolean>>(`/api/responses/${id}`, {
         method: "put",
         body,
         headers: {
            'Requester-Ip': essayStore.getIp
         } as HeadersInit
      })
   }

   return {
      list,
      find,
      create,
      update
   }
}