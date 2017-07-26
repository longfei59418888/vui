<template>
    <a @click="getFile">
        <slot></slot>
       <div ref="getFiles" style="height:0;overflow: hidden">
       </div>
    </a>
</template>
<script>
    import { headImage } from './index'
    export default {
        props:['height','width','isHead'],
        data () {return {}},
        computed: {},
        watch: {},
        methods: {
            getFile(){
                var _this = this ;
                var fileInput = document.createElement('input')
                fileInput.setAttribute('type','file')
                this.$refs.getFiles.appendChild(fileInput)
                setTimeout(()=>{fileInput.click()},20)
                fileInput.onclick=function (e) {e.stopPropagation()}
                fileInput.onchange=function (e) {
                    headImage({
                        isHead:_this.isHead,
                        file:fileInput.files[0],
                        height:_this.height,
                        width:_this.width,
                        success(rst){
                            _this.$emit('success',rst)
                        }
                    })
                }
            }
        },
        mounted(){
        },
        components: {}
    }
</script>
