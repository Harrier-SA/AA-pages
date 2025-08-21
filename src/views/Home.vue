<template>
  <section class="relative h-[500px] flex items-center justify-center overflow-hidden">
    <transition name="fade">
      <div
        v-if="show"
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('src/assets/klom-view-1.jpg'); background-attachment: fixed"
      ></div>
    </transition>
    <h1
      class="font-wedding-one p-8 place-content-center text-center bg-red-50 bg-opacity-10 relative z-10 text-4xl font-bold rounded-lg text-gray-600"
      name="A&A Wedding"
    >
      <h2 class="p-2 text-4xl">The Wedding</h2>
      <h2 class="p-2 text-lg">Of</h2>
      <span class="p-2 text-4xl">Andrew & Ailish </span>
    </h1>
  </section>

  <div class="h-[1000px] bg-white">
    <!-- More content to enable scrolling -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import liveView from '../components/liveView.vue'

const show = ref(false)
onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 50) // slight delay for effect
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
