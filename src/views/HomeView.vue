<template>
  <section id="home" class="home">
    <h1>Welcome to My Portfolio</h1>
    <img src="/public/img/icons/zak1.jpg" alt="Professional Photo" loading="lazy">
  </section>
  <div class="container">
    <div class="row">
      <img src="/public/img/icons/zak1.jpg" alt="portfolio">
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
  background-image: url('/public/img/icons/zak1.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: white; /* Ensure text is readable on the background image */
}
.home img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 2rem;
}
</style>
