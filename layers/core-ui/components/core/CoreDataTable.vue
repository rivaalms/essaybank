<script setup lang="ts" generic="T">
import { type DataTablePageEvent } from "primevue"

const props = withDefaults(
   defineProps<{
      rows: T[]
      columns: Array<{ field: string; header: string }>
      total: number
      loading: boolean
   }>(),
   {
      total: 0,
   }
)

const page = defineModel<number>("page", { required: true, default: 1 })
const perPage = defineModel<number>("perPage", { required: true, default: 10 })

const perPageOptions = [5, 10, 20, 50, 100]

function onPage(event: DataTablePageEvent) {
   page.value = event.page + 1
   perPage.value = event.rows
}

function showData(item: NonNullable<T>, column: typeof props["columns"][number]) {
   if (column.field.includes(".")) {
      const keys = column.field.split(".")
      return keys.reduce((item, key) => (item as Record<PropertyKey, unknown>)[key] as never, item)
   }
   return (item as Record<PropertyKey, unknown>)[column.field]
}
</script>

<template>
   <DataTable
      :value="props.rows"
      paginator
      :rows="perPage"
      :rows-per-page-options="perPageOptions"
      :total-records="props.total"
      :loading="props.loading"
      lazy
      @page="onPage"
   >
      <template v-if="$slots.header" #header>
         <slot name="header" />
      </template>
      <template
         v-for="column in props.columns"
         :key="column.field"
      >
         <Column
            :field="column.field"
            :header="column.header"
         >
            <template #body="{ data }">
               <slot
                  :name="`row.${column.field}`"
                  :row="(data as T)"
               >
                  {{ showData(data, column) }}
               </slot>
            </template>
         </Column>
      </template>
   </DataTable>
</template>
