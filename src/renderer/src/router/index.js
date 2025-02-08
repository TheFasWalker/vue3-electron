import {createRouter,createWebHistory} from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import AnotherPage from '../pages/AnotherPage.vue'
const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'',
            name:'home',
            component:HomePage
        },
        {
            path:'/about',
            name:'about',
            component:AboutPage
        },
        {
            path:'/another',
            name:'another',
            component:AnotherPage
        }
    ]
})
export default router;