import { definePreset, palette } from "@primevue/themes"
import Aura from "@primevue/themes/aura"

export function resolveTheme(baseColor: `#${string}`) {
   return definePreset(Aura, {
      semantic: {
         primary: palette(baseColor ?? '{emerald}'),
         colorScheme: {
            light: {
               surface: palette('{gray}')
            }
         }
      },
      components: {
         button: {
            extend: {
               accent: {
                  color: 'var(--secondary-color-300)'
               }
            }
         }
      }
   })
}
