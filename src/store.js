/**
 * Created by DELL on 2017/7/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    info:{
        title:'首页',
    },
    data:{
        selectionControls:{
            list:[
                {name:"标准",info:'选项1'},
                {name:"高级",info:'选项1'},
                {name:"豪华",info:'选项1'},
                {name:"超豪华",info:'选项1'},
            ],
            info:{
                index:2
            }
        }
    },
}
const mutations = {
    setSelectionControlsIndex(store,index){
        store.data.selectionControls.info.index=index
    },
    setInfoTitle(store,title){
        store.info.title = title
    }
}
export default new Vuex.Store({
    state,
    mutations
})