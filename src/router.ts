import {
  createWebHistory,
  createRouter,
  type RouteRecordRaw,
} from "vue-router";

import HomeView from "./pages/index.vue";
import ListaHotelesView from "./pages/list-hoteles.vue";

const routes: RouteRecordRaw[] = [
  { 
    path: "/",
    component: HomeView
  },
  { path: "/hotel", component: ListaHotelesView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
