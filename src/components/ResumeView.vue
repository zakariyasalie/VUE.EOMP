<template>
  <section id="resume" class="resume">
    <div class="background-container">
      <img src="https://zakariyasalie.github.io/allimages/images/background1.png" alt="Background" loading="lazy" class="background-image">
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 text-center">
          <h2 class="text-uppercase mb-4 resume-title" id="resume-title" data-aos="zoom-in-up">
            {{ resumeData?.education?.title || 'Loading...' }}
          </h2>
        </div>
      </div>

      <div class="row justify-content-center mt-5">
        <!-- Education Section -->
        <div class="col-lg-5 col-md-6 mb-4" v-if="resumeData?.education">
          <h3 class="section-header text-center">Education</h3>
          <div class="content-box">
            <h4 class="education-title content-box-title">{{ resumeData.education.schools[0].name }}</h4>
            <ul class="list">
              <li v-for="subject in resumeData.education.schools[0].subjects" :key="subject" class="resume-content">
                {{ subject }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Work Experience Section -->
        <div class="col-lg-5 col-md-6 mb-4" v-if="resumeData?.workExperience">
          <h3 class="section-header text-center">Work Experience</h3>
          <div class="content-box" v-for="job in resumeData.workExperience.jobs" :key="job.company">
            <h4 class="work-experience-title">{{ job.company }}</h4>
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
    this.getProjects();
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
  padding: 5rem 0;
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
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.content-box {
  border: 2px solid #2c3e50;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background-color: #2c3e50;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
  border-radius: 10px;
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
  background-color: #2c3e50;
  color: #1abc9c;
  border-radius: 8px;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
}

.resume-title:hover, .education-title:hover, .work-experience-title:hover {
  transform: scale(1.05);
  border-color: #1abc9c;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.resume-content {
  margin-bottom: 1rem;
  color: white;
}

.section-header {
  font-size: 2rem;
  font-weight: bold;
  color: #1abc9c;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 3px solid #1abc9c;
  text-transform: uppercase;
}

ul.list {
  padding-left: 20px;
}

@media (max-width: 768px) {
  .resume {
    padding: 3rem 1rem;
  }

  .content-box {
    padding: 1rem;
    margin-bottom: 1rem;
  }

  .resume-title, .education-title, .work-experience-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .content-box {
    padding: 0.75rem;
  }

  .resume-title, .education-title, .work-experience-title {
    font-size: 1.25rem;
  }
}
</style>
