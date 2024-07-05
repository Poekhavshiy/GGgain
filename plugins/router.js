import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path: "", name: "home", component: () => import("@/views/Home.vue")},
    {path: "/dashboard", name: "dashboard", component: () => import('@/views/Dashboard.vue')},
    {path: "/data-types", name: 'datatypes', component: () => import('@/views/DataTypes.vue')},
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;