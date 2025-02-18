<script setup lang="ts">
const dayjs = useDayjs()

const essayStore = useEssayStore()
onMounted(async () => {
   essayStore.setIp()
})
</script>

<template>
   <div class="min-h-[calc(100vh-49px)] relative">
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
