<template>
  <section id="about" class="about">
    <h2>About Me</h2>
    <p>Your introduction goes here.</p>
    <img src="https://yourusername.github.io/yourrepo/path/to/image.jpg" alt="Professional Photo">
  </section>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about {
  text-align: center;
  padding: 2rem;
}
.about img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
</style>
