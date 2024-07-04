<template>
<div class="grid gap-3 row-gap-1" id="Resume">
  <h1>Resume</h1>
  <div class="p-2 g-col-3"><br /></div>
  <div class="p-2 g-col-3"><br /></div>
</div>
                <section  class="text-light">
                    <div class="container text-center">
                      <h2 class="text-uppercase mb-4 about-me-title" data-aos="zoom-in-up">My Resume</h2>
                        <div class="row">
                            <div class="col">
                                <h3 class="education-title">Education:</h3>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item bg-transparent">
                                      <h2 class="accordion-header">
                                        <button class="accordion-button bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseD1" aria-expanded="true" aria-controls="collapseD1">
                                          Rondebosch Boys High School
                                        </button>
                                      </h2>
                                      <div id="collapseD1" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <h6>Subjects</h6>
                                            <ul>
                                                <li>Mathematics</li>
                                                <li>English</li>
                                                <li>Afrikaans</li>
                                                <li>Physics</li>
                                                <li>Engineering and Graphic Designing</li>
                                                <li>Life Sciences</li>
                                                <li>Life Orientation</li>
                                              </ul>
                                        </div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                            <class class="col">
                                <h3 class="work-experience-title">Work Experience</h3>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item bg-transparent">
                                      <h2 class="accordion-header">
                                        <button class="accordion-button bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                          iStore Canal Walk
                                        </button>
                                      </h2>
                                      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <h6>iStore Sales Consultant </h6>
                                        <p>
                                          My job duties were to ensure that the sales floor was clean and in order at all times. We were handed the tasks of doing things like trade-ins where you are required to run diagnostics on devices to check if the devices worked properly before trading in. This is where my love for IT started.
                                        </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="accordion-item bg-transparent">
                                      <h2 class="accordion-header">
                                        <button class="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                          Ekhula Fuels
                                        </button>
                                      </h2>
                                      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                         <h6>Bookkeeper & accountant</h6>
                                         <p>
                                          I worked as an accountant and bookkeeper for ekhula fuels for 7 months in 2023. This was between February and August, I was in charge of watching cashflow, writing up monthly statements for the clients as well as monitoring stock. This taught me cash flow, and how businesses need to keep money moving in and out of the company.
                                         </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                            </class>
                        </div>
                    </div>
                </section>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    name: 'ResumeView',
    computed: {
      ...mapState(['education', 'skills'])
    },
    created() {
      this.$store.dispatch('fetchEducation');
      this.$store.dispatch('fetchSkills');
    }
  }
  </script>
  
  <style scoped>
  .resume {
    padding: 2rem;
  }
  </style>
  