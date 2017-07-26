/**
 * Created by DELL on 2017/7/14.
 */

const checkIsUpdate=(o,n)=>{  //检查是否值相等
    if(n.replace(/^http:/,'').replace(/^https:/,'').match(o.replace(/^http:/,'').replace(/^https:/,''))) return true
    return false
}

const compute = function(el, cb) {
    const rect = el.getBoundingClientRect()
    if(((rect.bottom >=0 && rect.bottom <= window.screen.height)
        || (rect.top >=0 && rect.top <= window.screen.height))
        && ((rect.right >=0 && rect.right <= window.screen.width)
        || (rect.left >=0 && rect.left <= window.screen.width))){
        if(el.src != el.newSrc && !!el.newSrc){
            el.src = el.newSrc
            el.onload = function(){
                el.style.opacity = '1'
                el.onload = new Function
            }
            if(cb){
                cb()
            }
        }
    }
}

const imgLoad =　{
    install(Vue,_options){
        Vue.directive('imgload',{
            inserted(el,bind,vnode,onode){
                if(!el || checkIsUpdate(el.src,bind.value)) return;
                if(!el.src||el.src==location.origin+"/"){
                    el.src = 'https://www.baidu.com/img/baidu_jgylogo3.gif'
                }
                el.newSrc = bind.value
                el.setAttribute('newSrc',bind.value)
                el.onload=()=>{
                    el.onload = new Function()
                    el.onerror = new Function()
                    compute(el)
                }


            },
            update (el, bind) {
                if(checkIsUpdate(el.src,bind.value))return
                el.newSrc = bind.value
                el.setAttribute('newSrc',bind.value)
                setTimeout(function () {
                    compute(el)
                },150)
            }
        })
    }
}

export default imgLoad