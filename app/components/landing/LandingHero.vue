<script setup lang="ts">
function scrollToProfile() {
   document.getElementById('profile')?.scrollIntoView()
}
</script>

<template>
   <div
      class="h-screen w-full bg-[url('/img/mesh-gradient.png')] bg-no-repeat bg-cover"
   >
      <div
         class="h-full container md:max-w-screen-lg px-4 xl:px-0 mx-auto flex items-center justify-center"
      >
         <div class="flex flex-col items-center gap-8 text-surface-800">
            <h1 class="text-center text-4xl md:text-6xl font-medium leading-tight">
               Masa Depan Pendidikan <br />
               Dimulai dari Sini!
            </h1>
            <p class="text-base md:text-lg text-center">
               Jawaban esaimu akan membantu membuat sistem penilaian otomatis
               yang lebih pintar!
            </p>
            <div class="w-full flex md:grid md:grid-cols-12 gap-4">
               <div class="flex-1 md:flex-none md:col-start-4 md:col-span-3">
                  <Button
                     label="Mulai Sekarang"
                     size="large"
                     fluid
                     as="router-link"
                     to="/essays"
                  />
               </div>
               <div class="flex-1 md:flex-none md:col-start-7 md:col-span-3">
                  <Button
                     label="Tentang"
                     size="large"
                     severity="secondary"
                     variant="outlined"
                     :dt="{
                        outlined: {
                           secondary: {
                              border: {
                                 color: 'var(--p-button-outlined-secondary-color)',
                              },
                              hover: {
                                 background: '#F1F5F966',
                              },
                           },
                        },
                     }"
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