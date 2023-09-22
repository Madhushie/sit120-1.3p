

<template>
    <div class="contact">
      <h2>Contact Me</h2>
      <form @submit.prevent="submitForm">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required>
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required>
  
        <label for="message">Message:</label>
        <textarea id="message" v-model="formData.message" required></textarea>
  
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  

  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: '',
        },
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic here
        // You can access form data using this.formData
        console.log('Form submitted:', this.formData);
      },
    },
  };
  </script>
  <style>
  /* Import external CSS file */
  @import '/assests/styles.css';
  </style>
