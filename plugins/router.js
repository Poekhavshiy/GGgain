import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path: "", name: "home", component: () => import("@/views/Home.vue")},
    {path: "/about", name: "about", component: () => import('@/views/About.vue')},
    {path: "/data-types", name: 'datatypes', component: () => import('@/views/DataTypes.vue')},
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;