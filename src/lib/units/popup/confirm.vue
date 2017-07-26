<template>
    <div class="comment_popup_box" :style="bgShow">
        <div class="bg" @click="canceld()"></div>
        <div class="box" :style="show">
            <div class="box-item">
                <p class="title" v-if="title" style="">{{title}}</p>
                <p class="meg" >{{message}}</p>
                <div class="option">
                    <p v-if="!alert" @click="canceld()" style="width: 50%;float: left;border-right: 1px solid #efefef">{{cancelText}}</p>
                    <p v-if="!alert" @click="successd()" style="width: 50%;float: left;background-color: #D33C33;color: #fff;">{{okText}}</p>
                    <p v-if="alert" @click="successd()" style="width: 100%;float: left;color: #333;">{{okText}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped="" lang="scss">
    .comment_popup_box{position: fixed;left: 0;top: 0;background-color: rgba(0,0,0,.15);width: 100%;height: 100%;z-index: 9999;opacity: 0;
        p{margin: 0}transition: all .2s;
        .bg{position: absolute;width: 100%;height: 100%;left: 0;top: 0;}
        .box{width: 100%;position: absolute;left: 0;top: 4rem;  transition: all .2s;transform-origin: center;  transform: scale(.5);
            .box-item{width: 5rem;margin: 0 auto;background-color: #fff;border-radius: .05rem;overflow: hidden;
                .title{line-height: .85rem;font-size: .34rem;
                    text-align: center;border-bottom: 1px solid #efefef;height: .8rem;}
                .meg{margin: 0 .6rem;font-size: .32rem;color: #666;line-height: .3rem;padding: .7rem 0;letter-spacing: 1px;}
                .option{height: .9rem;line-height: .9rem;overflow: hidden;color: #333;font-size: .32rem;text-align: center;
                    border-top: 1px solid #efefef;}
            }
        }
    }
</style>
<script>
    export default {
        data () {
            return {
                title:false,
                message:'您是否要删除该文件呢？',
                cancelText:'取消',
                okText:'确认',
                isShow:false,
                alert:false,
            }
        },
        computed: {
            show(){
                if(!this.isShow) return {}
                else return {
                    transform: 'scale(1)',
                    webkitTransform: 'scale(1)',
                }
            },
            bgShow(){
                if(!this.isShow) return {}
                else return {
                    opacity:1,
                }
            }
        },
        watch: {},
        methods: {
            successd(){
                this.success()
            },
            canceld(){
                this.cancel()
            }
        },
        created(){

        },
        components: {}
    }
</script>
