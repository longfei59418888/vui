<template>
    <div class="header_header common_display_flex ">
        <div @click="back" class="back common-flex-mixin-center" >
            <svg t="1500285898891" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4019"
                width="24" height="24"><path d="M670.676929 777.592984 403.62778 513.362021l265.320785-268.146133c11.776208-11.775184 11.734252-30.908964-0.091074-42.73429l-0.001023 0c-11.825326-11.82635-30.958082-11.867282-42.72815 2.930749L343.100242 488.440421c-3.817955 4.273327-8.205892 9.321296-8.933463 12.045337-4.470825 11.112082-2.232854 24.765033 6.710842 35.987632l286.98213 286.98213c11.875468 8.847505 31.096229 8.893554 42.922578-2.932796C682.606633 808.696376 682.560584 789.476639 670.676929 777.592984z" p-id="4020" fill="#ffffff">
        </path></svg></div>
        <div class="title common-flex-mixin-center"><span>{{title}}</span></div>
        <div class="back"></div>
    </div>
</template>
<script>
    export default {
        data () {
            return {}
        },
        computed: {
            title(){
                return this.$store.state.info.title
            }
        },
        watch: {},
        methods: {
            back(){
                this.$router.go(-1);
            }
        },
        created(){

        },
        components: {}
    }
</script>
<style scoped="" lang="scss">
    .header_header{line-height: .9rem;font-size: .3rem;color: #fff;background-color: #D33C33;
        .back{width: .9rem;}
        .title{flex: 1}
    }
</style>
