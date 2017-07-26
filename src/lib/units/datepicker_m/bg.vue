<template>
    <div style="position: fixed;left: 0;top: 0;width: 100%;height: 100%;z-index: 999999">
        <div @click="close()" style="background-color: rgba(0,0,0,.55);position: absolute;z-index: 2;
        width: 100%;height: 100%;left: 0;top: 0;-webkit-transition: all .4s;transition: all .4s;opacity: 0;"
        :style="itemOpacity">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props:['show'],
        data () {
            return {
                itemOpacity:{}
            }
        },
        computed: {},
        watch: {
            'show'(){
                this.itemOpacity = this.show?{opacity:1}:{}
            }
        },
        methods: {
            close(){
                this.$emit('close')
            }
        },
        created(){},
        components: {}
    }
</script>
