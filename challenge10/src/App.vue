<script setup lang="ts">
import BaseLayout from './components/BaseLayout.vue'

</script>

<template>
  <BaseLayout>
    <template #menu>
      <li class="hover:text-white font-bold list-none"><RouterLink to="/">Home</RouterLink></li>
      <li class="list-none">|</li>
      <li class="hover:text-white font-bold list-none"><RouterLink to="/chat">Start Chat</RouterLink></li>
      <li class="list-none">|</li>
      <li class="hover:text-white font-bold  list-none"><RouterLink to="/history">Chat History</RouterLink></li>
    </template>
    <template #content>
      <RouterView />
    </template>
  </BaseLayout>
</template>

