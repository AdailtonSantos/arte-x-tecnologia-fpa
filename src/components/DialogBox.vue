<template>
    <div class="dialog-box" :style="{ top: `${position.y}`, left: `${position.x}`}">
        <p class="message">Você quer uma arte em 10 segundos?</p>
        <div class="button-group">
            <button @mouseenter="moveBox" class="btn btn-yes">
                Sim
            </button>
            <button @click="$emit('decline')" class="btn btn-no">
                Não
            </button>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

const position = reactive({ x: '43%', y: '43%' })

function moveBox() {
    const width = window.innerWidth - 250
    const height = window.innerHeight - 150
    position.x = Math.floor(Math.random() * width) + 'px'
    position.y = Math.floor(Math.random() * height) + 'px'
}

</script>

<style scoped>
.dialog-box {
    position: fixed;
    background-color: white;
    border: 2px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    width: 230px;
    transition: top 0.3s ease, left 0.3s ease;
    z-index: 1000;
}

.message {
    text-align: center;
    margin-bottom: 12px;
}

.button-group {
    display: flex;
    justify-content: space-between;
}

.btn {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.btn-yes {
    background-color: #4caf50;
    color: white;
}

.btn-no {
    background-color: #f44336;
    color: white;
}
</style>