<template>
    <div class="action-sheet">

            <div style="width: 80%;margin: 100px auto 0;font-size: .32rem;text-align: center;color: #666;">
                <p style="line-height: .8rem;display: inline-block;border: 1px solid #ccc;border-radius: .1rem;padding: 0 .4rem;
            box-shadow: 0 0 3px #ddd;margin: 0;margin-top: .3rem;" @click="datePicker()">datePicker</p><br/>
                <p style="line-height: .8rem;display: inline-block;border: 1px solid #ccc;border-radius: .1rem;padding: 0 .4rem;
            box-shadow: 0 0 3px #ddd;margin: 0;margin-top: .2rem;" @click="timePicker()">timePicker</p>
            </div>
            <div class="info" style="width: 80%;margin: 100px auto 0;color: #666;">
                <h5>datePicker:</h5>
                <p><span>start</span>：开始时间</p>
                <p><span>end</span>：结束时间</p>
                <p><span>current</span>：当前时间</p>
                <p><span>isTime(此处为false则datePicker)</span>：是否为时间选择(默认为false)</p>
                <p><span>handle</span>：确认回调函数(返回日期)</p>
                <h5>timePicker:</h5>
                <p><span>isTime(timePicker)</span>：是否为时间选择(默认为false)</p>
                <p><span>handle</span>：确认回调函数(返回时间)</p>
            </div>
            <div style="height: 100px;"></div>

    </div>
</template>
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
<script>
    import {datePicker} from '../../lib/units/datepicker_m/index'
    export default {
        data () {
            return {}
        },
        computed: {},
        watch: {},
        methods: {
            datePicker(){
                datePicker({
                    start:'1990-05-05',
                    end:'2020-05-25',
                    current:'',
                    handle(date){
                        alert(date)
                    }
                })
            },
            timePicker(){
                datePicker({
                    isTime:true,
                    handle(date){
                        alert(date)
                    }
                })
            }
        },
        created(){

        },
        components: {}
    }
</script>
