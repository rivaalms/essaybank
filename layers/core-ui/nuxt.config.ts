import { createResolver } from "@nuxt/kit"
import { resolveTheme } from "./theme"

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
   compatibilityDate: "2024-11-01",
   devtools: { enabled: false },

   css: [resolve("./assets/css/base.css"), "primeicons/primeicons.css"],

   modules: [
      "@primevue/nuxt-module",
      "@nuxtjs/tailwindcss",
      "@nuxt/icon",
      "@nuxt/fonts",
   ],

   primevue: {
      options: {
         theme: {
            preset: resolveTheme(import.meta.env.APP_PRIMARY_COLOR),
            options: {
               cssLayer: false,
               order: "tailwind-base, primevue, tailwind-utilities",
               darkModeSelector: 'light'
            }
         }
      }
   }
})
