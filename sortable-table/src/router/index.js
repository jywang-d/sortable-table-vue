import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";

const { createRouter, createWebHashHistory } = require("vue-router");

const router = createRouter( {
    history: createWebHashHistory(import.meta.env.BASE_URL),
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