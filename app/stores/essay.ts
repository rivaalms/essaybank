type State = {
   ip: string | null
   answers: Model.Response[]
}

export const useEssayStore = defineStore("essaybank-essay-store", {
   state: (): State => ({
      ip: null,
      answers: [],
   }),

   getters: {
      getIp: (state) => (decode?: boolean) => {
         if (state.ip && decode) {
            return atob(state.ip)
         }
         return state.ip
      },
      getAnswers: (state) => state.answers,
      getAnswer: (state) => (questionId: number) =>
         state.answers.find((a) => a.question_id == questionId),
   },

   actions: {
      updateIp(ip: IpAddress) {
         this.ip = btoa(ip)
      },

      async setIp() {
         const ipfy = await $fetch<{ ip: IpAddress }>(
            "https://api.ipify.org?format=json"
         )
         this.updateIp(ipfy.ip)
      },

      async fetchAnswers() {
         await $responseApi()
            .list()
            .then((res) => {
               this.answers = res.data.data
            })
      },

      async addAnswer(questionId: number, answer: string) {
         await useValidation($responseSchema().create, {
            question_id: questionId,
            answer,
         }).validate(async (values) => {
            await $responseApi().create(values)
               .then(async () => await this.fetchAnswers())
         })
      },

      async updateAnswer(questionId: number, answer: string) {
         const existingAnswer = this.answers.find(
            (a) => a.question_id == questionId
         )
         if (!existingAnswer) {
            this.addAnswer(questionId, answer)
            return
         }

         await useValidation($responseSchema().update, {
            question_id: questionId,
            answer,
         }).validate(async (values) => {
            await $responseApi().update(existingAnswer.id, values)
               .then(async () => this.fetchAnswers())
         })
      },
   },
})
