type State = {
   ip: string | null
   answers: {
      question_id: number,
      answer: string
   }[]
}

export const useEssayStore = defineStore("essaybank-essay-store", {
   persist: {
      storage: piniaPluginPersistedstate.localStorage(),
   },

   state: (): State => ({
      ip: null,
      answers: []
   }),

   getters: {
      getIp: (state) => (!!state.ip && atob(state.ip)) || null,
      getAnswers: (state) => state.answers,
      getAnswer: (state) => (questionId: number) => state.answers.find(a => a.question_id == questionId),
   },

   actions: {
      updateIp(ip: IpAddress) {
         this.ip = btoa(ip)
      },

      async setIp() {
         const ipfy = await $fetch<{ ip: IpAddress }>("https://api.ipify.org?format=json")
         this.updateIp(ipfy.ip)
      },

      addAnswer(questionId: number, answer: string) {
         this.answers.push({ question_id: questionId, answer })
      },

      updateAnswer(questionId: number, answer: string) {
         const existingAnswer = this.answers.find(a => a.question_id == questionId)
         if (!existingAnswer) {
            this.addAnswer(questionId, answer)
            return
         }
         existingAnswer.answer = answer
      },

      removeAnswer(questionId: number) {
         this.answers = this.answers.filter(a => a.question_id != questionId)
      }
   }
})