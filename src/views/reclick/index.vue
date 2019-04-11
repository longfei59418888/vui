<template>
    <div>
        <p v-reclick="dothing.bind(this,'2s')" gapTime="2000">每次执行事件的间隔 2 s</p>
        <p v-reclick="dothing.bind(this,'5s')" gapTime=5000>每次执行事件的间隔 5 s</p>
        <p v-reclick="dothing" gapTime=1000>每次执行事件的间隔 1 s</p>
        <div class="info" style="width: 80%;margin: 100px auto 0;color: #666;">
            <h5>v-reclick </h5>
            <p><span>value</span>：函数</p>
            <p><span>gapTime</span>：间隙 2000</p>
            <p><span>2s的时候</span>：dothing.bind(this,'参数')</p>
        </div>
    </div>
</template>

<script>
    import reclick from '../../lib/units/reclick'

    export default {
        name: "reclick",
        directives: {
            reclick
        },
        methods: {
            dothing(type) {
                console.log(type)
            }
        }
    }
</script>

<style scoped lang="scss">
    p {
        margin-top: 20px;
    }

    .info {
        p {
            font-size: .30rem;
            span {
                color: #D33C33;
            }
        }
    }

</style>