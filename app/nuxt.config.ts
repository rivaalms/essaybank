// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: "2024-11-01",
   devtools: { enabled: true },
   ssr: false,

   extends: ["../layers/core-ui", "../layers/data", "../layers/utilities"],

   experimental: {
      localLayerAliases: true,
   },

   components: [
      {
         path: "~/components",
         pathPrefix: false,
      },
   ],
})
