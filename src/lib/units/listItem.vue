<template>
    <div class="list_item_list-item common_display_flex"  @click="checkChoose">
        <!--图标-->
        <div v-if="imgurl" class="img-box common-flex-mixin-center"  >
            <img :src="imgurl" alt="">
        </div>
        <!--名称-->
        <div class="msg-box common-flex-mixin-middle" :style="isBottom">
            <p>{{title}}</p>
        </div>
        <div class="option-box common-flex-mixin-center" :style="isBottom">
            <!--默认选择的，当前选择的-->
            <span class="choose-dft" v-if="dft&&!check">{{dft}}</span>
            <!--radio选择-->
            <p class="radio-box" v-if="choose&&!check" @click="change($event)" :style="choosep">
                <span :style="chooses"></span>
            </p>
            <!--箭头-->
           <svg v-if="!choose&&!check&&!noTo" t="1500006143437" class="icon" style="fill: #666" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3728"  width="32" height="32">
            <path d="M666.40551 502.455282 428.317513 264.367285 398.557959 294.12684 606.890256 502.455282 398.557959 710.78758 428.317513 740.545207 636.645956 532.216764 636.647883 532.216764Z" p-id="3729"
                  fill="#666">
            </path></svg>
            <svg v-if="check&&check==1" t="1500264808257" class="icon" style="margin-right: .2rem;" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="3259" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20">
            <path d="M955.7 230.5L919 194.2c-3.3-3.2-8.9-3.5-12.5-0.5L363.1 646.4c-7.2 6-19 6.2-26.4 0.5L116.9 478.4c-3.6-2.8-8.9-2-11.7 1.7l-38.7 52.6c-2.8 3.8-2.4 9.6 0.9 12.9l271 280.5c6.4 6.6 17 6.8 23.6 0.3l593.6-584.2c3.4-3.1 3.4-8.5 0.1-11.7z"
                  p-id="3260" fill="#d81e06"></path></svg>

            <!--<img v-if="!choose&&!check" src="../../image/option/jiantou-r.png" style="width: .32rem;" alt="">-->
            <!--<img v-if="check&&check==1" src="../../image/option/choose-tui.png" style="width: .32rem;" alt="">-->
        </div>
    </div>
</template>
<script>
    /*
    * imgurl  前面图标
    * title  title
    * bottom 是否有bottom-border
    * dft  默认的选择
    * ischoose  是否是radio 选择  1 选中  2 未选中
    * */
    export default {
        props:['imgurl','title','bottom','dft','ischoose','check','index','to','noTo'],
        data () {
            return {
                choose:false,
            }
        },
        computed: {
            isBottom(){
                return this.bottom?{borderBottom:'1px solid #efefef'}:''
            },
            choosep(){
                return this.choose == 1?{backgroundColor:'#D33A31',border:'1px solid #D33A31'}:{}
            },
            chooses(){
                return this.choose == 1?{float:'right',left:'2px'}:{}
            }
        },
        watch: {},
        methods: {
            change(e){
                e.stopPropagation()
                e.preventDefault()
                if(this.choose>1) this.choose=1
                else this.choose=2
                this.$emit('change',this.choose)
            },
            checkChoose(){
                if(this.to){
                    this.$router.push(this.to)
                }
                if(!this.check) return
                this.$emit('change',this.index)
            }
        },
        created(){
            this.choose = this.ischoose;
        },
        components: {
        }
    }
</script>
<style scoped lang='scss'>
    .list_item_list-item{  width: 100%;height: .9rem;overflow: hidden ;
        .img-box{width: .9rem;img{width: .4rem}}
        .msg-box{flex:1;p{font-size: .30rem;color: #333;padding-left: .1rem;}}
        .option-box{min-width: .5rem;
            .choose-dft{font-size: .26rem;color: #666;position: relative;top: .02rem;}
            .radio-box{width: 45px;height: 25px;  margin-right: .15rem;border-radius: 25px;border: 1px solid #eee;
                span{height: 24px;width: 24px;border-radius: 100%;display: inline-block;box-shadow: 1px 3px 3px #ccc;position: relative;
                    top: -1px;border: 1px solid #efefef;background-color: #fff;}
            }
        }
    }
</style>
