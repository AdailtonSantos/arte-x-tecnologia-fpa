<template>
  <div class="video-container">
    <video
      ref="videoRef"
      src="video.mp4"
      autoplay
      muted
      playsinline
      @ended="$emit('ended')"
      class="video-element"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const videoRef = ref(null)

onMounted(() => {
  videoRef.value?.play()
})
</script>

<style scoped>
.video-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
}

.video-element {
  max-width: 100vh;
  max-height: 100vw;
  transform: rotate(90deg);
  object-fit: cover;
  border: 2px solid rgb(209, 202, 202);
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px rgb(168, 168, 168);
}
</style>
