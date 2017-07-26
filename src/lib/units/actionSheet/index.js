/**
 * Created by DELL on 2017/6/26.
 */
import Vue from 'vue'
import musicOption from './musicOption.vue'
const musicOptionConstructor = Vue.extend(musicOption)

musicOptionConstructor.prototype.remove = function () {
    var _this = this;
    if(!_this.isShow) return
    _this.isShow= false
    setTimeout(function () {
        _this.$el.parentNode.removeChild(_this.$el);
    },350)
}

musicOptionConstructor.prototype.removeNow = function () {
    this.isShow= false
    this.$el.parentNode.removeChild(this.$el);
}
/*
* title
* list   { icon,text,handle,info }
* handle
* */

export function actionSheet (options = {}){
    var instance = new musicOptionConstructor().$mount(document.createElement('div'));
    if( options.list&&options.list.length>0){
        instance.list = options.list
    }
    if(options.title){
        instance.title = options.title
    }
    console.log(options.isClose)
    if(options.isClose){
        instance.isClose = true
    }
    instance.chooseItem =  function (index) {
        if(Object.prototype.toString.call(options.list[index].handle) == '[object Function]'){
            options.list[index].handle(options.list[index],index)
            return
        }
        if(Object.prototype.toString.call(options.handle) == '[object Function]'){
            options.handle(options.list[index],index)
        }

    }
    document.body.appendChild(instance.$el);
    setTimeout(function () {
        instance.isShow= true
    },10)
    Vue.nextTick(() => {
    })
    return instance
}
