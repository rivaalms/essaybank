type State = {
   dialog: {
      show: boolean
      title: string
      body: ReturnType<typeof h>
      width: "auto" | `${number}px` | `${number}rem`
      callback: Function
      closable: boolean
   }
}

export const useAppStore = defineStore("essaybank-app-store", {
   state: (): State => ({
      dialog: {
         show: false,
         title: "",
         body: h("div"),
         width: "auto",
         callback: () => {},
         closable: true,
      },
   }),

   actions: {
      showDialog(
         title: string,
         body: ReturnType<typeof h>,
         opts?: Partial<
            Pick<State["dialog"], "width" | "callback" | "closable">
         >
      ) {
         this.dialog.title = title
         this.dialog.body = body
         this.dialog.width = opts?.width ?? "auto"
         this.dialog.callback = opts?.callback ?? (() => {})
         this.dialog.closable = opts?.closable ?? true
         this.dialog.show = true
      },

      async showConfirmDialog<
         D extends unknown,
         OnConfirm extends ReturnType<(data: D) => unknown>,
         OnCancel extends ReturnType<() => unknown>
      >(_opts: {
         title?: string
         message?: string
         onConfirm: (data: D) => OnConfirm
         onCancel?: () => OnCancel
         data: D
         width?: "auto" | `${number}px` | `${number}rem`
         callback?: Function
      }) {
         const { width, callback, title, ...opts } = _opts
         this.dialog.body = h(
            (await import("@/components/dialogs/DialogConfirmation.vue")).default,
            {
               data: opts.data,
               message: opts.message,
               onConfirm: opts.onConfirm as any,
               onCancel: opts.onCancel || (() => {}),
               onClose: () => this.closeDialog()
            }
         )
         this.dialog.title = title || "Confirmation"
         this.dialog.width = width || "400px"
         this.dialog.callback = callback || (() => {})
         this.dialog.show = true
      },

      closeDialog() {
         this.dialog.show = false
         setTimeout(() => {
            this.dialog.title = ""
            this.dialog.body = h("div")
            this.dialog.width = "auto"
            this.dialog.callback = () => {}
            this.dialog.closable = true
         }, 500)
      },
   },
})
