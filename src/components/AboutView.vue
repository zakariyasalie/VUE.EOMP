<template>
  <section class="about-me py-5 mt-5">
    <section class="container">
      <div class="grid gap-3 row-gap-1" id="about">
        <div class="p-2 g-col-3"><br /></div>
        <div class="p-2 g-col-3"><br /></div>
      </div>
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="text-uppercase mb-4 about-me-title" id="about-me-heading" data-aos="fade-left">About me</h2>
          <p class="text-center about-me-description" id="text-about-me">
            As a passionate enthusiast of cars and games, a sports aficionado, and a dedicated computer enthusiast, I find joy in blending my diverse interests into captivating web designs. With a fervent love for creation, I channel my energy into crafting immersive digital experiences that seamlessly integrate my passions. From sleek automotive-inspired layouts to dynamic gaming interfaces, each project reflects my commitment to innovation and attention to detail. Explore my portfolio to witness the fusion of my interests and my dedication to crafting engaging online environments.
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div id="questions-about-me" class="col-md-4">
          <p>Full Name:</p>
          <p>Address:</p>
          <p>Date of birth:</p>
          <p>Number:</p>
          <p>Email:</p>
        </div>
        <div id="text-about-me" class="col-md-4">
          <p>Zakariya Salie</p>
          <p>Ottery, Cape Town, Western Cape, South Africa</p>
          <p>07/03/2005</p>
          <p>+27(65) 813 1021</p>
          <p>zakariya.salie07@gmail.com</p>
        </div>
        <div class="col-md-4" id="about-me-buttons">
          <div class="d-flex flex-column about-me-actions">
            <a class="btn1 about-me-contact-btn mb-4" href="#resume" id="link1button">Resume</a>
            <a class="btn1 about-me-download-btn" href="#contact">Contact me</a>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about-me {
  background-image: url('https://zakariyasalie.github.io/allimages/images/zak1.jpg');
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 5rem;
  height: 100rem;
  max-height: 100rem;
  color: white; /* Ensure text is readable on the background image */
  overflow: hidden; /* Ensure blurred content doesn't overflow */
}

.about-me img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.about-me-title {
  color: #2c3e50; /* Dark text color */
}

.about-me-description {
  color: #34495e; /* Darker text color */
}

.btn1 {
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 2px solid #2c3e50; /* Border style */
  color: #2c3e50; /* Text color */
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

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
