import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ListHarga from "../views/ListHarga.vue";
import Detail from "../views/Detail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/harga_udang",
    name: "ListHarga",
    component: ListHarga,
  },
  {
    path: "/harga_udang/:id",
    name: "ProductDetail",
    component: Detail,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
