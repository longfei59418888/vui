<template>
    <div class="action_sheet_box_comment">
        <bg @close="close" :show="isShow">
            <div class="action_sheet_box_box" :style="itemPosition">
                <div class="action_sheet_box_items">
                    <div class="action_sheet_box_bg"></div>
                    <div class="action_sheet_box_item-box">
                        <date v-if="!isTime" @choose="choose" :start="start" :end="end" :current="current"></date>
                        <times v-if="isTime" @choose="choose" ></times>
                    </div>
                </div>
            </div>
        </bg>
    </div>
</template>
<style scoped="" lang="scss">
    .action_sheet_box_comment{
        p{margin: 0}
        .action_sheet_box_close{background-color: #fff;margin: .15rem;border-radius: .1rem;height: .6rem;font-size: .30rem;color: #666;}
        .action_sheet_box_box{position: absolute;left: 0;width: 100%;bottom: 0rem;
            -webkit-transition: all .3s;transition: all .3s;-webkit-transform: translateY(100%);transform: translateY(100%);
            .action_sheet_box_items{position: relative;z-index: 3;overflow: hidden;
                .action_sheet_box_bg{position: absolute;height: 100%;width: 100%;left: 0;top: 0;background-color: #fff;opacity: .9;}
                .action_sheet_box_item-box{position: relative;
                    ul{margin: 0;padding: 0;max-height: 4.5rem;overflow-y: scroll;
                        li{line-height: .7rem;display: flex;}
                        .action_sheet_box_icon{width: .7rem;text-align: center;
                            img{width: .36rem;height: .36rem;position: relative;top: .1rem;}
                        }
                        .action_sheet_box_text{flex: 1;-webkit-flex: 1;border-bottom: 1px solid #ccc;margin-left: .1rem;}
                        .action_sheet_box_info{width: .7rem;border-bottom: 1px solid #ccc;}
                    }
                }
                .action_sheet_box_title{height: .7rem;padding: 0 .15rem;line-height: .7rem;border-bottom: 1px solid #ccc;}
            }
        }
    }
</style>
<script>
    import bg from './bg.vue'
    import { getVendorPrefix } from '../utils'
    import date from './date.vue'
    import times from './time.vue'
    export default {
        data () {
            return {
                start:'1970-01-01',
                end:'2050-12-31',
                current:'1970-01-01',
                isTime:false,
                isShow:false,
                isClose:false,
                itemPosition:{}
            }
        },
        computed: {},
        watch: {
            'isShow'(){
                this.itemPosition = this.isShow?{webkitTransform:'translateY(0)',transform:'translateY(0)'}:{}}
        },
        methods: {
            close(){
                this.remove();},
            choose(date){
                this.chooseItem(date)
            }
        },
        updated(){
//            console.log(this.start)
        },
        created(){},
        components: {bg,date,times}
    }
</script>
