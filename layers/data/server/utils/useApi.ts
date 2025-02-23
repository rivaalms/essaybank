import { type H3Event } from 'h3'

export default function (event: H3Event) {
   const config = useRuntimeConfig()
   const token = getCookie(event, 'essaybank-auth-token')

   const handler = $fetch.create({
      baseURL: config.public.apiUrl,

      async onRequest({ request, options }) {
         if (token) {
            options.headers.set('Authorization', `Bearer ${token}`)
         }

         options.headers.set('Accept', 'application/json')
      },

      async onRequestError({ error }) {
         throw error
      },

      async onResponse({ response }) {
         return response._data
      },

      async onResponseError({ response, error }) {
         if (response.status == 401) {
            deleteCookie(event, 'essaybank-auth-token', {
               path: '/'
            })
         }
         throw error ?? response._data
      }
   })

   return handler
}