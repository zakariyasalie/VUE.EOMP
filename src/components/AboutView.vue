<template>
  <section id="about" class="about-me">
    <div class="background-container">
      <img src="https://zakariyasalie.github.io/allimages/images/background1.png" alt="Background" loading="lazy" class="background-image">
    </div>
    <div class="container">
      <div class="grid gap-3 row-gap-1">
        <div class="p-2 g-col-3 border-bottom">
          <br />
        </div>
        <div class="p-2 g-col-3 border-bottom">
          <br />
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center">
          <div class="content-box">
            <h2 class="text-uppercase mb-4 about-me-title" id="about-me-heading" data-aos="fade-left">About me</h2>
            <p class="text-center about-me-description" id="text-about-me">
              As a passionate enthusiast of cars and games, a sports aficionado, and a dedicated computer enthusiast, I find joy in blending my diverse interests into captivating web designs. With a fervent love for creation, I channel my energy into crafting immersive digital experiences that seamlessly integrate my passions. From sleek automotive-inspired layouts to dynamic gaming interfaces, each project reflects my commitment to innovation and attention to detail. Explore my portfolio to witness the fusion of my interests and my dedication to crafting engaging online environments.
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-4">
          <div class="content-box">
            <p class="about-me-content">Full Name:</p>
            <p class="about-me-content">Address:</p>
            <p class="about-me-content">Date of birth:</p>
            <p class="about-me-content">Number:</p>
            <p class="about-me-content">Email:</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="content-box">
            <p class="about-me-content">Zakariya Salie</p>
            <p class="about-me-content">Ottery, Cape Town, Western Cape, South Africa</p>
            <p class="about-me-content">07/03/2005</p>
            <p class="about-me-content">+27(65) 813 1021</p>
            <p class="about-me-content">zakariya.salie07@gmail.com</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="content-box">
            <div class="d-flex flex-column about-me-actions">
              <a class="btn1 about-me-contact-btn mb-4" href="#resume" id="link1button">Resume</a>
              <a class="btn1 about-me-download-btn" href="#contact">Contact me</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about-me {
  position: relative; /* Ensure relative positioning for background image */
  text-align: center;
  padding: 5rem;
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.content-box {
  border: 2px solid #1abc9c; /* Border style */
  background-color: rgba(44, 62, 80, 0.9); /* Background similar to navbar */
  padding: 1rem;
  margin-bottom: 1rem;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s; /* Smooth transitions */
}

.content-box:hover {
  transform: scale(1.05); /* Slightly increase size on hover */
  border-color: #1abc9c; /* Light green border color on hover */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Box shadow on hover */
}

.about-me-title {
  color: #ecf0f1; /* Light text color */
}

.about-me-description {
  color: #ecf0f1; /* Light text color */
}

.about-me-content {
  margin-bottom: 1rem;
  color: #ecf0f1; /* Light text color */
  transition: color 0.3s; /* Smooth color transition */
  
}

.about-me-content:hover {
  color: #1abc9c; /* Light green text color on hover */
}

.btn1 {
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 2px solid white; /* Border style */
  color: white; /* Text color */
  text-decoration: none;
  font-weight: bold;
  border-radius: 4px;
  position: relative; /* Ensure the relative positioning for the pseudo-element */
  overflow: hidden; /* Hide overflow from typing animation */
  transition: color 0.3s, background-color 0.3s, transform 0.3s; /* Smooth transitions */
}

.btn1::after {
  content: attr(data-text); /* Display content from data-text attribute */
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  color: #2c3e50; /* Text color */
  white-space: nowrap;
  overflow: hidden;
  animation: typing 1s steps(20, end) infinite; /* Adjust steps as needed */
}

.btn1:hover::after {
  color: #1abc9c; /* Light green text color on hover */
}

.btn1:hover {
  color: #1abc9c; /* Light green text color on hover */
  background-color: #ecf0f1; /* Light background color on hover */
  transform: scale(1.05); /* Slightly increase size on hover */
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Define grid columns */
  gap: 1rem;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
