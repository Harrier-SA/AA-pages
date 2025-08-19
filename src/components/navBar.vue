<template>
  <nav class="sidebar">
    <ul>
      <li v-for="item in navItems" :key="item.text">
        <a :href="item.link">{{ item.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      navItems: [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about' },
        { text: 'Gallery', link: '/gallery' },
        { text: 'Contact', link: '/contact' },
      ],
    }
  },
}
</script>

<style scoped>
.sidebar {
  width: 220px;
  height: 100vh;
  background: #f8f9fa;
  padding-top: 30px;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin-bottom: 20px;
}

.sidebar a {
  color: #333;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 20px;
  display: block;
  border-radius: 4px;
  transition: background 0.2s;
}

.sidebar a:hover {
  background: #e2e6ea;
}
</style>
