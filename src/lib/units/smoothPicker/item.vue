<template>
    <div ref="smoothPickerBox" class="smooth_picker_box" :style="item.flex | setFlex">
        <ul ref="smoothPickerUl">
            <li ref="smoothPickerLi" :style="[{height:itemHeight+'px'},item.style]" v-for="it in item.list">{{it}}</li>
        </ul>
        <div class="smooth_picker_layer">
            <div class="smooth_picker_top"></div>
            <div class="smooth_picker_bottom"></div>
        </div>
    </div>
</template>
<style scoped="" lang="scss">
    .smooth_picker_box{position: relative;
        ul{
            transition-property: transfrom;  -moz-transition-property: -moz-transfrom;  -webkit-transition-property:-webkit-transfrom;
            li{ display: flex;  align-items:center;   justify-content:center;font-size: .32rem; }
        }
        .smooth_picker_layer{
            position: absolute;left: 0;top: 0;width: 100%;height: 100%;
            .smooth_picker_top{position: absolute;height: 40%;width: 100%;left: 0;top: 0;
                background: linear-gradient(180deg,#fff 10%,hsla(0,0%,100%,.7));
                border-bottom: 1px solid #c8c7cc;
            }
            .smooth_picker_bottom{position: absolute;height: 40%;width: 100%;left: 0;bottom: 0;
                background: linear-gradient(0deg,#fff 10%,hsla(0,0%,100%,.7));
                border-top: 1px solid #c8c7cc;
            }
        }
    }
</style>
<script>
    import {getTranslateInfo,getVendorPrefix} from '../utils'
    var vendorPrefix = getVendorPrefix()
    export default {
        props:['itemHeight','item'],
        data () {
            return {}
        },
        computed: {},
        watch: {},
        methods: {
            initPosition(){
                this.smoothPickerUlHeight = this.smoothPickerUl.offsetHeight
                this.itemIndex = this.item.item && this.item.list.indexOf(this.item.item) != -1?this.item.list.indexOf(this.item.item):0
                this.minOffsetHeight = this.smoothPickerBox.offsetHeight - this.itemHeight*2 - this.smoothPickerUlHeight;
                this.setIndexPosition()
            },
            setPosition(y){
                var _ = this ;
                _.smoothPickerUl.style[vendorPrefix+"Transform"]='translate(0,'+y+'px)'
                this.setMoveStyle(y)
            },
            setMoveStyle(y){
                var _ = this, smoothPickerLi = this.smoothPickerLi,y = y<0?Math.abs(y):-y
                smoothPickerLi.forEach((v,i)=>{
                    var scale = Math.abs(v.offsetTop-(y+_.maxOffsetHeight))/_.maxOffsetHeight
                    scale = scale*.4
                    if(scale<.2) scale =.2
                    v.style[vendorPrefix+"Transform"]='rotateX('+(scale*90)+'deg)'
                })
            },
            getItemIndex(y){
                y = Math.abs(parseFloat(y-60))
                var index = parseInt(y/32),dot=y%32
                if(dot>16){index+=1}
                return index
            },
            setIndexPosition(type){
                var _ = this;
                if(type) _.smoothPickerUl.style[vendorPrefix+"TransitionDuration"]=type+'s'
                this.setPosition(this.itemHeight*(2-this.itemIndex))
                this.setMoveStyle(this.itemHeight*(2-this.itemIndex))
                if(type){
                    setTimeout(function () {
                        _.smoothPickerUl.style[vendorPrefix+"TransitionDuration"]='0s'
                    },type*1000)
                }
            },
            bindEvent(){
                var _ = this
                if(_.item.disable) return;
                _.smoothPickerBox.addEventListener('mousewheel',mousewheels,false)
                function mousewheels(e) {
                    var c_info,info=getTranslateInfo(_.smoothPickerUl.style[vendorPrefix+"Transform"])
                    if(e.wheelDeltaY>0){
                        c_info = info.y+_.itemHeight
                        if(c_info>_.maxOffsetHeight) c_info = _.maxOffsetHeight
                    }else {
                        c_info = info.y-_.itemHeight
                        if(c_info<_.minOffsetHeight) c_info = _.minOffsetHeight
                    }
                   _.setPosition(c_info)
                }
                var isTouch = 'ontouchstart' in window
                var mouseEvents = (isTouch) ?
                    {down: 'touchstart', move: 'touchmove', up: 'touchend', over: 'touchstart', out: 'touchend'} :
                    {down: 'mousedown', move: 'mousemove', up: 'mouseup', over: 'mouseover', out: 'mouseout'}
                var start_y,move_y;
                _.smoothPickerBox.addEventListener(mouseEvents.down,down,true)
                function down(e) {
                    e.preventDefault();e.stopPropagation()
                    e=e.changedTouches? e.changedTouches[0]:e;start_y=e.pageY
                    document.addEventListener(mouseEvents.move,move,false)
                    document.addEventListener(mouseEvents.up,up,false)
                }
                function move(e) {
                    e.stopPropagation();
                    var info = getTranslateInfo(_.smoothPickerUl.style[vendorPrefix+"Transform"]), c_info,scale=1,ban_info
                    e=e.changedTouches? e.changedTouches[0]:e
                    move_y=e.pageY-start_y
                    c_info = info.y+move_y;
                    if(c_info>_.maxOffsetHeight) {c_info = info.y+move_y*(1-(c_info - _.maxOffsetHeight)/_.maxOffsetHeight);}
                    else if(c_info<_.minOffsetHeight) {
                        c_info = info.y+move_y*(1-(c_info-_.minOffsetHeight)/_.minOffsetHeight)
                    }
                    _.setPosition(c_info)
                    start_y=e.pageY
                }
                function up(e) {
                    document.removeEventListener(mouseEvents.move,move,false)
                    document.removeEventListener(mouseEvents.up,up,false)
                    var info = getTranslateInfo(_.smoothPickerUl.style[vendorPrefix+"Transform"])
                    e=e.changedTouches? e.changedTouches[0]:e
                    var index = _.getItemIndex(info.y)
                    if(info.y>_.maxOffsetHeight) index = 0
                    else if(info.y<_.minOffsetHeight) index = _.item.list.length-1
                    _.itemIndex = index
                    _.setIndexPosition(.1)
                    _.$emit('end',_.item.list[_.itemIndex],_.item)
                }
            }
        },
        filters:{
            setFlex(value){
                return {flex:value,webkitFlex:value}
            }
        },
        updated(){
            var _ = this;
           setTimeout(()=>{
               _.initPosition();
           },30)
        },
        mounted(){
            this.smoothPickerBox = this.$refs.smoothPickerBox
            this.smoothPickerUl = this.$refs.smoothPickerUl
            this.smoothPickerLi = this.$refs.smoothPickerLi
            this.maxOffsetHeight = this.itemHeight*2;
            this.initPosition();
            this.bindEvent()

        },
        created(){

        },
        components: {}
    }
</script>
