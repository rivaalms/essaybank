<script setup lang="ts">
definePageMeta({
   layout: 'landing'
})
</script>

<template>
   <div class="relative">
      <header class="absolute top-0 inset-x-0 w-full">
         <div class="container mx-auto py-4 px-2 xl:px-0 flex items-center justify-between">
            <span class="font-semibold text-xl text-surface-800">
               Essay<span class="text-primary-500">Bank</span>
            </span>
            <Button
               label="Isi Esai Sekarang"
               icon="pi pi-arrow-right"
               icon-pos="right"
               severity="contrast"
               variant="outlined"
               :dt="{
                  outlined: {
                     contrast: {
                        hover: {
                           background: '#00000008'
                        }
                     }
                  }
               }"
               rounded
            />
         </div>
      </header>
      <LandingHero />
      <LandingProfile />
      <LandingPrivacy />
      <LandingContact />
   </div>
</template>
