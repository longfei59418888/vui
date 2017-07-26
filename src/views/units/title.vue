<template>
    <div class="title_title common_display_flex">
        <div v-if="img" class="img">
            <img :src="img" alt="">
        </div>
        <div class="common-flex-mixin-middle">{{name}}</div>
    </div>
</template>
<script>
    export default {
        props:['name','img'],
        data () {
            return {}
        },
        computed: {},
        watch: {},
        methods: {
            back(){
                this.$router.back();
            }
        },
        created(){

        },
        components: {}
    }
</script>
<style scoped="" lang="scss">
    .title_title{height: .8rem;padding: 0 .15rem;font-size: .28rem;margin: 0 .2rem;font-weight: 600;}
</style>
