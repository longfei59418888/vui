<template>
    <div ref="popoverList" @click="showList" class="popover_comment_list" style="display: inline-block;cursor: pointer;position: relative">
        <slot></slot>
        <div class="list" ref="listDom" v-if="show" style="background-color: #fff;min-width: 170px;position: absolute;z-index: 3;padding: 5px 0;opacity: 0;
            -webkit-transform: scaleY(0);transform: scaleY(0);"
            :style="[styles,styleShow]">
            <ul style="box-shadow: 0 1px 6px rgba(0,0,0,.117647),0 1px 4px rgba(0,0,0,.117647);border-radius: 2px;">
                <li @click="option(item)" v-for="item in list"><p style="color: #666;line-height: 48px;padding:0 16px;font-size: 16px; ">{{item.value}}</p></li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            list:{required:true},
            top:{default:'100%'},
            left:{default:0},
        },
        data () {
            return {
                show:false,
                styleShow:{},
                styles:{}
            }
        },
        computed: {},
        watch: {},
        methods: {
            showList(){
                var _ = this ,c_height = document.body.clientHeight-_.$refs.popoverList.getBoundingClientRect().bottom;
                if(!_.show){
                    _.show = true
                    setTimeout(()=>{
                        if(_.$refs.listDom.offsetHeight>c_height){
                            _.styles = {transformOrigin: 'center bottom',webkitTransformOrigin: 'center bottom',bottom:'100%' }
                        }else {
                            _.styles = {transformOrigin: 'center top',webkitTransformOrigin: 'center top',top:'100%' }
                        }
                        _.styleShow ={opacity:1,transform:'scaleY(1)',webkitTransform:'scaleY(1)'}
                        document.addEventListener('click',close,false)
                    },20)
                    function close() {
                        _.close()
                        document.removeEventListener('click',close,false)
                    }
                }else {
                    _.close()

                }
            },
            close(){
                var _ = this;
                _.styleShow = {}
                setTimeout(()=>{
                    _.show = false
                },350)
            },
            option(item){
                this.$emit('option',item)
            }
        },
        mounted(){
        },
        components: {}
    }
</script>
<style>
    ::-webkit-scrollbar{width: 6px;height: 6px;display: none}
    ::-webkit-scrollbar-thumb{background-color: #cfcfd2;border-radius: 8px;background-clip: padding-box;min-height: 28px;}
    ::-webkit-scrollbar-track-piece{background: #f3f3f3;}
    .popover_comment_list ul{padding: 10px 0;max-height: 300px;
        overflow-y: scroll;}
    .popover_comment_list .list{-webkit-transition: -webkit-transform .3s,opacity .3s; transition: transform .3s,opacity .3s;}
    .popover_comment_list li:hover{background-color: #E5E5E5;}
</style>
