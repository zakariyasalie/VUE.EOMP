<template>
  <div id="app">
    <Navbar />
    <main>
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
</template>


<script>
import Navbar from '@/components/Navbar'
import Footer from './components/Footer.vue'
import Home from './components/HomeView.vue'
import About from './components/AboutView.vue'
import Resume from './components/ResumeView.vue'
import Projects from './components/ProjectsView.vue'
import Contact from './components/ContactView.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'



export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Home,
    About,
    Resume,
    Projects,
    Contact
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DejaVu+Sans+Mono&display=swap');

body {
  font-family: 'DejaVu Sans Mono', monospace;
}
</style>


