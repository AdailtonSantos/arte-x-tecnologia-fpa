<template>
    <div class="page">
      <CardGallery />
    </div>
  </template>
  
  <script setup>
  import CardGallery from '@/components/CardGallery.vue'
  </script>
  
  <style scoped>
  .page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f3f6fb; /* Cor de fundo igual ao print */
    padding: 16px;
    box-sizing: border-box;
  }
  </style>