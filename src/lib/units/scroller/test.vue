<template>
   <div style="width: 100%">
       <div style="max-width: 640px;margin: 0 auto;height: 500px;">
           <scroller
               ref="scroller"
               touch="fa"
               @refresh="test"
               @infinite="more"
               @scroll="scroll"
               @end="end"
           >
               <p @click="test" style="line-height: 50px;" v-for="item in sum">safasdfsa{{item}}</p>
           </scroller>
       </div>
       <!--<div style="height: 50px">-->
           <!--<scroller-->
               <!--direction="x"-->
               <!--touch='pc'-->
           <!--&gt;-->
               <!--<div style="overflow: hidden"  :style="{width: (sum*100+'px')}">-->
                   <!--<p style="width: 100px;float: left" v-for="item in sum">safasdfsa{{item}}</p>-->
               <!--</div>-->
           <!--</scroller>-->
       <!--</div>-->
       <div><span @click="back">sdfsd</span></div>
   </div>
</template>
<script>
    import scroller from './index.vue'
    export default {
        data () {
            return {
                sum:0
            }
        },
        computed: {},
        watch: {},
        methods: {
            end(e,info){},
            scroll(e,info){
            },
            more(){
                console.log('more')
                var scroller = this.$refs.scroller
                var _ =  this;
                setTimeout(function () {
                    _.sum=parseInt(_.sum)+2
                    if(_.sum>16)   scroller.finishInfinite(true)
                    else   scroller.finishInfinite(false)
                },2000)
            },
            test(){
                var scroller = this.$refs.scroller
                this.sum=5
               setTimeout(function () {
                   scroller.finishRefresh();
               },2000)
            },
            back(){
                this.sum=parseInt(Math.random()*100)
//                this.sum=30
            }
        },
        created(){

        },
        components: {scroller}
    }
</script>
