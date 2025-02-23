<script setup lang="ts">
const form = ref<Nullable<Model.User.Request.Login>>({
   email: null,
   password: null,
})

const errors = ref<
   Partial<Nullable<Record<keyof Model.User.Request.Login, string>>>
>({})

async function onSubmit() {
   await useValidation(
      $authSchema().login,
      form.value as Model.User.Request.Login
   ).validate(
      async (values) => {
         await useAuthStore()
            .login(values.email, values.password)
            .then((res) => {
               navigateTo("/admin")
            })
      },
      (e) => {
         errors.value = e
      }
   )
}

const showPassword = shallowRef(false)
</script>

<template>
   <div class="relative h-[calc(100vh-49px)] p-2 xl:p-0 grid grid-cols-2">
      <div class="h-full flex justify-center items-center">
         <div class="w-1/2 flex flex-col gap-8">
            <h1 class="text-xl font-medium">Login</h1>
            <form
               class="flex flex-col gap-4"
               @submit.prevent="onSubmit"
            >
               <div class="flex flex-col gap-2">
                  <label for="email">Email</label>
                  <InputText
                     v-model="form.email"
                     id="email"
                     type="email"
                     :invalid="!!errors.email"
                  />
                  <Message
                     v-if="errors.email"
                     severity="error"
                     variant="simple"
                     size="small"
                  >
                     {{ errors.email }}
                  </Message>
               </div>
               <div class="flex flex-col gap-2">
                  <label for="password">Kata Sandi</label>
                  <IconField>
                     <InputText
                        v-model="form.password"
                        id="password"
                        :type="showPassword ? 'text' : 'password'"
                        fluid
                        :invalid="!!errors.password"
                     />
                     <InputIcon
                        v-tooltip="
                           showPassword
                              ? 'Sembunyikan Kata Sandi'
                              : 'Tampilkan Kata Sandi'
                        "
                        class="pi"
                        :class="[!showPassword ? 'pi-eye' : 'pi-eye-slash']"
                        @click="showPassword = !showPassword"
                     />
                  </IconField>
                  <Message
                     v-if="errors.password"
                     severity="error"
                     variant="simple"
                     size="small"
                  >
                     {{ errors.password }}
                  </Message>
               </div>
               <div class="flex flex-row-reverse">
                  <Button
                     label="Login"
                     type="submit"
                     icon="pi pi-sign-in"
                  />
               </div>
            </form>
         </div>
      </div>
      <div
         class="h-full bg-gradient-to-br from-primary-100 from-15% to-primary-300"
      ></div>
   </div>
</template>
