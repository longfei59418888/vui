<template>
    <div class="info_controls_info">
        <name name="Selection controls"></name>
        <div class="info">
            <h5>常规item</h5>
            <h6>属性：</h6>
            <p><span>imgurl</span> <code>string</code>: 图标</p>
            <p><span>title</span> <code>string</code>: 标题</p>
            <p><span>bottom</span> <code>boolean</code>: 是否有下划线</p>
            <p><span>dft</span> <code>string</code>: 默认选中项</p>
            <h5>单选item</h5>
            <p><span>ischoose</span> <code>boolean</code>: 单选</p>
            <h5>多选item</h5>
            <p><span>check</span> <code>1/2</code>:是否选中(1选中，2未选中)</p>
            <p><span>index</span> <code>number</code>:当前选中的index</p>
            <h5>连接item</h5>
            <p><span>to</span> <code>object</code>:需要跳转页面的Object</p>
        </div>

    </div>
</template>
<script>
    import name from '../units/title.vue'
    export default {
        data () {return {}},
        computed: {},
        watch: {},
        methods: {
            back(){
                this.$router.back();
            }
        },
        created(){

        },
        components: {name}
    }
</script>
<style scoped="" lang="scss">
    .info_controls_info{
        .info{padding: 0 .3rem;
            p{margin: .1rem 0;font-size: .30rem;}
            code{margin: 0 .2rem;}
            span{color: #D33C33;}
        }
    }
</style>
