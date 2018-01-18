import Vue from 'vue'
import ElementUI from 'element-ui'
// import axios from 'axios'
import moment from 'vue-moment'

import App from './App.vue'
import router from './router/index'


Vue.use(ElementUI)
Vue.use(moment)

new Vue({
    el: '#app',
    router,
    ElementUI,
    template: '<app/>',
    components: {App}
})