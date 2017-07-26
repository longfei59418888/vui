<template>
    <div>
       <scroller imgload="1">
           <div style="font-size: 14px;color: #666;padding: 30px;">
               <p>import imgLoad from './lib/units/imgLoad/index.js'</p><br/>
               <p>Vue.use(imgLoad);</p><br/>
                <p>scroller 上面加上属性 imgload=true</p><br/>
                <p>img 上面加上属性 v-imgload="item.img"</p><br/>
           </div>
           <div style="padding: 30px;"><span @click="change" style="padding: 10px;border: 1px solid #ccc;border-radius: 5px;">change</span></div>
           <ul>
               <li style="margin: 30px;">
                   <img style="width: 100%;" :src="list[0].img" alt="">
                   <p style="font-size: 50px;">{{list[0].name}}</p>
               </li>
               <li v-for="item in list" style="margin: 30px;">
                   <img v-imgload="item.img" style="width: 100%;" src="" alt="">
                   <p style="font-size: 50px;">{{item.name}}</p>
               </li>
           </ul>
           <items>
               <img style="width: 100%;" v-imgload="list[0].img" src="" alt="">
           </items>
       </scroller>
    </div>
</template>
<script>
    import items from '../../lib/units/item.vue'
    import scroller from '../../lib/units/scroller'
    export default {
        data () {
            return {
                list:[
                    {name:'name1',img:'http://test.365gl.com:888/gl_agent/201405/20140122094203102.jpg'},
                    {name:'name1',img:'http://test.365gl.com:888//gl_agent/201603/1000001000467_2399.jpg'},
                    {name:'name1',img:'http://test.365gl.com:888//gl_agent/201603/1000001000423_7073.jpg'},
                    {name:'name1',img:'https://gl365dev.oss-cn-shenzhen.aliyuncs.com/merchant/gl_24_agent/profile_1500263320929.jpg'},
                    {name:'name1',img:'http://test.365gl.com:888//gl_agent/201603/1000011000122_356.jpg'},
                    {name:'name1',img:'http://test.365gl.com:888//gl_agent/201603/1000001000465_5315.jpg'},
                    {name:'name1',img:'http://test.365gl.com:888//gl_agent/201606/01101701_3977agentmain_6264.jpg'},
                ]
            }
        },
        computed: {},
        watch: {},
        methods: {
            change(){
                this.list.reverse();
            }
        },
        created(){

        },
        components: {scroller,items}
    }
</script>
