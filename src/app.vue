<template>
    <div>
        <router-view class="child-view app-box"></router-view>
    </div>
</template>
<script>
    export default {
        data () {
            return {}
        },
        computed:{
        },
        watch: {}
    }
</script>
<style scoped="" lang="scss">
    .app-box{bottom: 0;top: 0;}
</style>

