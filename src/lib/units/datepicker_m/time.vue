<template>
    <div class="common_choose-box">
        <div class="common_choose-box_option">
            <span>关闭</span>
            <span @click="confirm">确认</span>
        </div>
        <div class="common_choose-box_list-box">
            <smooth @choose="choose" :list="list"></smooth>
        </div>
    </div>
</template>
<style scoped="" lang="scss">
    .common_choose-box{
        .common_choose-box_option{  height: .7rem;padding: 0 .2rem;padding-top: .125rem;
            span{border: 1px solid #ddd;background-color: #fff;display: inline-block;line-height: .45rem;padding: 0 .2rem;
                border-radius: .1rem;
                &:last-child{float: right;}
            }
        }
    }
</style>
<script>
    import smooth from '../smoothPicker/index.vue'
    export default {
        data () {
            return {}
        },
        computed: { list(){
            var hour = [],min=[]
            for (var i = 0;i<24;i++){hour.push(i>9?i:('0'+i))}
            for (var i = 0;i<60;i++){min.push(i>9?i:('0'+i))}
            return [
                {
                    flex:2,
                    item:'00',
                    name:'hour',
                    list:hour,
                },
                {
                    flex:1,
                    item:'',
                    disable:true,
                    name:'month',
                    style:{fontSize:'.4rem'},
                    list:[':'],
                },
                {
                    flex:2,
                    item:'00',
                    name:'min',
                    list:min,
                },
            ]
        }},
        watch: {},
        methods: {
            confirm(){
                this.$emit('choose',this.currents.join(':'))
            },
            choose(name,item){
                if(item.name=='hour'){
                    this.currents[0]=name
                }else {
                    this.currents[1]=name
                }
            },
        },
        created(){
            this.currents=['00','00']
        },
        components: {smooth}
    }
</script>
