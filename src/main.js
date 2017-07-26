/**
 * Created by DELL on 2017/7/15.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import VueRouterTransition from './lib/VueRouterTransition'
import imgLoad from './lib/units/imgLoad/index.js'
import routes from './routes'
require('./style/index.scss')


import app from './app.vue'

//过滤器
Vue.filter('imgSetSize', function (value) {
    return value.replace('{size}',400)
})
Vue.filter('setTextSize', function (value,size) {
    if(value.length>size){
        value = value.slice(0,size)+'...'
    }
    return value;
})
Vue.filter('timeFormat', function (value) {
    var m = parseInt(value/60),s = parseInt(value%60)
    return (m>9?m:'0'+m)+":"+(s>9?s:'0'+s);
})


Vue.use(VueRouter);
Vue.use(imgLoad);
// const router = new VueRouter({
//     routes:routes,
// })

const  router = VueRouterTransition(VueRouter,routes)

new Vue({
    router,
    store,
    render: h => h(app)
}).$mount('#app')