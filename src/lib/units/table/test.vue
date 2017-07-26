<template>
    <div style="margin: 50px;width: 95%;">
        <TableList
        :theads="theads"
        url=""
        :params="params"
        @changeState="changeState"
        @showInfo="showInfo"
        @option="option"
        ></TableList>

    </div>
</template>
<script>
    import TableList from './index.vue'
    export default {
        data () {
            return {
                params:{data:'sdf',time:'sdf'},
                theads:[
                    {name:'agent',value:'代理名称'},
                    {name:'time',value:'注册时间'},
                    {name:'agentType',value:'类型'},
                    {name:'agentContactName',value:'联系人'},
                    {name:'detailedAddress',value:'地址'},
                    {name:'state',value:'状态',funcList:[{name:true,value:'是',func:'changeState'},{name:false,value:'否',func:'changeState'}]},
                    {name:'option',value:'操作',isShow:true,funcList:[{name:true,value:'查看详情',func:'showInfo'},
                        {name:false,value:'通过',func:'option'},{name:true,value:'拒绝',func:'option'}]},
                ]
            }
        },
        computed: {},
        watch: {},
        methods: {
            changeState(name,info,item){
                console.log('changeState',info,item)
                item.item[5].value = !item.item[5].value
            },
            showInfo(info,item){
                console.log('showInfo',info,item)
            },
            option(info,item){
                console.log('option',info,item)
            },
        },
        created(){

        },
        components: {
            TableList
        }
    }
</script>
