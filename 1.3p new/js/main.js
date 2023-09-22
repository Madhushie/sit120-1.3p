import { createApp } from 'vue';
import App from '../src/App.vue'; 
import router from '../js/router'; 

const app = createApp(App);

app.use(router);
app.mount('#app');
