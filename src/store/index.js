import { createStore } from 'vuex';
import axios from 'axios';
import Swal from 'sweetalert2';

const portfolioURL = 'https://zakariyasalie.github.io/jsonData/data/';

export default createStore({
  state: {
    home: '',
    about: '',
    resume: null,
    skills: [],
    projects: [],
    testimonials: [],
    contact: ''
  },
  mutations: {
    setHome(state, data) {
      state.home = data;
    },
    setAbout(state, about) {
      state.about = about;
    },
    setResume(state, resume) {
      state.resume = resume;
    },
    setProjects(state, projects) {
      state.projects = projects;
    },
    setTestimonials(state, testimonials) {
      state.testimonials = testimonials;
    },
    setContact(state, contact) {
      state.contact = contact;
    }
  },
  actions: {
    async getHome(context) {
      try {
        const res = await axios.get(portfolioURL);
        context.commit('setHome', res.data.home);
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Cannot retrieve home data',
          icon: 'error',
          timer: 2000
        });
      }
    },
    async getAbout(context) {
      try {
        const res = await axios.get(portfolioURL);
        context.commit('setAbout', res.data.about);
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Cannot retrieve about data',
          icon: 'error',
          timer: 2000
        });
      }
    },
    async getResume(context) {
      try {
        const res = await axios.get(portfolioURL);
        context.commit('setResume', res.data);
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Cannot retrieve resume data',
          icon: 'error',
          timer: 2000
        });
      }
    },
    async getProjects(context) {
      try {
        const res = await axios.get(portfolioURL);
        context.commit('setProjects', res.data.projects);
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Cannot retrieve projects data',
          icon: 'error',
          timer: 2000
        });
      }
    },
    async getTestimonials(context) {
      try {
        const res = await axios.get(portfolioURL);
        context.commit('setTestimonials', res.data.testimonials);
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Cannot retrieve testimonials data',
          icon: 'error',
          timer: 2000
        });
      }
    },
    async getContact(context) {
      try {
        const res = await axios.get(portfolioURL);
        context.commit('setContact', res.data.contact);
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Cannot retrieve contact data',
          icon: 'error',
          timer: 2000
        });
      }
    }
  },
  modules: {}
});
