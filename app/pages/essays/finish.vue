<script setup lang="ts"></script>

<template>
   <div
      class="lg:h-[calc(100vh-49px)] lg:flex lg:justify-center lg:items-center bg-surface-50 relative"
   >
      <div
         class="absolute top-0 inset-x-0 h-1/2 w-full bg-[url('/img/mesh-gradient.png')] bg-cover bg-no-repeat"
      />
      <div class="container mx-auto max-w-screen-md z-20">
         <div class="flex flex-col gap-4">
            <Card>
               <template #title>
                  <div class="flex items-center justify-between">
                     <span class=""> 🎉 Terima Kasih, Kamu Keren! 🎉 </span>
                  </div>
               </template>
               <template #content>
                  <div class="flex flex-col gap-2">
                     <p class="text-pretty">
                        Wow, terima kasih banyak sudah meluangkan waktu untuk
                        mengisi esai ini! 🙌 Setiap jawaban yang kamu berikan
                        benar-benar membantu dalam pengembangan teknologi AI
                        yang bisa memahami dan menilai esai dengan lebih baik.
                     </p>
                     <p class="text-pretty">
                        Partisipasimu sangat berarti buat penelitian ini, dan
                        tanpa kontribusi seperti kamu, penelitian ini nggak akan
                        bisa berjalan. 💡✨
                     </p>
                     <p class="text-pretty">
                        Kalau ada pertanyaan, saran, atau sekadar ingin tahu
                        lebih lanjut tentang penelitian ini, jangan ragu buat
                        menghubungi kami. Sekali lagi, terima kasih—kamu bagian
                        dari inovasi masa depan! 🚀🔥
                     </p>
                     <p class="mt-4 text-pretty">
                        Salam hangat,
                        <br />
                        Riva Almero 😊
                     </p>
                  </div>
                  <div class="mt-4 flex justify-end">
                     <Button
                        label="Kembali ke Halaman Utama"
                        icon="pi pi-home"
                        as="router-link"
                        to="/"
                     />
                  </div>
               </template>
            </Card>
         </div>
      </div>
   </div>
</template>
