type State = {
   user: Model.User
}

export const useAuthStore = defineStore("essaybank-auth-store", {
   state: (): Nullable<State> => ({
      user: null,
   }),

   getters: {
      getUser: (state) => state.user,
   },

   actions: {
      async login(email: string, password: string) {
         const response = await $authApi().login({ email, password })
         this.user = response.data.user
      },

      async logout() {
         await $authApi().logout()
      },

      async fetchSelf() {
         const response = await $authApi().me()
         this.user = response.data
      },
   },
})
