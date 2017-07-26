<template>
 <div>
     <scroller ref="scroller">
         <div class="item-list">
             <div class="item-box"><item :to="{name:'selection'}" title="Selection Controls (radio,select...)" bottom="true"></item></div>
             <div class="item-box"><item :to="{name:'action-sheet'}" title="Action Sheet (下弹框)" bottom="true"></item></div>
             <div class="item-box"><item :to="{name:'toast'}" title="Toast (提示框)" bottom="true"></item></div>
             <div class="item-box"><item :to="{name:'popup'}" title="Popup (Confirm,Alert)" bottom="true"></item></div>
             <div class="item-box"><item :to="{name:'list'}" title="list (item)" bottom="true"></item></div>
             <div class="item-box"><item :to="{name:'modal'}" title="Modal (弹出层)" bottom="true"></item></div>
             <div class="item-box"><item :to="{name:'scroller'}" title="Scroller (滚动框)" bottom="true"></item></div>
             <div class="item-box"><item :to="{name:'refresh'}" title="Refresh (下拉刷新)" bottom="true"></item></div>
             <div class="item-box"><item :to="{name:'infinite'}" title="Infinite (无限滚动加载)" bottom="true"></item></div>
             <div class="item-box"><item :to="{name:'imgload'}" title="Imgload (图片懒加载)" bottom="true"></item></div>
             <div class="item-box"><item :to="{name:'smooth'}" title="SmoothPicker (滑动选择)" bottom="true"></item></div>
             <div class="item-box"><item :to="{name:'time'}" title="Time(date)Picker (时间选择)" bottom="true"></item></div>
             <div class="item-box"><item :to="{name:'upload'}" title="Upload (图片裁剪及其上传)" bottom="true"></item></div>

         </div>
     </scroller>
 </div>
</template>
<script>
    import item from '../../lib/units/listItem.vue'
    import scroller from '../../lib/units/scroller/index.vue'
    export default {
        data () {
            return {
            }
        },
        computed: {},
        watch: {},
        methods: {
            back(){
                this.$router.back();
            }
        },
        created(){
            this.$store.commit('setInfoTitle','首页')
        },
        components: {item,scroller}
    }
</script>
<style scoped lang="scss">
    .item-list{margin-top: .2rem;border-top: 1px solid #eee;
        .item-box{margin: 0 .1rem 0 .15rem;}
    }

</style>
