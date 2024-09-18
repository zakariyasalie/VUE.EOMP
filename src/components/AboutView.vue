<template>
  <section id="about" class="about-me">
    <div class="background-container">
      <img src="https://zakariyasalie.github.io/allimages/images/background1.png" alt="Background" loading="lazy" class="background-image">
    </div>
    <div class="container">
      <!-- Existing Content -->
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
            <h1 class="text-uppercase mb-4 about-me-title" id="about-me-heading" data-aos="fade-left">About me</h1>
            <p class="text-center about-me-description" id="text-about-me">
              Hi, I’m Zakariya Salie, a 19-year-old with a passion for coding, cars, games, and sports. I thrive in the world of technology and love solving problems through programming. My journey into IT has been driven by curiosity and a desire to create meaningful projects that can make a difference. When I'm not coding, you'll probably find me playing sports, exploring car innovations, or diving into the latest games. I'm always eager to learn new things, push my limits, and build something awesome. Let’s connect and create something amazing!
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-4 col-sm-6 mb-4">
          <div class="content-box">
            <p class="about-me-content">Full Name:</p>
            <p class="about-me-content">Address:</p>
            <p class="about-me-content">Date of birth:</p>
            <p class="about-me-content">Number:</p>
            <p class="about-me-content">Email:</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 mb-4">
          <div class="content-box">
            <p class="about-me-content">Zakariya Salie</p>
            <p class="about-me-content">Ottery, Cape Town, Western Cape, South Africa</p>
            <p class="about-me-content">07/03/2005</p>
            <p class="about-me-content">+27(65) 813 1021</p>
            <p class="about-me-content">zakariya.salie07@gmail.com</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 mb-4">
          <div class="content-box">
            <div class="d-flex flex-column about-me-actions">
              <a class="btn1 about-me-contact-btn mb-4" href="#resume" id="link1button">Resume</a>
              <a class="btn1 about-me-download-btn" href="#contact">Contact me</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Technical Skills Section -->
      <div class="row mt-5">
        <div class="col-12 text-center">
          <div class="content-box">
            <h2 class="text-uppercase mb-4 about-me-title">Technical Skills</h2>
            <div class="d-flex justify-content-around flex-wrap">
              <div class="skill-box">
                <i class="fab fa-html5"></i> HTML
              </div>
              <div class="skill-box">
                <i class="fab fa-css3-alt"></i> CSS
              </div>
              <div class="skill-box">
                <i class="fab fa-js"></i> JavaScript
              </div>
              <div class="skill-box">
                <i class="fab fa-bootstrap"></i> Bootstrap
              </div>
              <div class="skill-box">
                <i class="fas fa-database"></i> MySQL
              </div>
              <div class="skill-box">
                <i class="fab fa-node"></i> Node.js
              </div>
              <div class="skill-box">
                <i class="fab fa-vuejs"></i> Vue.js
              </div>
              <div class="skill-box">
                <i class="fas fa-project-diagram"></i> Capstone
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Soft Skills Section -->
      <div class="row mt-5">
        <div class="col-12 text-center">
          <div class="content-box">
            <h2 class="text-uppercase mb-4 about-me-title">Soft Skills</h2>
            <div class="d-flex justify-content-around flex-wrap">
              <div class="skill-box">
                <i class="fas fa-comments"></i> Communication
              </div>
              <div class="skill-box">
                <i class="fas fa-users"></i> Teamwork
              </div>
              <div class="skill-box">
                <i class="fas fa-lightbulb"></i> Problem Solving
              </div>
              <div class="skill-box">
                <i class="fas fa-clock"></i> Time Management
              </div>
              <div class="skill-box">
                <i class="fas fa-tasks"></i> Project Management
              </div>
              <div class="skill-box">
                <i class="fas fa-brain"></i> Adaptability
              </div>
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
  position: relative;
  text-align: center;
  padding: 5rem;
  color: white;
  overflow: hidden;
}

.background-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(8px);
  -webkit-filter: blur(8px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.content-box {
  border: 2px solid #1abc9c;
  background-color: rgba(44, 62, 80, 0.9);
  padding: 1rem;
  margin-bottom: 1rem;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
}

.content-box:hover {
  transform: scale(1.05);
  border-color: #1abc9c;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.about-me-title {
  color: #ecf0f1;
}

.about-me-description {
  color: #ecf0f1;
}

.about-me-content {
  margin-bottom: 1rem;
  color: #ecf0f1;
  transition: color 0.3s;
}

.about-me-content:hover {
  color: #1abc9c;
}

.skill-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  color: #ecf0f1;
  font-size: 1.2rem;
}

.skill-box i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #1abc9c;
}

.skill-box:hover {
  transform: scale(1.1);
  transition: transform 0.3s;
}

.btn1 {
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 2px solid white;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  transition: color 0.3s, background-color 0.3s, transform 0.3s;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

@media (max-width: 768px) {
  .about-me {
    padding: 2rem;
  }

  .container {
    padding: 1rem;
  }

  .content-box {
    padding: 0.5rem;
  }

  .about-me-title {
    font-size: 1.5rem;
    padding: 0.5rem;
  }

  .about-me-description {
    font-size: 0.875rem;
  }

  .about-me-content {
    font-size: 0.875rem;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .btn1 {
    padding: 0.5rem;
  }
}

@media (max-width: 576px) {
  .content-box {
    padding: 0.5rem;
  }

  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
