<template>
    <div class="page">
        <DialogBox @decline="goToVideo" />
    </div>
</template>

<script setup>
import DialogBox from '@/components/DialogBox.vue'

import { useRouter } from 'vue-router'

const router = useRouter()

function goToVideo() {
    router.push('/video')
}
</script>

<style scoped>
.page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f3f3f3;
}
</style>