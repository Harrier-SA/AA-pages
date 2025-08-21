<template>
  <nav class="z-50 w-80 h-screen pt-8 fixed left-0 top-0 shadow-lg bg-red-50/80">
    <ul class="flex flex-col justify-evenly h-screen flex-1 space-y-4 px-4">
      <li v-for="(item, idx) in navItems" :key="item.text" class="relative">
        <a
          :href="item.link"
          :class="itemClass(idx)"
          @mouseenter="hoverIcon(idx)"
          @mouseleave="unhoverIcon(idx)"
          @click.prevent="toggleLockIcon(idx)"
        >
          <font-awesome-icon :icon="item.icon" class="mr-3" />
          <span class="ml-2">{{ item.text }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'NavBar',
  setup() {
    const navItems = [
      { text: 'Home', link: '/', icon: ['fas', 'home'] },
      { text: 'Venue', link: '/about', icon: ['fas', 'map-pin'] },
      { text: 'Live View', link: '/live', icon: ['fas', 'video'] },
      { text: 'Gallery', link: '/gallery', icon: ['fas', 'images'] },
      { text: 'Save the Date', link: '/contact', icon: ['fas', 'envelope'] },
    ]

    // States: 'default', 'hovered', 'locked'
    const iconStates = ref(Array(navItems.length).fill('default'))
    const offsets = ref(Array(navItems.length).fill(0))
    let direction = 1
    let intervalId = null

    // Animate offsets for snaking effect
    const animate = () => {
      intervalId = setInterval(() => {
        offsets.value = offsets.value.map((offset, idx) => {
          if (iconStates.value[idx] === 'default') {
            let next = offset + direction * 2
            if (next > 20 || next < 0) direction *= -1
            return Math.max(0, Math.min(20, next))
          }
          return offset
        })
      }, 60)
    }

    onMounted(() => {
      animate()
    })
    onBeforeUnmount(() => {
      clearInterval(intervalId)
    })

    function hoverIcon(idx) {
      if (iconStates.value[idx] !== 'locked') iconStates.value[idx] = 'hovered'
    }
    function unhoverIcon(idx) {
      if (iconStates.value[idx] !== 'locked') iconStates.value[idx] = 'default'
    }
    function toggleLockIcon(idx) {
      if (iconStates.value[idx] === 'locked') {
        iconStates.value[idx] = 'default'
        offsets.value[idx] = 0
      } else {
        // Unlock all icons first
        iconStates.value = iconStates.value.map(() => 'default')
        offsets.value = offsets.value.map(() => 0)
        // Lock only the clicked icon
        iconStates.value[idx] = 'locked'
        offsets.value[idx] = 40
      }
    }

    // Apply margin to the whole item box
    function itemClass(idx) {
      let base =
        'flex items-center text-gray-700 text-lg px-4 py-2 rounded-md hover:bg-red-700 hover:text-yellow-100 transition-all duration-500 w-full cursor-pointer'
      if (iconStates.value[idx] === 'locked') {
        return `${base} ml-[40px]`
      } else if (iconStates.value[idx] === 'hovered') {
        return `${base} ml-[28px]`
      } else {
        return `${base} ml-[${offsets.value[idx]}px]`
      }
    }

    return {
      navItems,
      itemClass,
      hoverIcon,
      unhoverIcon,
      toggleLockIcon,
    }
  },
}
</script>
<style></style>
