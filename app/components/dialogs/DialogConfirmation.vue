<script setup lang="ts" generic="T">
const props = withDefaults(
   defineProps<{
      data: T
      message?: string
      icon?: string
   }>(),
   {
      message: "Confirm action?",
      icon: "lucide:alert-circle",
   }
)

const emit = defineEmits<{
   (e: "confirm", data: T): void
   (e: "cancel"): void
   (e: "close"): void
}>()

const loading = shallowRef(false)

function onCancel() {
   emit("cancel")
   emit("close")
}

function onConfirm() {
   emit("confirm", props.data)
   emit("close")
}
</script>

<template>
   <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-4 items-center">
         <Icon :name="props.icon" class="h-14 w-14 text-surface-500" />
         <p>{{ message }}</p>
      </div>
      <div class="flex justify-end gap-2">
         <Button
            label="Batalkan"
            variant="text"
            severity="secondary"
            :disabled="loading"
            @click="onCancel()"
         />
         <Button label="Konfirmasi" :loading="loading" @click="onConfirm()" />
      </div>
   </div>
</template>
