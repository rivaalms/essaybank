<script setup lang="ts">
const dayjs = useDayjs()
const { y } = useScroll(window)

function scrollToTop() {
   window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
   <div class="min-h-[calc(100dvh-3rem)] relative">
      <slot />
      <Transition>
         <div v-if="y > 700" class="fixed bottom-8 right-8">
            <Button
               icon="pi pi-chevron-up"
               rounded
               raised
               @click="scrollToTop"
            />
         </div>
      </Transition>
   </div>
   <footer class="py-4 px-2 xl:px-0">
      <div class="h-full container mx-auto flex items-center">
         <span class="text-primary-500 text-sm md:text-base">
            {{ dayjs().year() }} &copy; Riva Almero
         </span>
      </div>
   </footer>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
   transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
   opacity: 0;
}
</style>
