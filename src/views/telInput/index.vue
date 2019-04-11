<template>
    <div>
        <p><tel-input v-model="tel"/></p>
        <p><tel-input v-model="tel2"/></p>
        <p><tel-input v-model="tel3"/></p>
        <div class="info" style="width: 80%;margin: 100px auto 0;color: #666;">
            <h5>tel-input </h5>
            <p><span>v-model</span>：value</p>
            <p>
                会自动格式化
                监听输入时候也会控制
            </p>
        </div>
    </div>
</template>

<script>
    import telInput from '../../lib/units/telInput'
    export default {
        name: "index",
        data:()=>{
            return {
                tel :'18545854585',
                tel2:'1854545',
                tel3:'18565458545454'
            }
        },
        components:{
            telInput
        }
    }
</script>
<style scoped="" lang="scss">
    p{margin-top: 20px;}
    .action-sheet{
        .list{margin-left: .5rem;}
        .info{
            p{font-size: .30rem;
                span{color: #D33C33;}
            }
        }
    }
</style>