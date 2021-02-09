import Main from '../components/Main';
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Main,
    exact: true,
  },
  {
    path: "/todo/:id",
    name: "Todo",
    component: Main,
  },
  {
    path: "/:catchAll(.*)",
    redirect: {
      name: "Home"
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;