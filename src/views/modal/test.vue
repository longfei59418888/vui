<template>
    <div style="padding: 50px;">
        <p @click="execMethod('remove',this,'name','asdfa')">关闭</p>
        <p @click="execMethod('dotest')">{{scope.test}}</p>
    </div>
</template>
<script>
    export default {
        props:['scope'],
        data () {
            return {}
        },
        computed: {},
        watch: {},
        methods: {
            execMethod(method){
                this.$emit('exec',method,...Array.from(arguments).slice(1))
            },
        },
        created(){
        },
        components: {
        }
    }
</script>
