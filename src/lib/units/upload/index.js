/**
 * Created by DELL on 2017/6/26.
 */
import Vue from 'vue'
const UploadConstructor = Vue.extend(require('./upload.vue'))
init(UploadConstructor)

function init(constructor) {
    constructor.false=false
    constructor.prototype.removeNow = function () {
        this.isShow= false
        constructor.false=false
        this.$el.parentNode.removeChild(this.$el);
    }
}


export function headImage(options) {

    if(UploadConstructor.false) return;
    UploadConstructor.false=true
    var instance = new UploadConstructor().$mount(document.createElement('div')),file=options.file,reader = new FileReader();
    instance.scope=options.scope
    instance.isHead=false
    if(options.isHead){
        instance.isHead=true
    }
    instance.success =  function (data) {
        if(Object.prototype.toString.call(options.success) == '[object Function]'){
            options.success(data)
        }
        instance.removeNow()
    }
    instance.cancel =  function () {
        if(Object.prototype.toString.call(options.cancel) == '[object Function]'){
            options.cancel()
        }
        instance.removeNow()
    }
    if(options.height){ instance.height = options.height }
    if(options.width){ instance.width = options.width }
    reader.onload = function(e) {
        setUrl(e.target.result)
    }
    function setUrl(src) {
        var img = new Image()
        img.src = src
        img.onload=function () {
            instance.img_h = img.height
            instance.img_w = img.width
            instance.img = img.src
        }
    }
    reader.readAsDataURL(file);
    document.body.appendChild(instance.$el);
    setTimeout(function () {instance.isShow = true},10)
    Vue.nextTick(() => {})
    return instance
}