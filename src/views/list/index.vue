<template>
    <div>
        <ul>
            <li v-for="(itemd,key) in list">
                <items @deleted="deleted" :item="key" >
                    <item noTo="true" title="itemd.title" :imgurl="itemd.img" bottom="1"></item>
                </items>
            </li>
        </ul>
        <div class="list">
            <h5>属性：</h5>
            <p><span>deleted</span> : 删除回调函数</p>
            <p><span>item</span> : 当前对象(回调时候参数)</p>
        </div>
    </div>
</template>
<style scoped="" lang="scss">
    ul{margin: 0;list-style: none;padding: 0;  }
    .list{
        padding: .3rem;
        p{color: #333;line-height: .4rem;
            span{color: red;}
        }
    }
</style>
<script>
    import items from  '../../lib/units/item.vue'
    import item from  '../../lib/units/listItem.vue'
    import img1 from '../../img/setting-1.png'
    import img2 from '../../img/setting-2.png'
    import img3 from '../../img/setting-3.png'
    import img4 from '../../img/setting-4.png'
    import img5 from '../../img/setting-6.png'
    export default {
        data () {
            return {
                list:[
                    {title:'img1',img:img1},
                    {title:'img2',img:img2},
                    {title:'img3',img:img3},
                    {title:'img4',img:img4},
                    {title:'img5',img:img5},
                ]
            }
        },
        computed: {},
        watch: {},
        methods: {
            deleted(item){
                this.list.splice(item,1)
            }
        },
        created(){},
        components: {items,item}
    }
</script>
