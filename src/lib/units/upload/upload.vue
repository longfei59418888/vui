<template>
    <div style="position: fixed;width: 100%;height: 100%;left: 0;top: 0;z-index: 99999;">
        <img style="-webkit-transition: all 0s;transition: all 0s;" :style="position" :src="img" alt="">
        <div style="position: absolute;width: 100%;height: 100%;left: 0;top: 0;background-color: rgba(0,0,0,.7);z-index: 2">
            <div style="margin: 0 auto;overflow: hidden;position: relative"
                 :style="{height:height+'px',width:width+'px',marginTop:top+'px',marginLeft:left+'px',borderRadius:isHead?'100%':''}">
                <img ref="item" style="-webkit-transition: all 0s;transition: all 0s;" :style="positioni" :src="img" alt="">
            </div>
        </div>
        <div style="position: absolute;z-index: 10;bottom: 2rem;width: 100%;left: 0;text-align: center;">
            <span @click="cancel" style="display: inline-block;margin: 0 .8rem;"><img style="width: 1.2rem;opacity: .6" :src="noIcon" alt=""></span>
            <span @click="yes" style="display: inline-block;margin: 0 .8rem;"><img style="width: 1.1rem;opacity: .6" :src="yesIcon" alt=""></span>
        </div>
        <div style="height: 0;overflow: hidden">
            <canvas ref="canvass"></canvas>
        </div>
    </div>
</template>
<script>
    import { getVendorPrefix,getTranslateInfo,Base64ToBlob } from  '../utils'
    import noIcon from './crop-no.png'
    import yesIcon from './crop-yes.png'
    export default {
        data () {
            return {
                height:300,
                width:300,
                img_h:200,
                img_w:200,
                img:'',
                isHead:false,
                position:{},
                positioni:{},
                canvass:{},
                noIcon,
                yesIcon
            }
        },
        computed: {
            top(){return (WEB_CONFIG.web_height-this.height)/2-50},
            left(){return (WEB_CONFIG.web_width-this.width)/2},
        },
        watch: {
            'img'(){
                this.initPosition()
            }
        },
        methods: {
            cancel(){
                this.cancel()
            },
            yes(){
                var ctx = this.$refs.canvass.getContext('2d'),_this = this;
                var info = getTranslateInfo(this.positioni.transform),
                    width=parseFloat(this.positioni.width),
                    height=parseFloat(this.positioni.height)
                var img = new Image()
                img.onload=function () {
                    ctx.drawImage(img,info.x,info.y,width,height)
                    var url=_this.$refs.canvass.toDataURL("image/jpeg"); //url
                    _this.success({
                        blob: Base64ToBlob(url),
                        src:url
                    })
                }
                img.src = this.img
            },
            initPosition(){
                this.$refs.canvass.height=this.height
                this.$refs.canvass.width=this.width
                var scale = this.width/this.height,img_scale = this.img_w/this.img_h,set_height,set_width,set_left,set_top
                console.log(scale,img_scale)
                if(scale>img_scale){
                    set_width = this.width;
                    set_height = set_width/img_scale;
                    set_left = 0;
                    set_top = (this.height-set_height)/2;
                }else {
                    set_height = this.height;
                    set_width = set_height*img_scale;
                    set_top = 0;
                    set_left = (this.width-set_width)/2;
                }
                this.setPosition(set_width,set_height,set_left,set_top)
            },
            setPosition(width,height,left,top){
                width = parseFloat(width)
                height = parseFloat(height)
                if(this.height>height || this.width>width) return;
                if(top>0) top=0
                if(top<this.height-height) top = this.height - height
                if(left>0) left = 0
                if(left<this.width - width) left = this.width - width
                this.positioni={webkitTransform:'translate('+left+'px,'+top+'px)',transform:'translate('+left+'px,'+top+'px)'
                    , width:width+'px', height:height+'px',}
                left = left+this.left,top=top+this.top;
                this.position={webkitTransform:'translate('+left+'px,'+top+'px)',transform:'translate('+left+'px,'+top+'px)'
                    , width:width+'px', height:height+'px',}
            }
        },
        mounted(){
            var item = this.$refs.item,move_x,start_x,start_y,move_y,_this=this,
                start_x_length,start_y_length,move_x_length,move_y_length,prefix = getVendorPrefix()
            item.addEventListener('touchstart',function (e) {
                e.stopPropagation()
                e.preventDefault();
                var touch = e.touches[0],touch_end=e.touches[1];
                start_x = touch.pageX;start_y = touch.pageY;
                if(touch_end){
                    start_x_length = touch_end.pageX - touch.pageX
                }
            })
            item.addEventListener('touchmove',function (e) {
                e.stopPropagation()
                e.preventDefault();
                var touch = e.touches[0],touch_end=e.touches[1],
                    info = getTranslateInfo(item.style[prefix+'Transform']),width=item['width'],height=item['height'],scale= width/height

                move_x = touch.pageX - start_x + info.x;
                move_y = touch.pageY - start_y + info.y;
                if(touch_end){
                    move_x_length = touch_end.pageX - touch.pageX,
                    width += (move_x_length-start_x_length)
                    height = width/scale
                    _this.setPosition(width,height,move_x,move_y)
                }else {
                    _this.setPosition(width,height,move_x,move_y)
                }
                start_x = touch.pageX
                start_y = touch.pageY
                start_x_length = move_x_length
                start_y_length = move_y_length
            })
            item.addEventListener('touchend',function (e) {
                e.stopPropagation()
                e.preventDefault();
                var info = getTranslateInfo(item.style[prefix+'Transform'])
//                item.style[prefix+'Transform'] = 'translate(0,0)'
            })
            function getLength(x,y) {
                return Math.sqrt(Math.pow(Math.abs(x),2)+Math.pow(Math.abs(y),2))
            }
        },
        components: {
        }
    }
</script>
