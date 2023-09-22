import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../src/component/Home.vue';
import About from '../src/component/About.vue';
import Projects from '../src/component/Projects.vue';
import Contact from '../src/component/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;


