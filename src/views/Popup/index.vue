<template>
    <div class="action-sheet">
        <scroller>
            <div style="width: 80%;margin: 100px auto 0;font-size: .32rem;text-align: center;color: #666;">
                <p style="line-height: .8rem;display: inline-block;border: 1px solid #ccc;border-radius: .1rem;padding: 0 .4rem;
            box-shadow: 0 0 3px #ddd;margin: 0;margin-top: .3rem;" @click="show(1)">Confirm</p><br/>
                <p style="line-height: .8rem;display: inline-block;border: 1px solid #ccc;border-radius: .1rem;padding: 0 .4rem;
            box-shadow: 0 0 3px #ddd;margin: 0;margin-top: .3rem;" @click="show(3)">无标题Confirm</p><br/>
                <p style="line-height: .8rem;display: inline-block;border: 1px solid #ccc;border-radius: .1rem;padding: 0 .4rem;
            box-shadow: 0 0 3px #ddd;margin: 0;margin-top: .2rem;" @click="show(2)">alert</p>
            </div>
            <div class="info" style="width: 80%;margin: 100px auto 0;color: #666;">
                <h5>Confirm:</h5>
                <p><span>title</span>：标题</p>
                <p><span>message</span>：提示信息</p>
                <p><span>success</span>：确认回调</p>
                <p><span>cancel</span>：取消回调</p>
                <p><span>okText</span>：确认文字</p>
                <p><span>cancelText</span>：取消文字</p>
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
    import { Confirm,Alert } from '../../lib/units/popup'
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
                        Confirm({
                            title:'Confirm?',
                            message:'您是否要测试呢？',
                            success(){
                                alert('确认!')
                            },
                            cancel(){
                                alert('取消')
                            }
                        })
                        break;
                    case 3:
                        Confirm({
                            message:'您是否要测试呢？',
                            success(){
                                alert('确认!')
                            },
                            cancel(){
                                alert('取消')
                            }
                        })
                        break;
                    case 2:
                        Alert({
                            message:'您是否要测试呢？',
                            success(){
                                alert('确认!')
                            },
                        })
                        break;


                }

            }
        },
        created(){
            this.$store.commit('setInfoTitle','Popup')
        },
        components: {scroller}
    }
</script>
