<template>
    <div style="background-color: #F0F0F0">
        <div style="background-color: #fff;width: 85%;margin: 100px auto 20px;">
            <smooth @choose="choose" :list="list" style="height: 3.2rem;"></smooth>
        </div>
        <div class="box" style="background-color: #fff;">
            <h5>属性：</h5>
            <p><span>list</span> ：数组(选项对象Item)</p>
            <div class="list">
                <h5>Item :</h5>
                <p><span>flex</span> ：所占比例</p>
                <p><span>name</span> ：类别名称</p>
                <p><span>item</span> ：当前选中的item</p>
                <p><span>list</span> ：选项列表</p>
                <p><span>style</span> ：单个item的样式</p>
            </div>
        </div>
    </div>
</template>
<style scoped="" lang="scss">
    .box{padding: .3rem;
        .list{margin-left: .3rem;
            p{font-size: .28rem;line-height: .4rem;
                span{color: red;}
            }
        }
    }
</style>
<script>
    import smooth from '../../lib/units/smoothPicker/index.vue'
    export default {
        data () {
            return {
                list:[
                    {
                        flex:1,
                        name:'test',
                        item:'选项6',
                        list:['选项1','选项2','选项3','选项4','选项5','选项6','选项7','选项8'],
                        style:{},
                    },
                    {
                        flex:2,
                        name:0,
                        item:'select3',
                        list:['select1','select2','select3','select4','select5','select6','select7','select8'],
                        style:{},
                    }
                ]
            }
        },
        computed: {},
        watch: {},
        methods: {
            choose(index,item){
                if(item.name=='test'){
                    this.list[1].list=['选项1','选项2','选项3','选项4','选项5','选项6','选项7','选项8']
                }
//                this.list[1].item = '选项3'
            }
        },
        created(){

        },
        components: {smooth}
    }
</script>
