<script setup lang="ts"></script>

<template>
   <div class="min-h-[60vh] py-24 md:py-0 md:h-[60vh]">
      <div
         class="container max-w-screen-lg mx-auto px-4 xl:px-0 h-full flex flex-col items-center justify-center"
      >
         <div class="flex flex-col sm:grid sm:grid-cols-12 gap-12 sm:place-items-center">
            <div class="col-span-12 sm:col-span-8">
               <p class="text-2xl md:text-4xl font-medium mb-8">Informasi Kontak</p>
               <p class="mb-4 text-pretty">
                  Jika kamu memiliki kritik, saran, atau pertanyaan seputar
                  penelitian ini, jangan ragu untuk menghubungi saya!
               </p>
               <div class="mb-4 flex flex-col gap-2">
                  <a
                     href="mailto:rivaalms@proton.me"
                     class="flex gap-4 hover:text-primary-500 hover:underline transition-all"
                  >
                     <Icon name="line-md:email" class="size-6" />
                     rivaalms@proton.me
                  </a>
                  <a
                     href="https://wa.me/62895401998822"
                     target="_blank"
                     class="flex gap-4 hover:text-primary-500 hover:underline transition-all"
                  >
                     <Icon name="bi:whatsapp" class="size-6" />
                     +62 895 401 998 822
                  </a>
               </div>
               <p class="text-pretty">
                  Saya akan sangat senang menerima masukan dari kamu supaya
                  penelitian ini bisa semakin bagus. Jadi, kalau ada ide atau
                  pertanyaan, feel free to reach out!
               </p>
            </div>
            <div class="sm:col-span-4">
               <img src="/img/mailbox-noir.svg" class="object-cover h-full w-full" />
            </div>
         </div>
      </div>
   </div>
</template>
