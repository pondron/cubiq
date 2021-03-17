import Vue from 'vue'
import Router from 'vue-router'

import CubiqView from '@/components/views/CubiqView.vue'
import MarketView from '@/components/views/MarketView.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            name: 'cubiq',
            props: true,
            component: CubiqView,
        },
        {
            path: '/market',
            name: 'market',
            props: true,
            component: MarketView,
        }
    ]
})