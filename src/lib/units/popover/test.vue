<template>
    <div style="margin: 100px;">
        <popover
            :list="list"
            @option="back"
            >
            <div style="width: 100px;border: 1px solid #eee;">{{test}}</div>
        </popover>
    </div>
</template>
<script>
    import popover from './index.vue'
    export default {
        data () {
            return {
                info:'valu2',
                list:[
                    {name:'name1',value:'valu2',func:''},
                    {name:'name2',value:'va3lue',func:''},
                    {name:'name2',value:'va3lue',func:''},
                    {name:'name2',value:'va3lue',func:''},
                    {name:'name2',value:'va3lue',func:''},
                    {name:'name2',value:'va3lue',func:''},
                    {name:'name2',value:'va3lue',func:''},
                    {name:'name2',value:'va3lue',func:''},
                    {name:'name3',value:'va4lue',func:''},
                    {name:'name4',value:'va5lue',func:''},
                    {name:'name5',value:'va6lue',func:''},
                ]
            }
        },
        computed: {},
        watch: {},
        methods: {
            back(item){
                this.info = item.value
            }
        },
        created(){

        },
        components: {popover}
    }
</script>
