<template>
  <section id="home" class="home">
    <div class="background-container">
      <img src="https://zakariyasalie.github.io/allimages/images/zak1.jpg" alt="Background" loading="lazy" class="background-image">
    </div>
    <div class="content">
      <div class="container">
        <div class="row align-items-center justify-content-center text-center">
          <div class="col-12">
            <h1>Welcome to My Portfolio</h1>
            <img src="https://zakariyasalie.github.io/allimages/images/zak1.jpg" alt="Professional Photo" loading="lazy" class="profile-photo">
            <div class="row-6">
              <h5>I am an aspiring software developer</h5>
            </div>
          </div>
        </div>
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
  position: relative; /* Ensure relative positioning for content */
  text-align: center;
  color: white; /* Text color on background image */
  overflow: hidden; /* Ensure blurred content doesn't overflow */
  height: 100vh;
  display: flex; /* Use Flexbox for centering */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
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
  filter: blur(8px); /* Optional: Apply blur effect */
  -webkit-filter: blur(8px); /* For Safari */
}

.content {
  position: relative;
  z-index: 1; /* Ensure content is above the background */
  padding: 5rem 0; /* Adjust padding as needed */
}

.home h1, .home h5 {
  margin: 0;
  padding: 0.5rem 0;
  transition: transform 0.3s ease, color 0.3s ease;
}

.home h1 {
  font-size: 3rem; /* Example: Adjust font size */
}

.home h5 {
  font-size: 1.5rem;
  color: #ecf0f1; /* Light text color */
  margin-top: 10px;
}

.home .profile-photo {
  width: 150px; /* Example: Adjust size */
  height: auto;
  border-radius: 50%;
  margin-top: 2rem; /* Example: Adjust margin */
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

@media (max-width: 768px) {
  .home h1 {
    font-size: 2.5rem; /* Adjust font size */
  }

  .home h5 {
    font-size: 1.25rem; /* Adjust font size */
  }

  .home .profile-photo {
    width: 120px; /* Adjust size */
  }
}

@media (max-width: 576px) {
  .home h1 {
    font-size: 2rem; /* Adjust font size */
  }

  .home h5 {
    font-size: 1rem; /* Adjust font size */
  }

  .home .profile-photo {
    width: 100px; /* Adjust size */
    margin-top: 1.5rem; /* Adjust margin */
  }
}
</style>
