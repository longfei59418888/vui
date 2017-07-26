<template>
    <div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                styles: require('../style/scss/index.scss'),
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

        },
        components: {}
    }
</script>
