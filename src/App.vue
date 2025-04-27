<template>
  <div class="app-container">
    <Transition name="fade" mode="out-in">
      <component
        :is="currentComponent"
        @decline="step = 'video'"
        @ended="step = 'cards'"
      />
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import DialogBox from './components/DialogBox.vue'
import VideoPlayer from './components/VideoPlayer.vue'
import CardGallery from './components/CardGallery.vue'

const step = ref('dialog')

const currentComponent = computed(() => {
  if (step.value === 'dialog') return DialogBox
  if (step.value === 'video') return VideoPlayer
  if (step.value === 'cards') return CardGallery
  return null
})
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
}

/* Transição fade */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

<style>
body {
  margin: 0;
  font-family: system-ui;
}
</style>
