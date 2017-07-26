/**
 * Created by DELL on 2017/6/22.
 */
import Vue from 'vue'
const ToastConstructor = Vue.extend(require('./toast.vue'))
let removeDom = event => {
    event.target.parentNode.removeChild(event.target);
};
ToastConstructor.prototype.end = function() {
    if(!this.visible) return
    this.visible = false;
    this.$el.addEventListener('transitionend', removeDom);
};
ToastConstructor.prototype.close = function() {
    if(!this.visible) return
    this.visible = false;
    this.$el.parentNode.removeChild(this.$el);
};
const Toast = (options = {}) => {
    var instance = new ToastConstructor().$mount(document.createElement('div'))
    let duration = options.duration || 2500;
    instance.message = typeof options === 'string' ? options : options.message
    instance.position = options.position || 'middle'
    document.body.appendChild(instance.$el);
    instance.visible = true;
    Vue.nextTick(() => {
        instance.timer = setTimeout(function() {
            instance.end();
        }, duration);
    })
    return instance
}
export default Toast