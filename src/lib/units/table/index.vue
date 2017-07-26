<template>
    <div class="table_comment_list">
        <table style="width: 100%;" border="0" cellspacing="0" cellpadding="0">
            <thead>
            <td v-for="item in theads">{{item.value}}</td>
            </thead>
            <tbody v-if="lists.length>0">
            <tr v-for="item in lists">
                <td v-for="info in item.item">
                    <p v-if="!info.headInfo">{{info.value}}</p>
                    <p v-if="info.headInfo">
                        <span @click="option(func.func,func.name,item)"
                              v-if="info.headInfo.isShow || func.name == info.value" style="cursor: pointer;display: inline-block;margin-right:15px;"
                              v-for="func in info.headInfo.funcList">{{func.value}}</span>
                    </p>
                </td>
            </tr>
            </tbody>
            <tfoot v-if="lists.length<1">
            <tr><td :colspan="theads.length">暂无数据..</td></tr>
            </tfoot>
        </table>
        <div v-if="length>1" style="margin: 30px 0">
            <pagination
                    @goPage="goPage"
                    :pageIndex='index'
                    :pageLength='length'
            ></pagination>
        </div>
    </div>
</template>
<script>
    import pagination from './pagination.vue'
    export default {
        props:['theads','url','params'],
        data () {
            return {
                lists:[],
                index:1,
                length:1
            }
        },
        computed: {},
        watch: {
            'params':{
                handler:'setParams',
                deep:true
            },
        },
        methods: {
            option(name,info,item){
                this.$emit(name,name,info,item)
            },
            setParams(n,o){
                this.getData(1)
            },
            goPage(index){
                this.getData(index)
            },
            dealData(data){
                var _ = this;
                var list = data.map((item,i)=>{
                    var itemInfo = {
                        item:[],base:item
                    }
                    _.theads.forEach((v,i)=>{
                        if(!v.funcList){
                            itemInfo.item.push({value:item[v.name]});
                        }else {
                            itemInfo.item.push({value:item[v.name],headInfo:v});
                        }
                    })
                    return itemInfo
                })
                _.lists =  list.reverse()
            },
            getData(index){
                var _ = this;
                var data =  [
                    {agent:'asdfadfa',time:'asdf',agentType:'sdf',agentContactName:'sdf',detailedAddress:'asdfasdf',state:false},
                    {agent:'asdfas',time:'sdf',agentType:'asdfasdf',agentContactName:'asdfasdf',detailedAddress:'sdf',state:true},
                    {agent:'asdfas',time:'asdfasdf',agentType:'asdfasf',agentContactName:'asdfasdf',detailedAddress:'sdf',state:true  },
                    {agent:'asdfasdf',time:'sdf',agentType:'asdfasdf',agentContactName:'sdf',detailedAddress:'asdfasdf',state:false},
                    {agent:'asdfasf',time:'asdfasf',agentType:'sdf',agentContactName:'sdf',detailedAddress:'sdf',state:false},]
                _.index = index
                _.length = data.length
                _.dealData(data)
                this.post(_.url,Object.assign({
                    index:index,
                    pageLength:20,
                },_.params),(s)=>{
                    _.index = index  //设置页面
                    _.length = data.length  //设置页面长度
                    _.dealData(data)  //处理数据
                },(e)=>{

                })
            }
        },
        created(){
            this.getData(this.index)
        },
        components: {
            pagination
        }
    }
</script>
<style>
    .table_comment_list table{ border: 1px solid #ccc; font-size: 14px;color: #666;border-collapse: collapse;}
    .table_comment_list thead{ background-color: #F9FAFC;}
    .table_comment_list td{ padding-left: 10px;line-height: 36px; }
    .table_comment_list tr{ border-top: 1px solid #ccc; }
    .table_comment_list tbody tr:hover{ background-color: #F9FAFC; }
    .table_comment_list tfoot tr{ text-align: center;width: 100%;height: 50px;}
</style>
