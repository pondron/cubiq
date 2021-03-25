import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/views/Main.vue'
import Market from '@/components/views/Market.vue'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            name: 'cubiq',
            props: true,
            component: Main,
        },
        {
            path: '/market',
            name: 'market',
            props: true,
            component: Market,
        },
    ]
})