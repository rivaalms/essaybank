import { definePreset, palette } from "@primevue/themes"
import Aura from "@primevue/themes/aura"

export function resolveTheme(baseColor: string) {
   const color = baseColor.startsWith("#") ? baseColor : "{" + baseColor + "}"
   return definePreset(Aura, {
      semantic: {
         primary: palette(color)
      }
   })
}
