<template>
    <div class="select_select">
        <div style="height: 1px"></div>
        <div class="list-item">
            <div class="title"><name name="多选"></name></div>
            <div v-for="(items,key) in selectionControls.list">
                <item bottom="true" :title="items.name+'--'+(items.info?items.info:'')"
                      @change="change" :index="key" :check="key==selectionControls.info.index?1:2"></item>
            </div>
        </div>
    </div>
</template>
<script>
    import name from '../units/title.vue'
    import img1 from '../../img/setting-1.png'
    import img2 from '../../img/setting-2.png'
    import img3 from '../../img/setting-3.png'
    import img4 from '../../img/setting-4.png'
    import img5 from '../../img/setting-6.png'
    import item from '../../lib/units/listItem.vue'
    export default {
        data () {
            return {}
        },
        computed: {
            selectionControls(){
                return this.$store.state.data.selectionControls
            }
        },
        watch: {},
        methods: {
            change(i){
                this.$store.commit('setSelectionControlsIndex',i);
                this.$router.back();
            }
        },
        created(){

        },
        components: {name,item}
    }
</script>
<style scoped="" lang="scss">
    .select_select{background-color: #EDEEEF;
        .title{background-color: #fff;border-bottom: 1px solid #eee;}
        .list{background-color: #fff;}
        .list-item{background-color: #fff;margin-top: .3rem;}
    }


</style>
