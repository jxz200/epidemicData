import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";
import SelectProvince from "../components/selectProvince/SelectProvince.vue";
import Country from "../views/country/country.vue";
// import Province from "../views/province/province.vue";
//第三方库需要use一下才能用
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    redirect: "/home/country",
    component: Home,
    children: [
      {
        path: "country",
        component: Country,
      },
      {
        path: "province/:provinceName",
        component: () => import("../views/province/province.vue"),
      },
    ],
  },
  {
    path: "/country",
    component: Country,
  },
  {
    path: "/selectProvince",
    component: SelectProvince,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
