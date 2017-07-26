<template>
    <div class="action-sheet">
        <scroller>
            <div style="width: 80%;margin: 100px auto 0;font-size: .32rem;text-align: center;color: #666;">
                <p style="line-height: .8rem;display: inline-block;border: 1px solid #ccc;border-radius: .1rem;padding: 0 .4rem;
            box-shadow: 0 0 3px #ddd;margin: 0;margin-top: .3rem;" @click="show(1)">简单Modal</p><br/>
                <p style="line-height: .8rem;display: inline-block;border: 1px solid #ccc;border-radius: .1rem;padding: 0 .4rem;
            box-shadow: 0 0 3px #ddd;margin: 0;margin-top: .2rem;" @click="show(2)">滑动Modal</p><br/>
            </div>
            <div class="info" style="width: 80%;margin: 100px auto 0;color: #666;">
                <h5>modal ( template , options )</h5>
                <p><span>template</span>：模版(Vue组件)</p>
                <div class="list">
                    <p><span>props:['scope']</span>：获得options的scope对象</p>
                    <p><span>execMethod</span>: 实现execMethod函数</p>
                    <div class="list">
                        <p><span>method -- 函数名称(可以在options中定义，也可以在scope中定义)</span></p>
                        <code>
                        methods: {
                                execMethod(method){
                                 this.$emit('exec',method,
                                        ...Array.from(arguments).slice(1))
                            },
                        }
                        </code>
                    </div>
                </div>
                <p><span>options</span>：</p>
                <div class="list">
                    <p><span>direction</span>：滑入的方向(默认left)</p>
                    <p><span>scope</span>：传入作用域供Vue组得到(props:['scope']),可以传入函数</p>
                    <p><span>success</span>：成功回调函数</p>
                </div>
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
    import {modal} from '../../lib/units/modal'
    import test from './test.vue'
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
                        modal(test,{
                            direction:'',
                            scope:{
                                test:'asdf',
                                dotest(){
                                    alert('sadf')
                                },
                            },
                            success(data){}
                        })
                        break;
                    case 2:
                        modal(test,{
                            direction:'left',
                            scope:{
                                test:'asdf',
                                dotest(){
                                    alert('sadf')
                                },
                            },
                            success(data){}
                        })
                        break;
                }

            }
        },
        created(){
            this.$store.commit('setInfoTitle','Modal')
        },
        components: {scroller}
    }
</script>
