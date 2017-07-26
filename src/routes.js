/**
 * Created by DELL on 2017/7/17.
 */

import index from './views/home/index.vue'
import home from './views/home/home.vue'
import selection from './views/selection/index.vue'
import sele from './views/selection/sele.vue'
import selection_info from './views/selection/info.vue'
import actionSheet from './views/actionSheet/index.vue'
import toast from './views/toast/index.vue'
import Popup from './views/Popup/index.vue'
import modal from './views/modal/index.vue'
import upload from './views/upload/index.vue'
import list from './views/list/index.vue'
import scroller from './views/scroller/index.vue'
import refresh from './views/refresh/index.vue'
import infinite from './views/infinite/index.vue'
import imgload from './views/imgload/index.vue'
import smooth from './views/smooth/index.vue'
import time from './views/time/index.vue'

const routers = [
    {path:'/',component:index,children:[
        {path:'home',component:home,meta: { test: true },name:'home'},
        {path:'selection',component:selection,meta: { test: true },name:'selection'},
        {path:'selection/sele',component:sele,meta: { test: true },name:'selection_sele'},
        {path:'selection/info',component:selection_info,meta: { test: true },name:'selection_info'},
        {path:'action-sheet',component:actionSheet,meta: { test: true },name:'action-sheet'},
        {path:'toast',component:toast,meta: { test: true },name:'toast'},
        {path:'popup',component:Popup,meta: { test: true },name:'popup'},
        {path:'modal',component:modal,meta: { test: true },name:'modal'},
        {path:'upload',component:upload,meta: { test: true },name:'upload'},
        {path:'list',component:list,meta: { test: true },name:'list'},
        {path:'scroller',component:scroller,meta: { test: true },name:'scroller'},
        {path:'refresh',component:refresh,meta: { test: true },name:'refresh'},
        {path:'infinite',component:infinite,meta: { test: true },name:'infinite'},
        {path:'imgload',component:imgload,meta: { test: true },name:'imgload'},
        {path:'smooth',component:smooth,meta: { test: true },name:'smooth'},
        {path:'time',component:time,meta: { test: true },name:'time'},
    ]},
]

export default routers