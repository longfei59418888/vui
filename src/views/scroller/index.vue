<template>
    <div class="action-sheet">
        <scroller
            @scroll="scroll"
        >
            <div class="info" style="width: 80%;margin: 100px auto 0;color: #666;">
                <h5>scroller </h5>
                <p><span>direction</span>：方向</p>
                <p><span>touch</span>：是否可以拖拽(移动端默认可以)</p>
                <p><span>ref</span>：返回当前组件</p>
                <p><span>scroll</span>：滚动时候的函数(e事件,info位置信息)</p>
                <p><span>getPosition</span>：得到位置信息(this.$refs[name].getPosition())</p>
            </div>
            <div v-for="item in num" style="border-bottom: 1px solid #ccc;">
                <span style="line-height: 30px;padding: 30px;font-size: .3rem;color: #666;">{{item}}</span>
            </div>
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
    import scroller from '../../lib/units/scroller/index.vue'
    export default {
        data () {
            return {
                num:[1,2,3,4,5,6,7,8,9,12,5,3,43,45,4,56,45,645,64,56,4,56,456]
            }
        },
        computed: {},
        watch: {},
        methods: {
            scroll(e,info){
                console.log(e,info)
            }
        },
        created(){
        },
        components: {scroller}
    }
</script>
