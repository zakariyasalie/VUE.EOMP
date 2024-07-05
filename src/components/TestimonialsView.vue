<template>
  <section id="testimonials" class="testimonials">
    <div class="background-container">
      <img src="https://zakariyasalie.github.io/allimages/images/background1.png" alt="Background" loading="lazy" class="background-image">
    </div>
    <div class="container position-relative">
      <h1 class="testimonials-title justify-content-center" data-aos="zoom-in-up">Testimonials</h1>
      <div class="grid">
        <div class="card-container" v-for="(testimonial, index) in testimonials" :key="index">
          <div class="card mb-4 shadow-sm">
            <div class="card-body d-flex align-items-center">
              <img :src="testimonial.image" class="card-img-left mr-3 rounded-circle" :alt="testimonial.name">
              <p class="card-text">{{ testimonial.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TestimonialsView',
  computed: {
    ...mapState({
      testimonials: state => state.testimonials
    })
  },
  created() {
    this.getTestimonials();
  },
  methods: {
    ...mapActions(['getTestimonials'])
  }
}
</script>

<style scoped>
.testimonials {
  position: relative;
  overflow: hidden;
  padding: 3rem 0;
}
.testimonials-title {
  border: 2px solid #2c3e50;
  padding: 1rem;
  margin-bottom: 1rem;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
  background-color:  #2c3e50;
  color: #1abc9c;
}

.testimonials-title:hover {
  transform: scale(1.05);
  border-color: #1abc9c;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
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
  position: relative;
}

.card-container {
  width: 100%;
  margin-bottom: 1rem; /* Added margin bottom for spacing */
}

.card {
  border: 2px solid #1abc9c;
  background-color: rgba(44, 62, 80, 0.9);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; /* Ensure cards take full height */
}

.card-img-left {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
}

.card-body {
  flex: 1;
  padding: 1.25rem;
  color: white;
}

.card-body:hover {
  transform: scale(1.05); /* Slightly increase size on hover */
  border-color: #1abc9c; /* Light green border color on hover */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Box shadow on hover */
  color: #1abc9c;
}

h1 {
  font-size: 2.5rem;
  text-align: center; /* Center align the heading */
}

.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
}

@media (min-width: 576px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 992px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
