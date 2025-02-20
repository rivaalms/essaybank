<script setup lang="ts"></script>

<template>
   <div>
      <NuxtRouteAnnouncer />
      <NuxtLoadingIndicator />
      <NuxtLayout>
         <NuxtPage />
         <AppDialog />
      </NuxtLayout>
   </div>
</template>
