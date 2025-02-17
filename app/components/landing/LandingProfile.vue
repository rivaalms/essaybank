<script setup lang="ts"></script>

<template>
   <div class="py-40 container max-w-screen-lg px-4 xl:px-0 mx-auto" id="profile">
      <div class="mb-12 flex flex-col items-center gap-4">
         <div class="h-28 w-28">
            <img src="/img/profile.jpg" class="object-contain rounded-full" />
         </div>
         <div class="flex flex-col items-center">
            <p class="text-xl font-medium text-center">Hai! Saya Riva Almero</p>
            <p class="text-center">
               Mahasiswa S1 Teknik Informatika di
               <a href="https://www.widyatama.ac.id/" target="_blank" class="hover:text-primary hover:underline transition-all">
                  Universitas Widyatama
               </a>
            </p>
         </div>
      </div>
      <div class="flex flex-col md:grid md:grid-cols-2 gap-4 place-items-start">
         <div class="flex flex-col md:grid gap-y-4">
            <Panel>
               <template #header>
                  <p class="text-lg font-medium">
                     Apa yang sedang saya lakukan?
                  </p>
               </template>
               <p>
                  Saya sedang meneliti tentang bagaimana AI bisa memahami dan
                  menilai jawaban esai.
               </p>
            </Panel>
            <Panel>
               <template #header>
                  <p class="text-lg font-medium">
                     Mengapa website EssayBank dibuat?
                  </p>
               </template>
               <p>
                  Saya butuh banyak contoh esai untuk melatih model AI supaya
                  bisa memahami dan memberikan penilaian yang akurat. Oleh
                  karena itu, EssayBank dibuat untuk mengumpulkan data esai
                  tersebut. Data yang dikumpulkan akan membantu meningkatkan
                  kualitas model yang nantinya bisa digunakan untuk berbagai
                  keperluan akademik dan penelitian.
               </p>
            </Panel>
         </div>
         <div class="flex flex-col md:grid gap-y-4">
            <Panel>
               <template #header>
                  <p class="text-lg font-medium">
                     Mengapa saya meneliti bidang ini?
                  </p>
               </template>
               <p>
                  Menilai esai itu butuh waktu lama, dan kadang-kadang
                  penilaiannya bisa berbeda-beda tergantung siapa yang
                  mengevaluasi jawaban esai. Saya ingin melihat apakah teknologi
                  AI bisa membantu membuat proses ini lebih cepat dan lebih
                  adil.
               </p>
            </Panel>
            <Panel>
               <template #header>
                  <p class="text-lg font-medium">Apa manfaat penelitian ini?</p>
               </template>
               <ul class="list-disc ms-4">
                  <li>
                     Bantu dunia pendidikan dengan penilaian otomatis yang lebih
                     baik.
                  </li>
                  <li>Mengurangi kesalahan atau bias dalam penilaian esai.</li>
                  <li>
                     Mengembangkan teknologi yang lebih canggih dalam bidang
                     pendidikan.
                  </li>
               </ul>
            </Panel>
         </div>
      </div>
   </div>
</template>
