<template>
    <div>
      <header>


        <h1>Madhushie Hidellarachchi's Portfolio</h1>
      </header>
      <main>
             
    <!-- Navigation Menu -->
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
        <!-- Replace with your content -->
        <router-view></router-view>
      </main>
      <footer>
        <p>&copy; 2023 my Portfolio</p>
      </footer>
    </div>
  
  </template>
  
  
  <script>
  export default {
    name: 'App',
  };
  </script>
  
  
  









  <style scoped>
  /* Add component-specific styles here */
  header {
    background-color: #007BFF;
    color: white;
    text-align: center;
    padding: 1rem 0;
  }
  
  main {
    padding: 2rem;
  }
  
  footer {
    background-color: #007BFF;
    color: white;
    text-align: center;
    padding: 1rem 0;
  }
  </style>
  