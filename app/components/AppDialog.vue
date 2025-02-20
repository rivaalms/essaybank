<script setup lang="ts">
const appStore = useAppStore()
const dialog = computed(() => appStore.dialog)
</script>

<template>
   <Dialog
      v-model:visible="dialog.show"
      modal
      :header="dialog.title"
      :closable="dialog.closable"
      :style="{ width: dialog.width }"
      @hide="appStore.closeDialog"
   >
      <component :is="dialog.body" />
   </Dialog>
</template>