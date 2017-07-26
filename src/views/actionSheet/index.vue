<template>
    <div class="action-sheet">
        <scroller>
            <div style="width: 80%;margin: 100px auto 0;font-size: .32rem;text-align: center;color: #666;">
                <p style="line-height: .8rem;display: inline-block;border: 1px solid #ccc;border-radius: .1rem;padding: 0 .4rem;
            box-shadow: 0 0 3px #ddd;margin: 0;margin-top: .3rem;" @click="show(1)">不带标题,不带信息ActionSheet</p>
                <p style="line-height: .8rem;display: inline-block;border: 1px solid #ccc;border-radius: .1rem;padding: 0 .4rem;
            box-shadow: 0 0 3px #ddd;margin: 0;margin-top: .2rem;" @click="show(4)">带信息ActionSheet</p>
                <p style="line-height: .8rem;display: inline-block;border: 1px solid #ccc;border-radius: .1rem;padding: 0 .4rem;
            box-shadow: 0 0 3px #ddd;margin: 0;margin-top: .2rem;" @click="show(2)">带标题，带信息ActionSheet</p>
                <p style="line-height: .8rem;display: inline-block;border: 1px solid #ccc;border-radius: .1rem;padding: 0 .4rem;
            box-shadow: 0 0 3px #ddd;margin: 0;margin-top: .2rem;" @click="show(3)">带图标ActionSheet</p>
                <p style="line-height: .8rem;display: inline-block;border: 1px solid #ccc;border-radius: .1rem;padding: 0 .4rem;
            box-shadow: 0 0 3px #ddd;margin: 0;margin-top: .2rem;" @click="show(5)">带取消ActionSheet</p>
            </div>
            <div class="info" style="width: 80%;margin: 100px auto 0;color: #666;">
                <h5>options:</h5>
                <p><span>title</span>：标题</p>
                <p><span>list</span>：选项数组item</p>
                <div class="list">
                    <p><span>item</span>: 选项</p>
                    <div class="list">
                        <p><span>icon</span>: 选项图标</p>
                        <p><span>text</span>: 选项文字</p>
                        <p><span>handle</span>: 选中回调(index,item)参数</p>
                        <p><span>info</span>: 选项信息</p>
                    </div>
                </div>
                <p><span>handle</span>：默认回调函数(index,item)参数</p>
                <p><span>isClose</span>：是否有取消按钮</p>
            </div>
            <div style="height: 100px;"></div>
        </scroller>
    </div>
</template>
<style scoped="" lang="scss">
    .action-sheet{
        .list{margin-left: .5rem;}
        .info{
            p{font-size: .30rem;
                span{color: #D33C33;}
            }
        }
    }
</style>
<script>
    import scroller from '../../lib/units/scroller'
    import {actionSheet} from '../../lib/units/actionSheet/index.js'
    import img1 from '../../img/setting-1.png'
    import img2 from '../../img/setting-2.png'
    import img3 from '../../img/setting-3.png'
    import img4 from '../../img/setting-4.png'
    import img5 from '../../img/setting-6.png'
    export default {
        data () {
            return {img1,img2,img3,img4,img5,}
        },
        computed: {},
        watch: {},
        methods: {
            show(item){
                switch (item){
                    case 1:
                        actionSheet({
                            list:[
                                {text:'选项一',handle(){}},
                                {text:'选项二',handle(){}},
                                {text:'选项三',handle(){}},
                                {text:'选项四',handle(){}},
                            ],
                            handle(){

                            }
                        })
                        break;
                    case 4:
                        actionSheet({
                            list:[
                                {text:'选项一',handle(){},info:'sdf'},
                                {text:'选项二',handle(){},info:'sdf'},
                                {text:'选项三',handle(){},info:'sdf'},
                                {text:'选项四',handle(){},info:'sdf'},
                            ],
                            handle(){

                            }
                        })
                        break;
                    case 2:
                        actionSheet({
                            title:'带标题，带信息ActionSheet',
                            list:[
                                {text:'选项一',handle(){},info:'sdf'},
                                {text:'选项二',handle(){},info:'sdf'},
                                {text:'选项三',handle(){},info:'sdf'},
                                {text:'选项四',handle(){},info:'sdf'},
                            ],
                            handle(){

                            }
                        })
                        break;
                    case 3:
                        actionSheet({
                            title:'带图标ActionSheet',
                            list:[
                                {icon:img1,text:'选项一',handle(){},info:'sdf'},
                                {icon:img2,text:'选项二',handle(){},info:'sdf'},
                                {icon:img3,text:'选项三',handle(){},info:'sdf'},
                                {icon:img4,text:'选项四',handle(){},info:'sdf'},
                            ],
                            handle(){

                            }
                        })
                        break;
                    case 5:
                        actionSheet({
                            title:'带取消ActionSheet',
                            isClose:true,
                            list:[
                                {icon:img1,text:'选项一',handle(){},info:'sdf'},
                                {icon:img2,text:'选项二',handle(){},info:'sdf'},
                                {icon:img3,text:'选项三',handle(){},info:'sdf'},
                                {icon:img4,text:'选项四',handle(){},info:'sdf'},
                            ],
                            handle(){

                            }
                        })
                        break;
                }

            }
        },
        created(){
            this.$store.commit('setInfoTitle','Action Sheet')
        },
        components: {scroller}
    }
</script>
