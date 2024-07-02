<template>
    <section id="testimonials" class="testimonials">
      <h2>Testimonials</h2>
      <div class="card-container">
        <Card v-for="testimonial in testimonials" :key="testimonial.id">
          <p>{{ testimonial.text }}</p>
          <p><strong>{{ testimonial.author }}</strong></p>
        </Card>
      </div>
    </section>
  </template>
  
  <script>
  import Card from '@/components/Card.vue'; // Ensure the correct path to the Card component
  
  export default {
    name: 'TestimonialsView',
    components: {
      Card,
    },
    data() {
      return {
        testimonials: [
          { id: 1, text: 'Testimonial 1', author: 'Author 1' },
          { id: 2, text: 'Testimonial 2', author: 'Author 2' },
          // Add more testimonials here
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .testimonials {
    padding: 2rem;
  }
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  </style>
  