<template>
    <transition name='fade'>
        <div v-show='visible' style="position: fixed;z-index: 99999999;
           width: 100%;height: 100%;top: 0;left: 0;text-align: center;
             background: rgba(0,0,0,0.1);">
            <div v-bind:style="top">
                <p style="color: #fff;padding: .25rem .45rem;display: inline-block;background: rgba(0,0,0,0.65);border-radius: .1rem;
                font-size: .28rem;">{{message}}</p>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        data () {return {
            visible: false,
            message : '',
            position : ''
        }},
        computed: {
            top(){
                var style ={position:'absolute',left:'0',width:'100%'}
                if(this.position=='top'){
                    return Object.assign({top:'0'},style)
                }else if(this.position=='bottom'){
                    return Object.assign({bottom:'0'},style)
                }else {
                    return Object.assign({top:'40%'},style)
                }
            }
        },
        watch: {},
        methods: {},
        created(){},
        components: {}
    }
</script>
<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .35s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
</style>
