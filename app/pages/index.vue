<script setup lang="ts">
definePageMeta({
   layout: "landing",
})
</script>

<template>
   <div class="relative">
      <header class="absolute top-0 inset-x-0 w-full z-50">
         <div
            class="container mx-auto py-4 px-2 xl:px-0 flex items-center justify-between"
         >
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
                           background: '#00000008',
                        },
                     },
                  },
               }"
               rounded
               as="router-link"
               to="/essays"
            />
         </div>
      </header>
      <div class="absolute top-0 h-[1440px] w-full z-20 overflow-x-hidden">
         <div class="absolute top-[2%] -left-1/4 h-[calc(75vh)] w-2/3 bg-cyan-300/80 rounded-[50%] blur-[128px] animate-enter fade-in-0 animate-ease-out animate-duration-2000"></div>
         <div class="absolute top-[2%] -right-1/4 h-[calc(75vh)] w-2/3 bg-[rgb(255,255,37)]/80 rounded-[50%] blur-[128px] animate-enter fade-in-0 animate-ease-out animate-duration-2000"></div>
         <div class="absolute top-[4%] right-1/2 translate-x-1/2 h-[calc(80vh)] w-1/2 bg-emerald-400/80 rounded-[50%] blur-[128px] animate-enter fade-in-0 animate-ease-out animate-duration-2000"></div>
      </div>
      <div class="pt-[65px]">
         <LandingHero class="h-[60vh]" />
         <LandingProfile class="relative z-50" />
         <LandingPrivacy />
         <LandingContact />
      </div>
   </div>
</template>
