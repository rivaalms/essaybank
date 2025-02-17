<script setup lang="ts">
const dayjs = useDayjs()
</script>

<template>
   <div class="min-h-[calc(100dvh-3rem)]">
      <slot />
   </div>
   <footer class="h-12">
      <div class="h-full container mx-auto flex items-center">
         <span class="text-surface-500">
            {{ dayjs().year() }} &copy; Riva Almero
         </span>
      </div>
   </footer>
</template>
