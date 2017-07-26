/**
 * Created by DELL on 2017/6/26.
 */
import Vue from 'vue'
import modalBox from './modalBox.vue'

export function modal(template,options) {
    modalBox.components.box=template;
    const sheetAddConstructor = Vue.extend(modalBox)
    sheetAddConstructor._options = options
    sheetAddConstructor.false=false
    //移除
    sheetAddConstructor.prototype.remove = function () {
        var _this = this;
        if(!_this.isShow) return
        _this.isShow= false
        sheetAddConstructor.false=false
        if(!sheetAddConstructor._options.direction){
            _this.$el.parentNode.removeChild(_this.$el);
            return
        }
        setTimeout(function () {
            _this.$el.parentNode.removeChild(_this.$el);
        },350)
    }
    //立即移除
    sheetAddConstructor.prototype.removeNow = function () {
        this.isShow= false
        sheetAddConstructor.false=false
        this.$el.parentNode.removeChild(this.$el);
    }
    if( sheetAddConstructor.false) return;
    sheetAddConstructor.false=true
    var instance = new sheetAddConstructor().$mount(document.createElement('div'));
    if(options.direction){
        instance.direction = options.direction
    }
    instance.scope=options.scope
    instance.success =  function (data) {
        if(Object.prototype.toString.call(options.success) == '[object Function]'){
            options.success(data)
            this.remove()
        }
    }
    document.body.appendChild(instance.$el);
    setTimeout(function () {
        instance.isShow= true
    },10)
    setTimeout(function () {
    },3000)
    Vue.nextTick(() => {})
    return instance
}