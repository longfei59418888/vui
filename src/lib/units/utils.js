/**
 * Created by DELL on 2017/6/7.
 */

const _ARRAY_NAME = "[object Array]"
const _OBJECT_NAME = "[object Object]"
const _FUNCTION_NAME = "[object Function]"

export function extend(target) {
    var targets, arg = Array.from(arguments).slice(1,arguments.length);
    if(arg.length>0){
        targets = _extend(target,arg[0])
    }
    if(arg.length>1){
        return extend(targets,arg[1])
    }
    return targets;
}
export function getVendorPrefix() {
    var body = document.body || document.documentElement,
        style=body.style,
        vendor = ['webkit' , 'khtml' , 'moz' , 'ms' , 'o'],
        i = 0;
    while(i < vendor.length){
        if(typeof style[vendor[i] + 'Transition'] === 'string'){
            return vendor[i];
        }
        i++;
    }
}
export function getTranslateInfo(t) {
    var reg = /translate\((.+)px?,(.+)px?\)/
    var rst = reg.exec(t)
    if(rst){
        return {
            x:parseFloat(rst[1]),
            y:parseFloat(rst[2])
        }
    }else {
        return {
            x:0,
            y:0
        }
    }
}
//深扩展
function _extend(target,source) {
    if(_isType(source) ==_ARRAY_NAME){
        for (var i=0;i<source.length;i++){
            if(_isType(source[i]) ==_ARRAY_NAME){
                target[i]=source[i].concat(target[i]?target[i]:[])
                _extend(target[i],source[i])
            }else if (_isType(source[i]) ==_OBJECT_NAME){
                target[i] = target[i]?target[i]:{}
                _extend(target[i],source[i])
            }else {
                target[i] = source[i]
            }
        }
    }else {
        for (var v in source){
            if(_isType(source[v]) ==_ARRAY_NAME){
                target[v]=source[v].concat(target[v]?target[v]:[])
                _extend(target[v],source[v])
            }else if(_isType(source[v]) ==_OBJECT_NAME){
                target[v] = target[v]?target[v]:{}
                _extend(target[v],source[v])
            }else {
                target[v] = source[v]
            }
        }
    }
    return target;
}
function _isType(obj) {
    return Object.prototype.toString.call(obj)
}

export function Base64ToBlob(urlData){

    var bytes=window.atob(urlData.split(',')[1]);        //去掉url的头，并转换为byte

    //处理异常,将ascii码小于0的转换为大于0
    var ab = new ArrayBuffer(bytes.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }
    return new Blob( [ab] , {type : 'image/png'});
}

export function isFunction(obj) {

    return _isType(obj) == _FUNCTION_NAME
}