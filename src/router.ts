import {
  createWebHistory,
  createRouter,
  type RouteRecordRaw,
} from "vue-router";

import HomeView from "./pages/index.vue";
import ListaHotelesView from "./pages/list-hoteles.vue";
import CreateHotelView from "./pages/create-hotel.vue";
import HomeHoteles from  "./pages/home-hoteles.vue";

const routes: RouteRecordRaw[] = [
  { 
    path: "/",
    component: HomeView
  },
  { path: "/hotel", component: HomeHoteles, children: [
    {
      path: '',
      name: 'listHoteles',
      component: ListaHotelesView
    },
    {
      name: 'crearHotel',
      path: 'crear',
      component: CreateHotelView
    }
  ] },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
