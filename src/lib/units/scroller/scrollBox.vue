<template>
   <div>
       <slot></slot>
   </div>
</template>
<script>
    export default {
        data () {
            return {}
        },
        computed: {},
        watch: {},
        methods: {},
        created(){},
        updated(){
            console.log('updated')
        },
        components: {}
    }
</script>
