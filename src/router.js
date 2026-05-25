import { createRouter, createWebHistory } from 'vue-router';
import ReportGenerator from './views/ReportGenerator.vue';
import TodoApp from './views/TodoApp.vue';

const routes = [
  {
    path: '/',
    name: 'ReportGenerator',
    component: ReportGenerator,
  },
  {
    path: '/todos',
    name: 'TodoApp',
    component: TodoApp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;