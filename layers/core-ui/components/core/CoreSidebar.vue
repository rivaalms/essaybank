<script setup lang="ts">
defineProps<{
   menu: MenuItem[]
}>()

const route = useRoute()

const openedSubmenu = ref<string[]>([])
function toggleSubmenu(item: MenuItem) {
   if (openedSubmenu.value.includes(item.label as string)) {
      openedSubmenu.value = openedSubmenu.value.filter((i) => i !== item.label)
   } else {
      openedSubmenu.value.push(item.label as string)
   }
}

function transitionEnter(el: Element) {
   $transitionSlideDown(el as HTMLElement)
}
function transitionLeave(el: Element) {
   $transitionSlideUp(el as HTMLElement)
}
</script>

<template>
   <div
      class="flex flex-col h-full p-2 rounded-xl"
   >
      <slot name="start" />
      <Divider
         v-if="$slots.start"
         class="!m-0 !my-2"
      />
      <div class="flex-1 flex flex-col gap-2">
         <template v-for="item in menu">
            <template v-if="item.header">
               <span class="font-medium text-sm text-surface-500 mt-2">
                  {{ item.header }}
               </span>
            </template>
            <Divider v-else-if="item.separator" />
            <NuxtLink
               v-else
               :to="item.items ? undefined : item.to"
               class="px-2.5 py-2.5 cursor-pointer select-none rounded-lg hover:bg-surface-100 active:bg-surface-200/75 transition duration-300"
               :class="[
                  {
                     'bg-primary-50 !text-primary-500 hover:!bg-primary-100/75 active:!bg-primary-200/75':
                        (route.path == item.to) || item.items?.some((i) => i.to == route.path),
                  },
               ]"
               @click="item.items && toggleSubmenu(item)"
            >
               <div
                  class="w-full flex items-center"
                  :class="[
                     {
                        'justify-between': item.items,
                     },
                  ]"
               >
                  <div class="flex gap-2 items-center">
                     <Icon
                        v-if="item.icon"
                        :name="item.icon"
                        class="h-4 w-4"
                     />
                     {{ item.label }}
                  </div>
                  <Icon
                     v-if="item.items"
                     name="lucide:chevron-down"
                     class="transition-transform duration-300"
                     :class="[
                        {
                           '-rotate-180': openedSubmenu.includes(item.label as string),
                        }
                     ]"
                  />
               </div>
            </NuxtLink>
            <transition
               @enter="transitionEnter"
               @leave="transitionLeave"
            >
               <div
                  v-if="openedSubmenu.includes(item.label as string)"
                  class="rounded-lg"
               >
                  <CoreSidebar
                     :menu="(item.items as MenuItem[])"
                     class="border border-dashed border-surface-200"
                  />
               </div>
            </transition>
         </template>
      </div>
      <Divider v-if="$slots.end" />
      <slot name="end" />
   </div>
</template>
