<template>
  <section id="contact" class="contact-section">
    <!-- Background Image Container -->
    <div class="background-container">
      <img src="https://zakariyasalie.github.io/allimages/images/background1.png" alt="Background" loading="lazy" class="background-image">
    </div>

    <!-- Main Content Container -->
    <div class="container">
      <!-- Top Section with Grid Layout -->
      <div class="grid gap-3 row-gap-1">
        <div class="p-2 g-col-3 border-bottom">
          <br />
        </div>
        <div class="p-2 g-col-3 border-bottom">
          <br />
        </div>
      </div>

      <!-- Main Content -->
      <div class="row">
        <div class="col-12 text-center">
          <div class="content-box">
            <h2 class="text-uppercase mb-4 contact-title" id="contact-heading" data-aos="fade-left">Contact</h2>
            <p class="text-center contact-description" id="contact-description">
              Let's get in touch! Fill out the form below to send me a message.
            </p>
          </div>
        </div>
      </div>

      <!-- Form Section -->
      <div class="row mt-5">
        <div class="col-md-6 offset-md-3">
          <form @submit.prevent="handleSubmit" class="content-box">
            <div class="form-group">
              <label for="name" class="contact-label">Name:</label>
              <input type="text" id="name" v-model="form.name" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="email" class="contact-label">Email:</label>
              <input type="email" id="email" v-model="form.email" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="message" class="contact-label">Message:</label>
              <textarea id="message" v-model="form.message" class="form-control" required></textarea>
            </div>
            <div class="d-flex justify-content-between">
              <button type="submit" class="btn1 contact-btn">Submit</button>
              <button type="button" class="btn1 contact-btn" @click="handleDelete">Clear</button>
            </div>
          </form>
        </div>
      </div>

      <!-- Contact Details and Social Media Section -->
      <div class="row mt-5">
        <div class="col-md-6 offset-md-3">
          <div class="contact-details content-box">
            <h3 class="contact-details-title">Contact Details</h3>
            <ul class="contact-details-list">
              <li>
                <img src="https://img.icons8.com/ios-filled/50/1abc9c/phone.png" alt="Phone" class="contact-icon">
                <span class="contact-info">+(27) 65 813 1021</span>
              </li>
              <li>
                <img src="https://img.icons8.com/ios-filled/50/1abc9c/map-marker.png" alt="Area" class="contact-icon">
                <span class="contact-info">Ottery, Cape Town, South Africa</span>
              </li>
              <li>
                <img src="https://img.icons8.com/ios-filled/50/1abc9c/email.png" alt="Email" class="contact-icon">
                <span class="contact-info">zakariyasalie07@gmail.com</span>
              </li>
            </ul>
            <div class="social-links text-center mt-4">
              <a href="https://www.linkedin.com/in/zakariya-salie-b86baa25a/" target="_blank" class="social-icon">
                <img src="https://img.icons8.com/ios-filled/50/1abc9c/linkedin.png" alt="LinkedIn">
              </a>
              <a href="https://github.com/zakariyasalie" target="_blank" class="social-icon">
                <img src="https://img.icons8.com/ios-filled/50/1abc9c/github.png" alt="GitHub">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here
      console.log('Form submitted:', this.form);
    },
    handleDelete() {
      // Clear form fields
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
.contact-section {
  position: relative;
  text-align: center;
  padding: 5rem;
  color: #fff; /* Default text color */
}

.background-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
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
  border: 2px solid #2c3e50; /* Border style */
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

.contact-title {
  color: #1abc9c; /* Light text color */
}

.contact-description {
  color: #1abc9c; /* Light text color */
}

.contact-label {
  margin-bottom: 1rem;
  color: #1abc9c; /* Light text color */
  transition: color 0.3s; /* Smooth color transition */
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-control {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #495057;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control:focus {
  outline: none;
  border-color: #1abc9c;
  box-shadow: 0 0 0 0.2rem rgba(26, 188, 156, 0.25);
}

.btn1 {
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 2px solid #2c3e50; /* Border style */
  color: #1abc9c; /* Text color */
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

.contact-details {
  background-color: rgba(44, 62, 80, 0.9); /* Background similar to navbar */
  padding: 1rem;
  border: 2px solid #2c3e50; /* Border style */
}

.contact-details-title {
  color: #1abc9c; /* Light text color */
  margin-bottom: 1rem;
}

.contact-details-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-details-list li {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.contact-icon {
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
}

.contact-info {
  color: #fff; /* White text color */
}

.social-links {
  margin-top: 1rem;
}

.social-icon {
  margin: 0 0.5rem;
}

.social-icon img {
  width: 32px;
  height: 32px;
  transition: transform 0.3s; /* Smooth transition */
}

.social-icon img:hover {
  transform: scale(1.1); /* Slightly increase size on hover */
}
</style>
