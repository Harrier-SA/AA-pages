<script setup lang="ts"></script>

<template>
  <nav-bar />
  <transition name="fade">
    <router-view />
  </transition>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<style scoped></style>
