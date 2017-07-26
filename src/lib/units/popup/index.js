/**
 * Created by DELL on 2017/6/26.
 */
import Vue from 'vue'
const ConfirmConstructor = Vue.extend(require('./confirm.vue'))
init(ConfirmConstructor)

function init(constructor) {
    constructor.false=false
    constructor.prototype.removeNow = function () {
        this.isShow= false;var _=this;
        constructor.false=false
        setTimeout(function () {
            _.$el.parentNode.removeChild(_.$el);
        },250)

    }
}


export function Confirm(options) {
    if( ConfirmConstructor.false) return;
    ConfirmConstructor.false=true
    var instance = new ConfirmConstructor().$mount(document.createElement('div'));
    if(options.title){instance.title = options.title}
    if(options.message){instance.message = options.message}
    if(options.cancelText){instance.cancelText = options.cancelText}
    if(options.okText){instance.okText = options.okText}
    instance.scope=options.scope
    instance.success =  function () {
        if(Object.prototype.toString.call(options.success) == '[object Function]'){
            options.success()
        }
        this.removeNow()
    }
    instance.cancel =  function () {
        if(Object.prototype.toString.call(options.cancel) == '[object Function]'){
            options.cancel()
        }
        this.removeNow()
    }
    document.body.appendChild(instance.$el);
    setTimeout(function () {
        instance.isShow= true
    },50)
    Vue.nextTick(() => {
    })
    return instance
}
export function Alert(options) {
    if( ConfirmConstructor.false) return;
    ConfirmConstructor.false=true
    var instance = new ConfirmConstructor().$mount(document.createElement('div'));
    if(options.message){instance.message = options.message}
    instance.alert = true
    if(options.okText){instance.okText = options.okText}
    instance.scope=options.scope
    instance.success =  function () {
        if(Object.prototype.toString.call(options.success) == '[object Function]'){
            options.success()
        }
        this.removeNow()
    }
    instance.cancel =  function () {
        if(Object.prototype.toString.call(options.cancel) == '[object Function]'){
            options.cancel()
        }
        this.removeNow()
    }
    document.body.appendChild(instance.$el);
    setTimeout(function () {
        instance.isShow= true
    },10)
    Vue.nextTick(() => {
    })
    return instance
}