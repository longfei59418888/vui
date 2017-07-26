<template>
   <div style="width: 100%;overflow: hidden">
       <div ref="item" style="width: 100%;position: relative">
           <slot></slot>
           <div style="position: absolute;height: 100%;right: -85px;top: 0;">
               <p @click="deleted($event)" style="width: 80px;height: 100%;text-align: center;font-size: .30rem;color: #fff;
                display: flex;display: -webkit-flex; align-items:center; -webkit-align-items:center;
                justify-content:center;  -webkit-justify-content:center;background-color: #D33C33;">删除{{index}}</p>
           </div>
       </div>
   </div>
</template>
<script>
    import { getVendorPrefix,getTranslateInfo } from './utils'
    export default {
        props:['item','index'],
        data () {
            return {}
        },
        computed: {},
        watch: {},
        methods: {
            deleted(e){
                e.stopPropagation()
                if(this.index){
                    this.$emit('deleted',this.index)
                    return
                }
                this.$emit('deleted',this.item)
            }
        },
        mounted(){
            var item = this.$refs.item,start_x,move_x=0,prefix = getVendorPrefix()
            item.addEventListener('touchstart',function (e) {
                item.style[prefix+'Transition']='all 0s'
                var touch = e.touches[0]
                start_x = touch.pageX;
            })
            item.addEventListener('touchmove',function (e) {
                e.stopPropagation()
                var touch = e.touches[0]
                var info = getTranslateInfo(item.style[prefix+'Transform'])
                move_x = touch.pageX - start_x + info.x;
                if(move_x<-80){
                    move_x = Math.pow((200+move_x)/200,2)*(touch.pageX - start_x)+info.x
                }
                item.style[prefix+'Transform'] = 'translate('+move_x+'px,0)'
                start_x = touch.pageX
            })
            item.addEventListener('touchend',function (e) {
                item.style[prefix+'Transition']='all .3s'
                var info = getTranslateInfo(item.style[prefix+'Transform'])
                if(info.x < -85){
                    item.style[prefix+'Transition']='all .1s'
                    item.style[prefix+'Transform'] = 'translate(-85px,0)'
                    return
                }
                item.style[prefix+'Transform'] = 'translate(0,0)'
            })
        },
        components: {
        }
    }
</script>
