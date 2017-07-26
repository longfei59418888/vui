<template>
    <div ref="smoothPicker" class="smooth_picker">
        <item @end="end" v-for="(item,key) in list" :key="key" :item="item" :itemHeight="itemHeight"></item>
    </div>
</template>
<style scoped="" lang="scss">
    .smooth_picker{  height: 160px;width: 100%;display: flex;position: relative;overflow: hidden; background-color: #fff; }
</style>
<script>
    import item from './item.vue'
    export default {
        props:['list'],
        data () {
            return {
                itemHeight:'32'
            }
        },
        computed: {},
        watch: {},
        filters:{},
        methods: {
            end(c_item,item){
                this.$emit('choose', c_item,item)
            }
        },
        created(){},
        mounted(){
            var _ = this;

            setTimeout(function () {
                _.smoothHeight = _.$refs.smoothPicker?_.$refs.smoothPicker.offsetHeight:0
                _.itemHeight = _.smoothHeight/5
            },50)
        },
        components: {item}
    }
</script>
