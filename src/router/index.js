import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Profile from "../views/Profile.vue";
import Form from "../views/FormView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        layout: "Main",
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta: {
        layout: "Main",
      },
    },
    {
      path: "/form",
      name: "form",
      component: Form,
      meta: {
        layout: "Main",
      },
    },
    {
      path: "/about",
      name: "about",

      component: () => import("../views/AboutView.vue"),
      meta: {
        layout: "Default",
      },
    },
  ],
});

export default router;
