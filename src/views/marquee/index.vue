<template>
    <div style="font-size: 20px">
        <Marquee>这里的数据是超过了我们设置的宽度，会自动滚动，一直循环</Marquee>
        <Marquee>这里是没有超过的..</Marquee>
        <div class="info" style="width: 80%;margin: 100px auto 0;color: #666;">
            <h5>Marquee </h5>
            <p><span>内容</span>：直接添加</p>
        </div>
    </div>
</template>

<script>
    import Marquee from '../../lib/units/marquee'
    export default {
        name: "index",
        components:{
            Marquee
        }
    }
</script>

<style scoped="" lang="scss">
    .action-sheet{
        .list{margin-left: .5rem;}
        .info{
            p{font-size: .30rem;
                span{color: #D33C33;}
            }
        }
    }
</style>