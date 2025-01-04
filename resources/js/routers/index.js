import { createRouter, createWebHistory } from "vue-router";
import TopPage from "../components/TopPage.vue";
import Education from "../components/Education.vue";
import Portfolio from "../components/Portfolio.vue";
import Awards from "../components/Awards.vue";

const routes = [
    {
        path: '/',
        component: TopPage,
    },
    {
        path: '/about',
        component: TopPage
    },
    {
        path: '/education',
        component: Education
    },
    {
        path: '/portfolio',
        component: Portfolio
    },
    {
        path: '/awards',
        component: Awards
    },
    {
        
        path: '/skills',
        component: Education
    }
];

export default createRouter({
    history: createWebHistory(),
    routes,
});