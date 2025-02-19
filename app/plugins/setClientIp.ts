export default defineNuxtPlugin((nuxtApp) => {
   const essayStore = useEssayStore()
   essayStore.setIp()
})