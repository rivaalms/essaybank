export default defineNuxtPlugin((nuxtApp) => {
   const token = useCookie('essaybank-auth-token', {
      path: '/'
   })

   if (token.value) {
      useAuthStore().fetchSelf()
   }
})