// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: "2024-11-01",
   devtools: { enabled: false },

   modules: [
      "dayjs-nuxt",
      "@pinia/nuxt",
      "pinia-plugin-persistedstate/nuxt",
      "@vueuse/nuxt",
   ],

   dayjs: {
      locales: ['id', 'en'],
      defaultLocale: 'id',
      plugins: ['relativeTime', 'timezone', 'utc'],
      defaultTimezone: 'Asia/Jakarta'
   }
})
