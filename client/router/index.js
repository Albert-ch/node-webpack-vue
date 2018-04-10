import Vue from 'vue'
import Router from 'vue-router'
// import axios from 'axios'
import index from '../page/index/index.vue'
import drag from '../page/drag/drag.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/drag',
            name: 'drag',
            component: drag
        }
    ]
})