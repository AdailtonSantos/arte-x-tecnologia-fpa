<template>
  <div class="gallery-container">
    <div v-for="(card, index) in cards" :key="index" class="card" @click="openCard(card)">
      <img :src="card.img" class="card-img" />
      <p class="card-text"><b>{{ card.text }}</b></p>
    </div>

    <div v-if="selectedCard" class="modal-overlay">
      <div class="modal-content">
        <img :src="selectedCard.img" class="modal-img" />
        <p class="modal-text"><b>{{ selectedCard.text }}</b></p>
        <button @click="selectedCard = null" class="modal-close">
          Fechar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const cards = [
  { img: 'arte1.jpeg', text: 'Arte 1' },
  { img: 'Stephany Santos.jpeg', text: 'Stephany Santos' },
  { img: 'arte3.jpeg', text: 'Arte 3' },
  { img: 'arte4.jpeg', text: 'Arte 4' },
  { img: 'Elen Angelina.jpeg', text: 'Elen Angelina' },
  { img: 'Giovanna Rinaldi.jpeg', text: 'Giovanna Rinaldi' }
]

const selectedCard = ref(null)

function openCard(card) {
  selectedCard.value = card
}
</script>

<style scoped>
.gallery-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* Agora são 3 colunas! */
  gap: 16px;
  padding: 16px;
}

@media (min-width: 768px) {
  .gallery-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card {
  cursor: pointer;
}

.card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.card-text {
  text-align: center;
  margin-top: 8px;
  font-size: 14px;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  text-align: center;
}

.modal-img {
  width: 100%;
  margin-bottom: 16px;
  border-radius: 6px;
}

.modal-text {
  margin-bottom: 16px;
}

.modal-close {
  padding: 8px 16px;
  background-color: #e53935;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>