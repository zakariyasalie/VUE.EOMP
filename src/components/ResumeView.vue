<template>
  <section id="resume" class="resume">
    <div class="background-container">
      <img src="https://zakariyasalie.github.io/allimages/images/background1.png" alt="Background" loading="lazy" class="background-image">
    </div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-12 text-center">
          <h2 class="text-uppercase mb-4 resume-title" id="resume-title" data-aos="zoom-in-up">
            {{ resumeData?.education?.title || 'Loading...' }}
          </h2>
        </div>
        <div class="col-md-6" v-if="resumeData?.education">
          <h3 class="education-title content-box-title">{{ resumeData.education.schools[0].name }}</h3>
          <ul>
            <li v-for="subject in resumeData.education.schools[0].subjects" :key="subject" class="resume-content content-box">{{ subject }}</li>
          </ul>
        </div>
        <div class="col-md-6" v-if="resumeData?.workExperience">
          <h3 class="work-experience-title content-box-title">{{ resumeData.workExperience.title }}</h3>
          <div v-for="job in resumeData.workExperience.jobs" :key="job.company" class="content-box">
            <h4>{{ job.company }}</h4>
            <h5>{{ job.position }}</h5>
            <p>{{ job.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ResumeView',
  computed: {
    ...mapState({
      resumeData: state => state.resume,
      projects: state => state.projects
    })
  },
  created() {
    this.getResume();
    this.getProjects(); // Fetch projects data when component is created
  },
  methods: {
    ...mapActions(['getResume', 'getProjects'])
  }
}
</script>

<style scoped>
.resume {
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
  border: 2px solid #2c3e50;
  padding: 1rem;
  margin-bottom: 1rem;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
  background-color:  #2c3e50;
}

.content-box:hover {
  transform: scale(1.05);
  border-color: #1abc9c;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.content-box-title {
  color: #1abc9c;
}

.resume-title, .education-title, .work-experience-title {
  border: 2px solid #2c3e50;
  padding: 1rem;
  margin-bottom: 1rem;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
  background-color:  #2c3e50;
  color: #1abc9c;
}

.resume-title:hover, .education-title:hover, .work-experience-title:hover {
  transform: scale(1.05);
  border-color: #1abc9c;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.resume-content {
  margin-bottom: 1rem;
  color: white;
  transition: color 0.3s;
}

.resume-content:hover {
  color: #1abc9c;
}

.card {
  border: 2px solid #2c3e50;
  margin-bottom: 1rem;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
  color: #1abc9c;
}

.card:hover {
  transform: scale(1.05);
  border-color: #1abc9c;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.card-title {
  color: #2c3e50;
}

.card-text {
  color: #2c3e50;
  transition: color 0.3s;
}

.card-text:hover {
  color: #1abc9c;
}
</style>
