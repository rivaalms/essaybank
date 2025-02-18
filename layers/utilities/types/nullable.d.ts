declare type Nullable<T> = T extends Array<infer U>
   ? Nullable<U>[]
   : T extends object
   ? {
        [K in keyof T]: T[K] extends object
           ? Nullable<T[K]> | null
           : T[K] | null
     }
   : T | null
