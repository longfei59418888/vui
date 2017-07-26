<template>
    <div>
        <heade></heade>
        <transition :name="setTransitionName">
            <router-view class="child-view home-box"></router-view>
        </transition>
    </div>
</template>
<script>
    import heade from '../units/header.vue'
    export default {
        data () {
            return {setTransitionName:''}
        },
        computed: {},
        watch: {
            '$route' (to, from) {
                let isBack = this.$router.isBack
                if (isBack=='right') {
                    this.setTransitionName='slide-right'
                } else if(isBack=='left'){
                    this.setTransitionName='slide-left'
                }else {
                    this.setTransitionName='slide-right'
                }
                // 做完回退动画后，要设置成前进动画，否则下次打开页面动画将还是回退
                this.$router.isBack = false
            }
        },
        methods: {},
        updated(){
        },
        created(){
        },
        components: {heade}
    }
</script>
<style scoped lang="scss">
    .home-box{top: .9rem;bottom: 0;}
</style>
