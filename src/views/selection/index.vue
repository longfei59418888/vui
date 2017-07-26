<template>
    <div>
        <scroller ref="scroller">
            <div class="select_select">
                <div style="height: 1px"></div>
                <div class="title"><name name="带图标选项"></name></div>
                <div class="list">
                    <item :to="{name:'selection_info'}" title="不带图标" bottom="1"></item>
                    <item :to="{name:'selection_info'}" :imgurl="img3" title="带图标" bottom="1"></item>
                    <item :to="{name:'selection_sele'}" :imgurl="img4" title="默认标识" bottom="1" :dft="defaultTitle"></item>
                    <item :imgurl="img2" title="单选(选中)" bottom="1" ischoose="1"></item>
                    <item :imgurl="img3" title="单选(未选中)" bottom="1" ischoose="2"></item>
                </div>
                <div class="list-item">
                    <div class="title"><name name="多选"></name></div>
                    <div v-for="(items,key) in list">
                        <item bottom="true" :title="items.name+'--'+(items.info?items.info:'')" @change="change" :index="key" :check="key==index?1:2"></item>
                    </div>
                </div>
            </div>
        </scroller>
    </div>

</template>
<script>
    import name from '../units/title.vue'
    import img1 from '../../img/setting-1.png'
    import img2 from '../../img/setting-2.png'
    import img3 from '../../img/setting-3.png'
    import img4 from '../../img/setting-4.png'
    import img5 from '../../img/setting-6.png'
    import scroller from '../../lib/units/scroller/index.vue'
    import item from '../../lib/units/listItem.vue'
    export default {
        data () {
            return {img1,img2,img3,img4,img5,}
        },
        computed: {
            list(){
               return this.$store.state.data.selectionControls.list
            },
            index(){
                return this.$store.state.data.selectionControls.info.index
            },
            defaultTitle(){
                return this.$store.state.data.selectionControls.list[this.$store.state.data.selectionControls.info.index].name
            }
        },
        watch: {},
        methods: {
            change(i){
                this.$store.commit('setSelectionControlsIndex',i);
            }
        },
        created(){
            this.$store.commit('setInfoTitle','Selection Controls')
        },
        components: {name,item,scroller}
    }
</script>
<style scoped="" lang="scss">
    .select_select{background-color: #EDEEEF;
        .title{background-color: #fff;border-bottom: 1px solid #eee;}
        .list{background-color: #fff;}
        .list-item{background-color: #fff;margin-top: .3rem;}
    }


</style>
