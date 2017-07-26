<template>
    <div>
        <bg :show="isShow" :dec="direction" style="background-color: #efefef">
            <box @exec="execMethod" :scope="scope"></box>
        </bg>
    </div>
</template>
<script>
    import bg from './bg.vue'
    import { isFunction } from '../utils'
    export default {
        data () {
            return {isShow:false, direction:'', scope:{}}
        },
        computed: {},
        watch: {},
        methods: {
            execMethod(method,array){
                if(isFunction(this[method])){
                    this[method](...array)
                }else{
                    if(isFunction(this.scope[method])){
                        this.scope[method](...[].concat(array))
                    }else {
                        console.error(method,'该函数不存在或者不是函数..')
                    }
                }

            }
        },
        created(){},
        components: {
            bg,
            box:''
        }
    }
</script>
