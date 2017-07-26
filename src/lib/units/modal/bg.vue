<template>
    <div style="position: fixed;left: 0;width: 100%;height: 100%;top: 0;background-color: #fff;z-index: 999999"
        :style="itemShow">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props:['show','dec'],
        data () {
            return {
                itemShow:{}
            }
        },
        computed: {},
        watch: {
            'show'(news){
                if(news){
                    this.setStyle()
                }else {
                    this.setStyle(true)
                }
            },
            'dec'(){
                console.log('d')
                this.setStyle()
            }
        },
        methods: {
            setStyle(type){
                var style = ''
                if(this.dec=='left'){
                    style = 'translate(-100%,0)'
                }else if(this.dec=='right'){
                    style = 'translate(100%,0)'
                }else if(this.dec=='top'){
                    style = 'translate(0,-100%)'
                }else if(this.dec=='bottom'){
                    style = 'translate(0,100%)'
                }else {
                    style = 'translate(0,0)'
                }
                var types = {
                    webkitTransform:style,
                    Transform:style,
                }
                if(type){
                    types={
                        webkitTransition:'all .3s',
                        webkitTransition:'all .3s',
                        webkitTransform:style,
                        Transform:style,
                    }
                }
                this.itemShow = this.show?{
                    webkitTransition:'all .3s',
                    webkitTransition:'all .3s',
                    webkitTransform:'translate(0,0)',
                    Transform:'translate(0,0)',
                }:types
            }
        },
        created(){},
        components: {}
    }
</script>
