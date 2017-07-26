<template>
    <div class="pagination_comment_style" style="width: 100%;overflow: hidden">
        <ul class="pagination">
            <li @click="goPage(pageIndex-1)" v-bind:class="{ 'no-allow': 1 == pageIndex }"><span>«</span></li>
            <li @click="goPage(item)" v-for="item in pages" v-bind:class="{ 'active': item == pageIndex }"><span>{{item}}</span></li>
            <li @click="goPage(pageIndex+1)" v-bind:class="{ 'no-allow': pageIndex == pageLength }" style="border-right: none;"><span>»</span></li>
        </ul>
        <div style="float: left;line-height: 32px;height: 32px;font-size: 14px;
        margin-left: 20px;color: #666;">跳转到
            <input v-model="goIndex" style="width: 30px;height: 30px;border: 1px solid #ddd;border-radius: 5px;text-align: center;margin-left: 5px;" type="text">
            <span style="display: inline-block;height: 30px;width: 30px;border-radius: 5px;background-color: #428BCA;color: #fff;
            text-align: center;cursor: pointer;" @click="goPage(goIndex)">GO</span></div>
        <div style="float: left;line-height: 32px;height: 32px;color: #666;font-size: 14px;margin-left: 30px;">
            第 {{pageIndex}} 条 / 共 {{pageLength}} 条
        </div>
    </div>
</template>
<script>
    export default {
        props:['pageIndex','pageLength'],
        data () {
            return {
                goIndex:''
            }
        },
        computed: {
            pages(){
                var _  = this,pages=[],length,pageIndex = parseInt(_.pageIndex),pageLength=parseInt(_.pageLength);
                if(pageIndex<5){
                    length = pageLength>7?8:pageLength+1
                    for (var i = 1;i<length;i++) pages.push(i)
                }else if(pageIndex>4){
                    if(pageLength-pageIndex>2){pages.push(pageIndex-3);pages.push(pageIndex-2);pages.push(pageIndex-1);
                        pages.push(pageIndex);pages.push(pageIndex+1);pages.push(pageIndex+2);pages.push(pageIndex+3);
                    }else {
                        length = pageLength>7?pageLength-7:0
                        for (var i = pageLength;i>length;i--)pages.push(i)
                        pages.reverse();
                    }
                }
                return pages
            }
        },
        watch: {},
        methods: {
            goPage(index){
                index = parseInt(index)
                if(index == this.pageIndex) return;
                if(index<1|| index>this.pageLength) return
                this.$emit('goPage',index)
            }
        },
        created(){

        },
        components: {}
    }
</script>
<style>
    .pagination_comment_style .pagination{display: inline-block;overflow: hidden;border-radius: 5px;border: 1px solid #ddd;float: left}
    .pagination_comment_style .pagination li{float: left;width: 32px;height: 32px;line-height: 32px;text-align: center;
        border-right: 1px solid #ddd;cursor: pointer;color: #666;font-size: 14px;}
    .pagination_comment_style .pagination li:not(.no-allow):hover,.pagination_comment_style .pagination li.active{background-color: #eee;}
    .pagination_comment_style .pagination li.no-allow:hover,.pagination_comment_style .pagination li.active:hover{cursor:  not-allowed;}
</style>
