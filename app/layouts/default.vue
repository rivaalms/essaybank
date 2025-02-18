<script setup lang="ts">
const dayjs = useDayjs()

const essayStore = useEssayStore()
onMounted(async () => {
   essayStore.setIp()
})

const { y } = useScroll(window)
</script>

<template>
   <div class="min-h-[calc(100vh-49px)] relative">
      <header class="absolute top-0 inset-x-0 z-30">
         <div class="py-4 container px-2 md:px-0 mx-auto">
            <div class="flex items-center justify-between">
               <NuxtLink to="/">
                  <span class="font-semibold text-xl text-surface-800">
                     Essay<span class="text-primary-500">Bank</span>
                  </span>
               </NuxtLink>
               <div class="flex gap-6 items-center text-surface-800">
                  <NuxtLink class="hover:text-primary-500 transition-all" href="mailto:rivaalms@proton.me" target="_blank" external>
                     <Icon
                        name="line-md:email"
                        class="size-6"
                     />
                  </NuxtLink>
                  <NuxtLink class="hover:text-primary-500 transition-all" href="https://wa.me/62895401998822" target="_blank" external>
                     <Icon
                        name="bi:whatsapp"
                        class="size-5"
                     />
                  </NuxtLink>
               </div>
            </div>
         </div>
      </header>
      <slot />
   </div>
   <footer class="py-4 px-2 xl:px-0 bg-surface-50">
      <div class="h-full container mx-auto flex items-center">
         <span class="text-surface-500 text-sm md:text-base">
            {{ dayjs().year() }} &copy; Riva Almero
         </span>
      </div>
   </footer>
</template>
