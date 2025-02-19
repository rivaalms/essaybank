<script setup lang="ts">
const route = useRoute()
const id = computed(() => Number(route.params.id as string))

const { data } = await useLazyAsyncData(
   `question-${id.value}`,
   () => $questionApi().find(id.value),
   {
      server: false,
      transform: (res) => res.data,
   }
)

const count = await useCountQuestion()
const countWatcher = watch(
   count,
   async (value) => {
      if (value > 0) {
         setTimeout(() => {
            const currentActive = document.getElementById(
               `question-indicator-${id.value}`
            )
            const { left: btnLeft, width: btnWidth } =
               useElementBounding(currentActive)
            const { left: containerLeft, width: containerWidth } =
               useElementBounding(questionIndicatorContainerRef)

            const offset =
               btnLeft.value -
               containerLeft.value -
               (containerWidth.value - btnWidth.value) / 2
            x.value = questionIndicatorContainerRef.value.scrollLeft + offset
            countWatcher()
         }, 100)
      }
   },
   { immediate: true }
)

const essayStore = useEssayStore()
const answeredQuestionId = computed(() =>
   essayStore.getAnswers.map((answer) => answer.question_id)
)

const answer = shallowRef("")

const questionIndicatorContainerRef = ref()
const { x } = useScroll(questionIndicatorContainerRef)

function scrollProgressTo(value: number) {
   x.value = value
}

async function navigateToQuestion(questionId: number) {
   saveAnswer()
   await navigateTo(`/essays/${questionId}`)
}

function saveAnswer() {
   if (answer.value.length > 0) {
      const existingAnswer = essayStore.getAnswer(id.value)
      if (existingAnswer?.answer.trim() != answer.value.trim()) {
         essayStore.updateAnswer(id.value, answer.value)
      }
   }
}

async function onPrevQuestion() {
   await navigateTo(`/essays/${id.value - 1}`)
}

async function onNextQuestion() {
   saveAnswer()
   await navigateTo(`/essays/${id.value + 1}`)
}

async function onFinish() {
   saveAnswer()
}

onMounted(async () => {
   if (essayStore.getAnswers.length < 1) {
      await essayStore.fetchAnswers()
   }

   setTimeout(() => {
      document.getElementById("answer-input")?.focus()
   }, 50)
})

watch(
   () => essayStore.getAnswers.length,
   () => {
      const existingAnswer = essayStore.getAnswer(id.value)
      if (existingAnswer) {
         answer.value = existingAnswer.answer
      }
   },
   { immediate: true }
)

addEventListener("beforeunload", () => {
   saveAnswer()
})
</script>

<template>
   <div
      class="lg:h-[calc(100vh-49px)] lg:flex lg:justify-center lg:items-center bg-surface-50 relative"
   >
      <div
         class="absolute top-0 inset-x-0 h-1/2 w-full bg-[url('/img/mesh-gradient.png')] bg-cover bg-no-repeat"
      ></div>
      <div class="container mx-auto max-w-screen-md z-20">
         <div class="flex flex-col gap-4">
            <Card>
               <template #title>
                  <span class="text-base font-normal text-surface-500">
                     Progress Kamu
                  </span>
               </template>
               <template #content>
                  <div class="flex items-center justify-between gap-4">
                     <Button
                        icon="pi pi-chevron-left"
                        severity="secondary"
                        variant="text"
                        class="!shrink-0"
                        @click="scrollProgressTo(x - 439)"
                     />
                     <div
                        id="question-indicator-container"
                        ref="questionIndicatorContainerRef"
                        class="flex gap-4 overflow-x-auto py-2"
                     >
                        <template v-for="n in count">
                           <div
                              :id="`question-indicator-${n}`"
                              class="px-4 py-2 rounded-lg select-none cursor-pointer"
                              :class="{
                                 'bg-primary-100 text-primary-600 border border-primary-600':
                                    n === id,
                                 'bg-surface-100 text-surface-500':
                                    n !== id && !answeredQuestionId.includes(n),
                                 'bg-emerald-100 text-emerald-500 border border-emerald-500':
                                    n !== id && answeredQuestionId.includes(n),
                              }"
                              @click.stop="navigateToQuestion(n)"
                           >
                              {{ n }}
                           </div>
                        </template>
                     </div>
                     <Button
                        icon="pi pi-chevron-right"
                        severity="secondary"
                        variant="text"
                        class="!shrink-0"
                        @click="scrollProgressTo(x + 439)"
                     />
                  </div>
               </template>
            </Card>
            <Card>
               <template #title>
                  <span class="text-lg font-medium">
                     Pertanyaan #{{ data?.id }}
                  </span>
               </template>
               <template #content>
                  <div class="flex flex-col gap-8">
                     <p class="text-pretty">
                        {{ data?.question }}
                     </p>
                     <div class="flex flex-col gap-4">
                        <Textarea
                           v-model="answer"
                           id="answer-input"
                           placeholder="Tulis jawaban kamu disini"
                           :rows="4"
                           auto-resize
                           autofocus
                        />
                        <div
                           class="flex items-center"
                           :class="[
                              id - 1 > 0 ? 'justify-between' : 'justify-end',
                           ]"
                        >
                           <Button
                              v-if="id - 1 > 0"
                              label="Sebelumnya"
                              icon="pi pi-arrow-left"
                              variant="text"
                              severity="secondary"
                              @click="onPrevQuestion"
                           />
                           <Button
                              v-if="id != count"
                              label="Lanjut"
                              icon="pi pi-arrow-right"
                              icon-pos="right"
                              @click="onNextQuestion"
                           />
                           <Button
                              v-else
                              label="Selesai"
                              icon="pi pi-check"
                              @click="onFinish"
                           />
                        </div>
                     </div>
                  </div>
               </template>
            </Card>
         </div>
      </div>
   </div>
</template>

<style scoped>
#question-indicator-container {
   scroll-behavior: smooth;
}
</style>
