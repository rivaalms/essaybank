import { definePreset, palette } from "@primevue/themes"
import Aura from "@primevue/themes/aura"

export function resolveTheme(baseColor: `#${string}`, secondary?: `#${string}`, tertiary?: `#${string}`) {
   return definePreset(Aura, {
      semantic: {
         primary: palette(baseColor ?? '{emerald}'),
         secondary: palette(secondary ?? '{amber}'),
         tertiary: palette(tertiary ?? '{indigo}')
      }
   })
}
