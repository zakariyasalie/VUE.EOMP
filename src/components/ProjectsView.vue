<template>
  <section id="projects" class="projects">
    <div class="background-container">
      <img src="https://zakariyasalie.github.io/allimages/images/background1.png" alt="Background" loading="lazy" class="background-image">
    </div>
    <div class="container">
      <h1 class="text-light" data-aos="zoom-in-up">{{ projectsTitle }}</h1>
      <div class="card-grid">
        <div class="card" v-for="project in projects" :key="project.title">
          <img :src="project.image" class="card-img-top" :alt="project.title" @error="handleImageError">
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a :href="project.url" class="btn btn-primary">Visit URL</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ProjectView',
  computed: {
    ...mapState({
      projects: state => state.projects,
      projectsTitle: () => 'Projects'
    })
  },
  created() {
    this.getProjects();
  },
  methods: {
    ...mapActions(['getProjects']),
    handleImageError(event) {
      event.target.src = 'https://via.placeholder.com/150'; // Default image URL
    }
  }
}
</script>

<style scoped>
.projects {
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

.card-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
}

.card {
  flex: 1 1 calc(33.333% - 2rem);
  border: 2px solid #2c3e50;
  margin-bottom: 1rem;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
  background-color: #2c3e50;
}

.card:hover {
  transform: scale(1.05);
  border-color: #1abc9c;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.card-img-top {
  width: 100%;
  height: 200px; /* Fixed height for images */
  object-fit: cover;
}

.card-title {
  color: #1abc9c;
}

.card-text {
  color: white;
  transition: color 0.3s;
}

.card-text:hover {
  color: #1abc9c;
}
.btn{
  color: #1abc9c;
  background-color: #2c3e50;
}
</style>
