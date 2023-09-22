<template>
    <div>
      <h2>Projects</h2>
      <ul>
        <li v-for="project in projects" :key="project.id">
          <h3>{{ project.title }}</h3>
          <img :src="project.image" alt="Project Image" />
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank">View Project</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  // Import projectData from the data source
  import projectData from '@/../js/data.js'; // import path
  
  export default {
    data() {
      return {
        projects: projectData, // Use projectData 
      };
    },
  };
  </script>
  
