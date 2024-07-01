<template>
  <section id="home" class="home">
    <div class="background-container">
      <img src="https://zakariyasalie.github.io/allimages/images/zak1.jpg" alt="Background" loading="lazy" class="background-image">
    </div>
    <div class="content">
      <h1>Welcome to My Portfolio</h1>
      <img src="https://zakariyasalie.github.io/allimages/images/zak1.jpg" alt="Professional Photo" loading="lazy" class="profile-photo">
    </div>
  </section>

  <div class="container">
    <div class="row-6">
      <!-- Placeholder content -->
      <p>This is where your portfolio content goes.</p>
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
  padding: 5rem;
  height: 80rem;
  max-height: 80rem;
  color: white; /* Ensure text is readable on the background image */
  overflow: hidden; /* Ensure blurred content doesn't overflow */
}

.background-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden; /* Ensure no overflow */
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(8px);
  -webkit-filter: blur(8px); /* For Safari */
}

.content {
  position: relative;
  z-index: 1; /* Ensure content is above the background */
}

.home .profile-photo {
  width: 150px;
  height: auto;
  border-radius: 50%;
  margin-top: 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* Ensure your portfolio image scales properly */
.portfolio-img {
  width: 100%;
  height: auto;
  max-width: 100%;
}
</style>