<script setup lang="ts">
function scrollToProfile() {
   document.getElementById('profile')?.scrollIntoView()
}
</script>

<template>
   <div
      class="w-full bg-no-repeat bg-cover relative"
   >
      <div
         class="h-full container md:max-w-screen-lg px-4 xl:px-0 mx-auto flex items-center justify-center"
      >
         <div class="flex flex-col items-center gap-12 text-surface-800 z-40">
            <h1 class="text-center text-4xl md:text-7xl font-base leading-tight">
               Masa Depan Pendidikan <br />
               Dimulai dari Sini!
            </h1>
            <p class="text-base md:text-lg text-center text-surface-600">
               Jawaban esaimu akan membantu membuat sistem penilaian otomatis
               yang lebih pintar!
            </p>
            <div class="w-full flex md:grid md:grid-cols-12 gap-4">
               <div class="flex-1 md:flex-none md:col-start-5 md:col-span-2">
                  <Button
                     label="Mulai Sekarang"
                     size="large"
                     fluid
                     as="router-link"
                     to="/essays"
                  />
               </div>
               <div class="flex-1 md:flex-none md:col-start-7 md:col-span-2">
                  <Button
                     label="Tentang"
                     size="large"
                     severity="contrast"
                     class="!bg-white !border-white !text-primary hover:!bg-surface-100 hover:!border-surface-100"
                     fluid
                     @click="scrollToProfile"
                  />
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style>
html {
   scroll-behavior: smooth;
}
</style>