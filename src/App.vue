<template>
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
</template>

<script setup>
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
}
</style>
