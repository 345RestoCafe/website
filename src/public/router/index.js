import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "../../345RestoCafe/HomeView/HomeView.vue";
import MenuView from "@/345RestoCafe/MenuView/MenuView.vue";
import AboutUsView from "@/345RestoCafe/AboutUs/AboutUsView.vue";
import EventsView from "@/345RestoCafe/EventsView/EventsView.vue";
import ContactUsView from "@/345RestoCafe/ContactUsView/ContactUsView.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/nosotros',
        name: 'AboutUs',
        component: AboutUsView,
    },
    {
        path: '/la-carta',
        name: 'Menu',
        component: MenuView,
    },
    {
        path: '/eventos',
        name: 'Events',
        component: EventsView,
    },
    {
        path: '/contacto',
        name: 'ContactUs',
        component: ContactUsView,
    },

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {top: 0, behavior: 'smooth'};
    }
});

export default router;
