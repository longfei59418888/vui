<template>
    <div class="table_comment_list">
        <table style="width: 100%;" border="0" cellspacing="0" cellpadding="0">
            <thead>
                <td v-for="item in theads">{{item.value}}</td>
            </thead>
            <tbody>
                <tr v-for="item in lists">
                    <td v-for="info in item.item">
                        <p v-if="!info.headInfo">{{info.value}}</p>
                        <p v-if="info.headInfo">
                            <span @click="option(func.func,func.name,item)" v-if="info.headInfo.isShow || func.name == info.value" style="cursor: pointer;display: inline-block;margin: 0 .1rem;"
                                  v-for="func in info.headInfo.funcList">{{func.value}}</span>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>

       <div style="margin: 30px 0">
           <pagination
                   @goPage="goPage"
                   :pageIndex='info.index'
                   :pageLength='info.length'
           ></pagination>
       </div>
    </div>
</template>
<script>
    import pagination from './table/pagination.vue'
    export default {
        props:['theads','list','info'],
        data () {
            return {}
        },
        computed: {
            lists(){
                var _ = this;
                var list = _.list.map((item,i)=>{
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
                console.log(list)
                return list
            }
        },
        watch: {},
        methods: {
            back(){
                this.$router.back();
            },
            option(name,info,item){
                this.$emit(name,info,item)
            },
            goPage(index){
                this.$emit('goPage',index)
            }
        },
        created(){

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
    .table_comment_list tr:hover{ background-color: #F9FAFC; }
</style>
