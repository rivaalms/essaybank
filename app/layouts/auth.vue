<script setup lang="ts">
const dayjs = useDayjs()

const menu: MenuItem[] = [
   {
      label: "Dashboard",
      to: "/admin",
      icon: "lucide:layout-dashboard",
   },
   {
      label: "Respons",
      to: "/admin/responses",
      icon: "lucide:message-circle",
   },
   {
      header: "Data Master",
   },
   {
      label: "Pertanyaan",
      to: "/admin/questions",
      icon: "lucide:message-circle-question",
   },
   {
      label: "Pengguna",
      to: "/admin/users",
      icon: "lucide:users",
   },
]
</script>

<template>
   <div
      class="min-h-[calc(100vh-49px-61px)] ms-[calc(16rem+2rem)] me-4 mt-[calc(61px)] relative"
   >
      <aside class="fixed inset-y-0 left-0 m-4 z-20">
         <div
            class="w-64 h-full bg-white rounded-xl border border-surface-200 shadow-md"
         >
            <div class="py-2 px-4">
               <div class="">
                  <NuxtLink to="/">
                     <span class="font-semibold text-xl text-surface-800">
                        Essay<span class="text-primary-500">Bank</span>
                     </span>
                  </NuxtLink>
               </div>
            </div>
            <CoreSidebar :menu="menu" />
         </div>
      </aside>

      <header
         class="fixed top-0 inset-x-0 z-20 mx-4 pt-4 ms-[calc(16rem+2rem)] backdrop-blur"
      >
         <div
            class="bg-white rounded-xl border border-surface-200 transition-all duration-300 shadow-md"
         >
            <div class="px-4 py-2">
               <div class="flex justify-end">
                  <Button
                     icon="pi pi-moon"
                     size="small"
                     severity="secondary"
                     variant="text"
                  />
               </div>
            </div>
         </div>
      </header>

      <main class="px-8 py-4 text-justify">
         <slot />
      </main>
   </div>
   <footer class="py-4 px-4 flex justify-end">
      <span class="text-surface-500 text-sm">
         {{ dayjs().year() }} &copy; Riva Almero
      </span>
   </footer>
</template>
