<template>
    <div class="container">
        <div class="header">
            <h1>Welcome to My Portfolio</h1>
            <p>Name: Madhushie Hidellarachchi</p>
            <p>University: Deakin University</p>
            <p>Year: 2nd year</p>
            <p>Degree: Bachelor of IT degree</p>
            <p>Web Developer | UX Designer</p>
        </div>
    </div>
    <div class="projects">
    <h2>My Projects</h2>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.title }}</td>
          <td>{{ project.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// Import projectData from the data source
import projectData from '../../js/data.js';

export default {
  name: 'Home',
  data() {
    return {
      projects: projectData,
    };
  },
};
</script>

<style>
  /* Import external CSS file */
  @import '/assests/styles.css';
  </style>


