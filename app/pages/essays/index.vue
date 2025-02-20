<script setup lang="ts">
definePageMeta({
   layout: "default",
})
const essayStore = useEssayStore()
const totalQuestions = await useCountQuestion()
const recentAnsweredEssay = computed(() =>
   essayStore.getAnswers.find(
      (answer, index) => index == essayStore.answers.length - 1
   )
)
</script>

<template>
   <div
      class="relative h-[calc(100vh-49px)] p-2 xl:p-0 flex items-center justify-center"
   >
      <div
         class="absolute top-0 inset-x-0 w-full h-1/2 bg-[url('/img/mesh-gradient.png')] bg-cover bg-no-repeat"
      ></div>
      <Card class="max-w-screen-md z-20">
         <template #title>
            <span class="text-xl">Sebelum Mulai, Baca Ini Dulu!</span>
         </template>
         <template #content>
            <div class="flex flex-col gap-4">
               <p class="text-pretty">
                  Sebelum kamu mulai mengisi esai, ada beberapa hal penting yang
                  perlu kamu tahu:
               </p>
               <ul class="list-disc ms-4">
                  <li class="text-pretty">
                     <span class="font-medium text-primary-500">
                        Ada {{ totalQuestions }} pertanyaan esai
                     </span>
                     yang bisa kamu isi. Kamu nggak harus menjawab semuanya,
                     tapi semakin banyak yang kamu isi, semakin bermanfaat untuk
                     penelitian ini!
                  </li>
                  <li class="text-pretty">
                     <span class="font-medium text-primary-500">
                        Nggak ada jawaban yang salah!
                     </span>
                     Jawablah dengan gaya dan pemikiranmu sendiri. Santai aja,
                     nggak perlu khawatir soal benar dan salah. 😉
                  </li>
                  <li class="text-pretty">
                     <span class="font-medium text-primary-500">
                        Progres kamu aman!
                     </span>
                     Jawaban yang sudah kamu isi akan langsung tersimpan secara
                     otomatis. Jadi, jika tab tertutup atau kamu pindah halaman,
                     kamu bisa lanjut kapan saja tanpa kehilangan progres!
                  </li>
                  <li class="text-pretty">
                     <span class="font-medium text-primary-500">
                        Kalau ada pertanyaan atau kendala, jangan ragu untuk
                        menghubungi kami!
                     </span>
                  </li>
               </ul>

               <p class="text-pretty">Siap? Yuk mulai esainya! 🚀✍️</p>
            </div>
         </template>
         <template #footer>
            <div
               class="flex flex-col md:flex-row items-center justify-between gap-4 mt-8"
            >
               <Button
                  label="Mulai Sekarang"
                  icon="pi pi-arrow-right"
                  icon-pos="right"
                  size="large"
                  as="router-link"
                  :to="`/essays/1`"
                  class="order-first md:order-last"
               />
               <Button
                  label="Kembali ke Halaman Utama"
                  variant="text"
                  severity="secondary"
                  icon="pi pi-arrow-left"
                  class="order-last md:order-first"
                  as="router-link"
                  to="/"
               />
            </div>
         </template>
      </Card>
   </div>
</template>
