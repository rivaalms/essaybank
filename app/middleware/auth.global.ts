export default defineNuxtRouteMiddleware((to, from) => {
   const token = useCookie('essaybank-auth-token', {
      path: '/'
   })

   if (to.path.includes('/admin') && !token.value) {
      return navigateTo('/')
   }
})