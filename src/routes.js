import Vue from 'vue'
import VueRouter from 'vue-router'

import AppHome from './components/home'
import AppRea from './components/rea.vue'
import AppSingleRea from './components/singlerea.vue'


Vue.use(VueRouter)

export const router = new VueRouter ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        component: AppHome
    },
    {
        path: '/realisations',
        component: AppRea 
    },
    {
      path: '/projet/:slug',
      component: AppSingleRea  
    },
    {
        path: '*',
        redirect: '/'
    }
],
scrollBehavior: (to)=>{
    if(to.hash){
        return{
            selector: to.hash
        }
    }
}
})


export default router
