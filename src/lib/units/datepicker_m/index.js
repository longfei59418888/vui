/**
 * Created by DELL on 2017/6/26.
 */
import Vue from 'vue'
import actionBox from './actionBox.vue'
const musicOptionConstructor = Vue.extend(actionBox)

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
export function datePicker (options = {}){
    var instance = new musicOptionConstructor().$mount(document.createElement('div'));

    if( options.start) instance.start = options.start
    if( options.end) instance.end = options.end
    if( options.isTime) instance.isTime = options.isTime
    if( options.current) instance.current = options.current
    else{
        var c_date = new Date(),year=c_date.getFullYear(),month = c_date.getMonth(),day =  c_date.getDate()
        instance.current = year+'-'+(month>9?month:('0'+month))+'-'+(day>9?day:('0'+day))
    }
    if(options.isClose){
        instance.isClose = true
    }
    instance.chooseItem =  function (index) {
        if(Object.prototype.toString.call(options.handle) == '[object Function]'){
            options.handle(index)
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
