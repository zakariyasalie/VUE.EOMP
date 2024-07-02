<template>
  <section id="home" class="home">
    <div class="background-container">
      <img src="https://zakariyasalie.github.io/allimages/images/zak1.jpg" alt="Background" loading="lazy" class="background-image">
    </div>
    <div class="content">
      <h1>Welcome to My Portfolio</h1>
      <img src="https://zakariyasalie.github.io/allimages/images/zak1.jpg" alt="Professional Photo" loading="lazy" class="profile-photo">
    </div>
    <div class="container">
      <div class="row-6">
        <!-- Placeholder content -->
        <h5>I am an aspiring software developer</h5>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'HomeView'
}
</script>


<style scoped>
.home {
  margin-top: auto;
  text-align: center;
  padding: 5rem;
  height: 100rem;
  max-height: 100rem;
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

.home h1, .home h5 {
  margin: 0;
  padding: 0.5rem 0;
  transition: transform 0.3s ease, color 0.3s ease;
}

.home h1 {
  font-size: 3rem;
}

.home h5 {
  font-size: 1.5rem;
  color: #ecf0f1; /* Light text color */
}

.home .profile-photo {
  width: 150px;
  height: auto;
  border-radius: 50%;
  margin-top: 2rem;
  transition: transform 0.6s ease, box-shadow 0.6s ease, filter 0.6s ease;
}

.home .profile-photo:hover {
  transform: scale(1.2) rotate(10deg);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  filter: brightness(1.1) contrast(1.2);
}

.home h1:hover, .home h5:hover {
  color: #1abc9c; /* Light green color on hover */
  transform: scale(1.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.portfolio-img {
  width: 100%;
  height: auto;
  max-width: 100%;
}
</style>