<template>
    <div>
       <div style="width: 200px;margin: 150px;">
           <datepicker v-model="date"></datepicker>
       </div>
    </div>
</template>
<script>
    import Datepicker from './Datepicker.vue'
    export default {
        data () {
            return {
                date: ['2016-10-16','2016-11-20']
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
        components: {
            Datepicker
        }
    }
</script>
