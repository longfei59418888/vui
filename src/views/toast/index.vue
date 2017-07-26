<template>
    <div class="action-sheet">
        <scroller>
            <div style="width: 80%;margin: 100px auto 0;font-size: .32rem;text-align: center;color: #666;">
                <p style="line-height: .8rem;display: inline-block;border: 1px solid #ccc;border-radius: .1rem;padding: 0 .4rem;
            box-shadow: 0 0 3px #ddd;margin: 0;margin-top: .3rem;" @click="show(1)">中间Toast</p><br/>
                <p style="line-height: .8rem;display: inline-block;border: 1px solid #ccc;border-radius: .1rem;padding: 0 .4rem;
            box-shadow: 0 0 3px #ddd;margin: 0;margin-top: .2rem;" @click="show(2)">下面Toast</p><br/>
                <p style="line-height: .8rem;display: inline-block;border: 1px solid #ccc;border-radius: .1rem;padding: 0 .4rem;
            box-shadow: 0 0 3px #ddd;margin: 0;margin-top: .2rem;" @click="show(3)">上面Toast</p>
            </div>
            <div class="info" style="width: 80%;margin: 100px auto 0;color: #666;">
                <h5>options:</h5>
                <p><span>message</span>：提示信息</p>
                <p><span>position</span>：提示位置</p>
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
    import toast from '../../lib/units/toast'
    export default {
        data () {
            return {}
        },
        computed: {},
        watch: {},
        methods: {
            show(item){
                switch (item){
                    case 1:
                        toast({
                            message:'中间出来message'
                        })
                        break;
                    case 2:
                        toast({
                            message:'bottom出来message' ,
                            position:'bottom'
                        })
                        break;
                    case 3:
                        toast({
                            message:'top出来message' ,
                            position:'top'
                        })
                        break;
                }

            }
        },
        created(){
            this.$store.commit('setInfoTitle','Toast')
        },
        components: {scroller}
    }
</script>
