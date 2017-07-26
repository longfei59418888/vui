<template>
    <div class="common_choose-box">
        <div class="common_choose-box_option">
            <span>关闭</span>
            <span @click="confirm">确认</span>
        </div>
        <div class="common_choose-box_list-box">
            <smooth @choose="choose" :list="list"></smooth>
        </div>
    </div>
</template>
<style scoped="" lang="scss">
    .common_choose-box{
        .common_choose-box_option{  height: .7rem;padding: 0 .2rem;padding-top: .125rem;
            span{border: 1px solid #ddd;background-color: #fff;display: inline-block;line-height: .45rem;padding: 0 .2rem;
                border-radius: .1rem;
                &:last-child{float: right;}
            }
        }
    }
</style>
<script>
    import smooth from '../smoothPicker/index.vue'
    export default {
        props:['end','start','current'],
        data () {
            return {
                list:[]
            }
        },
        computed: {},
        watch: {
            start(){
                this.starts = this.start.split('-')
                this.setList()},
            end(){
                this.ends = this.end.split('-')
                this.setList()},
            current(){
                this.currents = this.current.split('-')
                this.setList()}
        },
        methods: {
            confirm(){
                this.$emit('choose',this.currents.join('-'))
            },
            setList(){
                var date = this.setDateList()
                this.list=[
                    {
                        flex:1,
                        item:this.currents[0],
                        name:'year',
                        list:date.year,
                    },
                    {
                        flex:1,
                        item:this.currents[1],
                        name:'month',
                        list:date.month,
                    },
                    {
                        flex:1,
                        item:this.currents[2],
                        name:'day',
                        list:date.day,
                    },
                ]
            },
            choose(name,item){
                var current = this.current.split('-'),currentYear = parseInt(current[0]),currentMonth=parseInt(current[0]),currentDay=parseInt(current[2])
                if(item.name=='month'){
                    this.currents[1]=name
                    var date = this.setDateList()
                    this.list[2]= Object.assign(this.list[2],{list:date.day,item:this.currents[2]})
                }else if(item.name=='day'){
                    this.currents[2]=name
                    this.setDateList()
                }else {
                    this.currents[0]=name
                    var date = this.setDateList()
                    this.list[1]= Object.assign(this.list[1],{list:date.month,item:this.currents[1]})
                    this.list[2]= Object.assign(this.list[2],{list:date.day,item:this.currents[2]})
                }

            },
            getDaysInOneMonth(year, month){
                var  day = new Date(year,month,0);
                return day.getDate();
            },
            setDateList(){
                var date = {
                    year:{},
                    month:{},
                    day:{},
                }
                var current = this.currents,start = this.starts,end = this.ends
                date.year.start = parseInt(start[0]), date.year.end = parseInt(end[0])
                date.month.start = 1, date.month.end = 12
                date.day.start = 1, date.day.end = this.getDaysInOneMonth(current[0],current[1])
                if(parseInt(current[0])==parseInt(start[0])) {
                    date.month.start=parseInt(start[1])
                    if(parseInt(current[1]) == parseInt(start[1])){
                        date.day.start=parseInt(start[2])
                    }
                }
                if(parseInt(current[0])==parseInt(end[0])) {
                    date.month.end=parseInt(end[1])
                    if(parseInt(current[1]) == parseInt(end[1])){
                        date.day.end=parseInt(end[2])
                    }
                }

                var day = [];for (var i=date.day.start;i<date.day.end+1;i++){day.push(i>9?i+'':'0'+i)}
                var month = [];for (var i=date.month.start;i<date.month.end+1;i++){month.push(i>9?i+'':'0'+i)}
                var year = [];for (var i=date.year.start;i<date.year.end+1;i++){year.push(i+'')}
                return {
                    day,month,year
                }
            }
        },
        created(){
            this.starts = this.start.split('-')
            this.currents = this.current.split('-')
            this.ends = this.end.split('-')
            this.setList()
        },
        components: {smooth}
    }
</script>
