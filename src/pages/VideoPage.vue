<template>
    <div class="page">
        <VideoPlayer @ended="goToCards" />
    </div>
</template>

<script setup>
import VideoPlayer from '../components/VideoPlayer.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToCards() {
    router.push('/cards')
}
</script>

<style scoped>
.page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
}
</style>