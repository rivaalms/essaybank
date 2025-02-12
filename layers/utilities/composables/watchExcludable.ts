import type { WatchCallback, WatchOptions } from "vue"

type WatchSource<T extends Record<PropertyKey, unknown>> =
   | Ref<T, any>
   | ComputedRef<T>
   | (() => T)
type MaybeUndefined<T, I> = I extends true ? T | undefined : T
type WatchExcludableOptions<
   T extends Record<PropertyKey, unknown>,
   I
> = WatchOptions<I> & {
   exclude?: (keyof T)[]
}

export default function <
   T extends Record<PropertyKey, unknown>,
   Immediate extends Readonly<boolean>
>(
   source: WatchSource<T>,
   cb: WatchCallback<T, MaybeUndefined<T, Immediate>>,
   options?: WatchExcludableOptions<T, Immediate>
) {
   const createFilteredObject = (obj: T) => {
      let filtered: Partial<T> = {}
      for (const key in obj) {
         if (!options?.exclude?.includes(key)) {
            filtered[key] = obj[key]
         }
      }
      return filtered as T
   }

   const { exclude, ...opts } = options || {}

   const unwatch = watch(
      () =>
         createFilteredObject(
            typeof source == "function" ? source() : source.value
         ),
      cb,
      { ...opts }
   )

   onBeforeUnmount(() => unwatch())
   return unwatch
}
