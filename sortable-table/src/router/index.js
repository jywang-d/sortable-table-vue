import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter( {

    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        }

    ]
})

export default router