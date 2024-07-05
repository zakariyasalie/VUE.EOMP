<template>
  <footer>
    <a href="#" @click="scrollToTop">&copy; {{ currentYear }} Zakariya Salie</a>
  </footer>
</template>

<script>
export default {
  name: 'FooterComp',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style scoped>
footer {
  text-align: center;
  padding: 1rem;
  background-color: #2c3e50;
  color: white;
}

footer a {
  color: white;
  text-decoration: none;
}

footer a:hover {
  color: #1abc9c;
}
</style>
