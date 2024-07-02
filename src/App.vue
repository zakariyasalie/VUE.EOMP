<template>
  <div id="app">
    <Navbar />
    <main>
      <Home />
      <About />
      <Resume />
      <Projects />
      <Testimonials />
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
import Testimonials from './components/TestimonialsView.vue'
import Contact from './components/ContactView.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Home,
    About,
    Resume,
    Projects,
    Testimonials,
    Contact
  }
}
</script>

<style>
/* Add any global styles here */
</style>
