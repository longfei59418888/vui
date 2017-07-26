<template>
    <div class="action-sheet">
        <scroller>
            <div style="width: 80%;margin: 100px auto 0;font-size: .32rem;text-align: center;color: #666;">
                <headImage
                        @success="changeHead3"
                ><img  :src="url3" alt=""><br/>
                <p>点击修改图片</p></headImage>
                <br/>
                <hr/>
                <br/>
                <headImage
                        isHead="true"
                        @success="changeHead"
                ><img style="border-radius: 100%;" :src="url1" alt=""><br/>
                    <p>点击修改图片(头像)</p></headImage>
                <br/>
                <hr/>
                <br/>
                <headImage
                        @success="changeHead2"
                        width="200"
                        height="100"
                ><img :src="url2" alt=""><br/>
                    <p>点击修改图片(设置大小)</p></headImage>
            </div>
            <div class="info" style="width: 80%;margin: 100px auto 0;color: #666;">
                <h5>headImage：</h5>
                <p><span>success</span>：裁剪头回调函数(data[url,blob])</p>
                <p><span>width</span>：裁剪框宽</p>
                <p><span>height</span>：裁剪框高</p>
                <p><span>isHead</span>：是否是头像裁剪</p>
            </div>
            <div style="height: 100px;"></div>
        </scroller>
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
    import scroller from '../../lib/units/scroller'
    import headImage from '../../lib/units/upload/button.vue'
    export default {
        data () {
            return {
                url1:'https://www.baidu.com/img/baidu_jgylogo3.gif',
                url3:'https://www.baidu.com/img/baidu_jgylogo3.gif',
                url2:'https://www.baidu.com/img/baidu_jgylogo3.gif',
            }
        },
        computed: {},
        watch: {},
        methods: {
            changeHead(data){
                this.url1=data.src
                console.log(data)
            },
            changeHead2(data){
                this.url2=data.src
            },
            changeHead3(data){
                this.url3=data.src
            }
        },
        created(){
            this.$store.commit('setInfoTitle','Upload')
        },
        components: {scroller,headImage}
    }
</script>
