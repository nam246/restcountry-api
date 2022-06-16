import { createRouter, createWebHistory } from "vue-router"
import Countries from '../views/Countries.vue'
import CountryDetail from '../views/CountryDetail.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Countries
    },
    {
        path: '/:id',
        name: 'country-detail',
        component: CountryDetail,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router