import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import( "../views/auth/login"),
    meta: {layout: "AuthLayout"}
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
