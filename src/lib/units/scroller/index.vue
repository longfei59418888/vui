<template>
    <div class="scroller_comment_box" ref="scrollBox" style="position: relative;height: 100%;width: 100%;overflow: hidden">
        <div ref="box" class="scroll-box">
            <div ref="refresh" class="refresh" >
                <div class="refresh1">
                    <span style="margin-top: 5px;display: inline-block;">
                        <svg t="1499912528740" class="icon"
                           style="fill: #666;" viewBox="0 0 1000 1000" version="1.1"
                           xmlns="http://www.w3.org/2000/svg" p-id="6361"
                           width="24" height="24">
                    <path d="M167.312 606.688l312.5 312.5c24.406 24.406 63.969 24.406 88.376 0l312.5-312.5c24.406-24.406 24.406-63.969 0-88.376-24.406-24.406-63.969-24.406-88.376 0l-205.813 205.813v-599.125c0-34.531-27.969-62.5-62.5-62.5s-62.5 27.969-62.5 62.5v599.125l-205.813-205.813c-12.188-12.188-28.188-18.313-44.188-18.313s-32 6.095-44.188 18.313c-24.406 24.406-24.406 63.969 0 88.376z" p-id="6362"></path>
                </svg></span><br/>下拉刷新...</div>
                <div class="refresh2">
                    <span style="display: inline-block;">
                        <svg t="1499914863069" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7819"
                             xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30">
<path d="M544.523168 200.480029c0 17.963247-14.56142 32.526665-32.525666 32.526665-17.964246 0-32.526665-14.563418-32.526665-32.526665V32.527664C479.470837 14.564417 494.034255 0 511.998501 0c17.963247 0 32.525666 14.564417 32.525666 32.527664v167.952365zM544.523168 991.475333c0 17.962248-14.56142 32.524667-32.525666 32.524667-17.964246 0-32.526665-14.562419-32.526665-32.524667V823.522968c0-17.964246 14.562419-32.530661 32.526665-32.530661 17.963247 0 32.525666 14.565416 32.525666 32.530661V991.475333zM384.408494 225.952273c8.982623 15.556492 3.652594 35.450938-11.905896 44.433561s-35.450938 3.650595-44.430564-11.905897l-83.976682-145.453348c-8.982623-15.555493-3.653593-35.450938 11.905897-44.432561 15.553495-8.981624 35.447941-3.650595 44.430563 11.906895l83.976682 145.45135zM779.905647 910.973411c8.983622 15.555493 3.652594 35.449939-11.904898 44.432561-15.55849 8.982623-35.44894 3.648597-44.431562-11.904897l-83.97868-145.450351c-8.981624-15.55849-3.652594-35.452936 11.906895-44.435558 15.556492-8.982623 35.446942-3.651594 44.429565 11.904897l83.97868 145.453348zM258.479937 328.069037c15.555493 8.981624 20.88752 28.875071 11.905897 44.433561-8.982623 15.55849-28.877069 20.886521-44.430564 11.903898L80.502922 300.428815c-15.556492-8.980625-20.891516-28.873072-11.905897-44.432562 8.979625-15.553495 28.874072-20.885522 44.430564-11.902899l145.452348 83.975683zM943.502074 723.568188c15.552495 8.979625 20.88752 28.871074 11.905896 44.431562-8.981624 15.557491-28.87607 20.881526-44.429564 11.904898l-145.456345-83.976682c-15.559489-8.982623-20.888519-28.874072-11.906895-44.433561 8.981624-15.556492 28.877069-20.885522 44.430563-11.9019l145.456345 83.975683z" fill="#ADADAC" p-id="7820"></path><path d="M200.480029 479.469838c17.962248 0 32.526665 14.563418 32.526665 32.527664s-14.565416 32.527664-32.524667 32.524667H32.527664C14.565416 544.52117 0 529.961749 0 511.995504c0-17.96025 14.563418-32.525666 32.524667-32.525666h167.955362z" fill="#FFFFFF" p-id="7821"></path><path d="M991.476332 479.469838c17.96025 0 32.525666 14.563418 32.525666 32.527664s-14.565416 32.524667-32.525666 32.524667H823.524966c-17.97124 0-32.532659-14.559422-32.532659-32.524667 0-17.964246 14.566415-32.527664 32.526665-32.524667l167.95736-0.002997z" fill="#ADADAC" p-id="7822"></path><path d="M225.950275 639.58751c15.55849-8.981624 35.452936-3.652594 44.435559 11.905896s3.647598 35.451937-11.905897 44.429564l-145.453348 83.977681c-15.555493 8.981624-35.449939 3.652594-44.432561-11.905896-8.979625-15.553495-3.652594-35.447941 11.905896-44.430563l145.450351-83.976682z" fill="#E3E3E3" p-id="7823"></path><path d="M910.972411 244.089358c15.55849-8.980625 35.452936-3.651594 44.435559 11.905896 8.981624 15.559489 3.642603 35.44894-11.905896 44.430564L798.045729 384.4025c-15.55849 8.982623-35.447941 3.652594-44.430563-11.905897-8.981624-15.554494-3.652594-35.44894 11.906895-44.429564l145.45035-83.977681z" fill="#ADADAC" p-id="7824"></path><path d="M328.067039 765.515067c8.984621-15.555493 28.879067-20.88752 44.435559-11.905896 15.55849 8.982623 20.885522 28.87607 11.902899 44.430563l-83.976682 145.453348c-8.982623 15.555493-28.874072 20.888519-44.433561 11.905896-15.553495-8.979625-20.88752-28.874072-11.902899-44.428565l83.974684-145.455346z" fill="#CACACA" p-id="7825"></path><path d="M723.565191 80.49393c8.981624-15.555493 28.87607-20.88752 44.435558-11.905896 15.557491 8.982623 20.882525 28.87607 11.904898 44.430563l-83.97868 145.452349c-8.987618 15.560488-28.87607 20.888519-44.435559 11.905896-15.554494-8.979625-20.883524-28.874072-11.9019-44.429564L723.565191 80.49393z" fill="#ADADAC" p-id="7826">
</path></svg></span></div>
            </div>
            <slot></slot>
            <div ref="infinite" class="infinite" style="line-height: 60px;text-align: center;width: 100%;height: 60px;">
                <span style="display: inline-block;">
                        <svg t="1499914863069" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7819"
                             xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30">
                <path d="M544.523168 200.480029c0 17.963247-14.56142 32.526665-32.525666 32.526665-17.964246 0-32.526665-14.563418-32.526665-32.526665V32.527664C479.470837 14.564417 494.034255 0 511.998501 0c17.963247 0 32.525666 14.564417 32.525666 32.527664v167.952365zM544.523168 991.475333c0 17.962248-14.56142 32.524667-32.525666 32.524667-17.964246 0-32.526665-14.562419-32.526665-32.524667V823.522968c0-17.964246 14.562419-32.530661 32.526665-32.530661 17.963247 0 32.525666 14.565416 32.525666 32.530661V991.475333zM384.408494 225.952273c8.982623 15.556492 3.652594 35.450938-11.905896 44.433561s-35.450938 3.650595-44.430564-11.905897l-83.976682-145.453348c-8.982623-15.555493-3.653593-35.450938 11.905897-44.432561 15.553495-8.981624 35.447941-3.650595 44.430563 11.906895l83.976682 145.45135zM779.905647 910.973411c8.983622 15.555493 3.652594 35.449939-11.904898 44.432561-15.55849 8.982623-35.44894 3.648597-44.431562-11.904897l-83.97868-145.450351c-8.981624-15.55849-3.652594-35.452936 11.906895-44.435558 15.556492-8.982623 35.446942-3.651594 44.429565 11.904897l83.97868 145.453348zM258.479937 328.069037c15.555493 8.981624 20.88752 28.875071 11.905897 44.433561-8.982623 15.55849-28.877069 20.886521-44.430564 11.903898L80.502922 300.428815c-15.556492-8.980625-20.891516-28.873072-11.905897-44.432562 8.979625-15.553495 28.874072-20.885522 44.430564-11.902899l145.452348 83.975683zM943.502074 723.568188c15.552495 8.979625 20.88752 28.871074 11.905896 44.431562-8.981624 15.557491-28.87607 20.881526-44.429564 11.904898l-145.456345-83.976682c-15.559489-8.982623-20.888519-28.874072-11.906895-44.433561 8.981624-15.556492 28.877069-20.885522 44.430563-11.9019l145.456345 83.975683z" fill="#ADADAC" p-id="7820"></path><path d="M200.480029 479.469838c17.962248 0 32.526665 14.563418 32.526665 32.527664s-14.565416 32.527664-32.524667 32.524667H32.527664C14.565416 544.52117 0 529.961749 0 511.995504c0-17.96025 14.563418-32.525666 32.524667-32.525666h167.955362z" fill="#FFFFFF" p-id="7821"></path><path d="M991.476332 479.469838c17.96025 0 32.525666 14.563418 32.525666 32.527664s-14.565416 32.524667-32.525666 32.524667H823.524966c-17.97124 0-32.532659-14.559422-32.532659-32.524667 0-17.964246 14.566415-32.527664 32.526665-32.524667l167.95736-0.002997z" fill="#ADADAC" p-id="7822"></path><path d="M225.950275 639.58751c15.55849-8.981624 35.452936-3.652594 44.435559 11.905896s3.647598 35.451937-11.905897 44.429564l-145.453348 83.977681c-15.555493 8.981624-35.449939 3.652594-44.432561-11.905896-8.979625-15.553495-3.652594-35.447941 11.905896-44.430563l145.450351-83.976682z" fill="#E3E3E3" p-id="7823"></path><path d="M910.972411 244.089358c15.55849-8.980625 35.452936-3.651594 44.435559 11.905896 8.981624 15.559489 3.642603 35.44894-11.905896 44.430564L798.045729 384.4025c-15.55849 8.982623-35.447941 3.652594-44.430563-11.905897-8.981624-15.554494-3.652594-35.44894 11.906895-44.429564l145.45035-83.977681z" fill="#ADADAC" p-id="7824"></path><path d="M328.067039 765.515067c8.984621-15.555493 28.879067-20.88752 44.435559-11.905896 15.55849 8.982623 20.885522 28.87607 11.902899 44.430563l-83.976682 145.453348c-8.982623 15.555493-28.874072 20.888519-44.433561 11.905896-15.553495-8.979625-20.88752-28.874072-11.902899-44.428565l83.974684-145.455346z" fill="#CACACA" p-id="7825"></path><path d="M723.565191 80.49393c8.981624-15.555493 28.87607-20.88752 44.435558-11.905896 15.557491 8.982623 20.882525 28.87607 11.904898 44.430563l-83.97868 145.452349c-8.987618 15.560488-28.87607 20.888519-44.435559 11.905896-15.554494-8.979625-20.883524-28.874072-11.9019-44.429564L723.565191 80.49393z" fill="#ADADAC" p-id="7826">
                </path></svg></span>
            </div>
        </div>
        <div class="scroller-scrollbar" ref="scrollerScrollbarStyle">
            <p ref="scrollbar"><span></span></p>
        </div>
    </div>
</template>
<script>
    import {getVendorPrefix,getTranslateInfo} from '../utils'
    var vendorPrefix = getVendorPrefix()
    export default {
        props:{
            direction:{default:'y'},
            touch:{default:false},
            imgload:{default:false}
        },
        data () {
            return {
                scrollBoxStyle:{},
                dataInfo:{topHeight:60}
            }
        },
        computed: {

        },
        watch: {
        },
        methods: {
            initData(){
                this.scrollHeight = this.scrollBox.offsetHeight  //外框高
                this.scrollWidth = this.scrollBox.offsetWidth //外框宽
                this.boxHeight = this.box.offsetHeight-60-(this.hasInfinite?0:60) //滚动框高
                this.boxWidth = this.box.offsetWidth //滚动框宽
                this.scaleHeight = this.scrollHeight/this.boxHeight  //外框和滚动框比例
                this.scaleWidth = this.scrollWidth/this.boxWidth //外框和滚动框比例
            },
            scrollerScrollbarInit(){
                if(!this.hasInfinite) this.infinite.innerHTML = ''
                if(!this.hasRefresh) this.refresh.innerHTML = ''
                if(this.direction == 'x'){
                    this.box.style['height']='100%'
                    this.scrollerScrollbarStyle.style['height']='5px'
                    this.scrollerScrollbarStyle.style['width']='98%'
                    this.scrollerScrollbarStyle.style['bottom']='5px'
                    this.scrollerScrollbarStyle.style['left']='1%'
                    return}
                this.box.style['width']='100%'
                this.scrollerScrollbarStyle.style['width']='5px'
                this.scrollerScrollbarStyle.style['height']='98%'
                this.scrollerScrollbarStyle.style['right']='5px'
                this.scrollerScrollbarStyle.style['top']='1%'
            },
            wheelDeltaYs(e){
                var _ = this ;
                var c_info,info = getTranslateInfo(_.box.style[vendorPrefix+"Transform"])
                if(e.wheelDeltaY>0){
                    c_info = info.y+40
                    if(c_info>0) c_info = 0
                    _.box.style[vendorPrefix+"Transform"]='translate(0,'+c_info+'px)'
                }else {
                    c_info = info.y-40
                    if(c_info<_.scrollHeight-_.boxHeight) c_info = _.scrollHeight-_.boxHeight
                    _.box.style[vendorPrefix+"Transform"]='translate(0,'+c_info+'px)'
                }
                _.scrollbar.style.top = (-c_info/_.boxHeight*100)+'%'
            },
            wheelDeltaXs(e){
                var _ = this;
                var c_info,info = getTranslateInfo(_.box.style[vendorPrefix+"Transform"])
                if(e.wheelDeltaY>0){
                    c_info = info.x+40
                    if(c_info>0) c_info = 0
                    _.box.style[vendorPrefix+"Transform"]='translate('+c_info+'px,0)'
                }else {
                    c_info = info.x-40
                    if(c_info<_.scrollWidth-_.boxWidth) c_info = _.scrollWidth-_.boxWidth
                    _.box.style[vendorPrefix+"Transform"]='translate('+c_info+'px,0)'
                }
                _.scrollbar.style.left = (-c_info/_.boxWidth*100)+'%'
            },
            getPosition(){
                return getTranslateInfo(_.box.style[vendorPrefix+"Transform"])
            },
            compute(el, cb) {
                var _ = this;
                var rect = el.getBoundingClientRect()
                var newSrc = el.getAttribute('newSrc');
                if(((rect.bottom >=0 && rect.bottom <= window.screen.height)
                    || (rect.top >=0 && rect.top <= window.screen.height))
                    && ((rect.right >=0 && rect.right <= window.screen.width)
                    || (rect.left >=0 && rect.left <= window.screen.width))){
                    if(el.src != newSrc && !!newSrc){
                        el.src = newSrc
                        el.onload = function(){
                            el.style.opacity = '1'
                            setTimeout(()=>{
                                _.initData()
                                _.refreshPosition();
                                _.checknfinite()
                            },20)
                            el.onload = new Function
                        }
                        if(cb){
                            cb()
                        }
                    }
                }
            },
            setPosition(c_info,c_bar,direction){
                var box = this.$refs.box,scrollbar = this.$refs.scrollbar
               if(!direction){
                   box.style[vendorPrefix+"Transform"]='translate(0,'+c_info+'px)'
                   scrollbar.style.top = (c_bar*100)+'%'
               }else {
                   box.style[vendorPrefix+"Transform"]='translate('+c_info+'px,0)'
                   scrollbar.style.left = (c_bar*100)+'%'
               }
            },
            initBar(){
                var _ = this ;
                _.scrollbar.style.top='0px'
                _.scrollbar.style.left='0px'
                if(_.direction=='y'){
                    _.scrollbar.style.height=_.scaleHeight*100+'%';
                    _.scrollbar.style.width='5px'
                    if(_.scaleHeight>1) _.scrollbar.style.display='none';
                }else {
                    _.scrollbar.style.width=_.scaleWidth*100+'%';
                    _.scrollbar.style.height='5px'
                    if(_.scaleWidth>1) _.scrollbar.style.display='none';
                }
            },
            bindEvent(){  //重新绑事件
                var _ = this
                _.initBar()
                _.scrollBox.addEventListener('mousewheel',mousewheels,false)
                function mousewheels(e) {
                    if(_.direction=='y'){
                        if(_.scrollHeight>_.boxHeight) return
                        _.wheelDeltaYs(e)
                    }else {
                        if(_.scrollWidth>_.boxWidth) return
                        _.wheelDeltaXs(e)
                    }}
                var isTouch = 'ontouchstart' in window
                if(_.touch || (isTouch)){
                    var mouseEvents = (isTouch) ?
                        {down: 'touchstart', move: 'touchmove', up: 'touchend', over: 'touchstart', out: 'touchend'} :
                        {down: 'mousedown', move: 'mousemove', up: 'mouseup', over: 'mouseover', out: 'mouseout'}
                    var start_x,start_y,move_x,move_y,move_t,end_t,moving = false
                    _.scrollBox.removeEventListener(mouseEvents.down,down,false)
                    _.scrollBox.addEventListener(mouseEvents.down,down,false)
                    function down(e) {
                        if(!isTouch) e.preventDefault();
                        if(_.doRefreshing) {
                            e.preventDefault();e.stopPropagation();return};
                        e=e.changedTouches? e.changedTouches[0]:e
                        start_x = e.pageX,start_y=e.pageY,end_t=0
                        document.addEventListener(mouseEvents.move,move,false)
                        document.addEventListener(mouseEvents.up,up,false)
                    }
                    function move(e) {
                        e.stopPropagation();
                        var info = getTranslateInfo(_.box.style[vendorPrefix+"Transform"]),c_info,scale=1,ban_info
                        e=e.changedTouches? e.changedTouches[0]:e
                        move_x = e.pageX-start_x,end_t=new Date().valueOf()-move_t,move_y=e.pageY-start_y
                        if(_.direction=='y'){
                            c_info = info.y+move_y;

                            if(c_info>0){
                                scale = (1-(c_info-_.dataInfo.topHeight)/(2*_.dataInfo.topHeight))*.4
                            }else if(c_info<_.scrollHeight-_.boxHeight){
                                scale = (2*_.dataInfo.topHeight-(_.scrollHeight-c_info-_.boxHeight))/(2*_.dataInfo.topHeight)
                                if(_.scrollHeight-_.boxHeight>0){
                                    scale = (c_info+2*_.dataInfo.topHeight)/(2*_.dataInfo.topHeight)
                                }
                            }
                            ban_info = c_info>0?0:-c_info/_.boxHeight
                            if(c_info>_.dataInfo.topHeight || c_info<_.scrollHeight-_.boxHeight){
                                c_info = info.y+move_y*(scale)
                            }
                            if(_.hasRefresh){
                                _.refreshing = false  //下拉刷新
                                _.refresh.querySelector('span').style[vendorPrefix+'Transform']='rotate(0)'
                                if(c_info>1.5*_.dataInfo.topHeight && !_.refreshing) {
                                    _.refreshing = true
                                    _.refresh.querySelector('span').style[vendorPrefix + 'Transform'] = 'rotate(180deg)'
                                }
                            }
                            //加载更多
                            if(_.hasInfinite){
                                if(c_info<_.scrollHeight-_.boxHeight){
                                    _.doInfinite()
                                }
                            }
                            info.y=c_info
                            _.setPosition(c_info,ban_info)
                        }else {
                            c_info = info.x+move_x,scale = 1-(c_info-_.dataInfo.topHeight)/(2*_.dataInfo.topHeight)
                            ban_info = c_info>0?0:-c_info/_.boxWidth
                            if(c_info>_.dataInfo.topHeight){
                                c_info = info.x+move_x*(scale)
                            }
                            info.x=c_info
                            _.setPosition(c_info,ban_info,true)
                        }
                        if(_.imgload){
                            console.log(_.imgLoadList)
                            _.imgLoadList.forEach((v,i)=>{
                                _.compute(v)
                            })
                        }
                        if(_['_events'].scroll){
                            _.$emit('scroll',e,info)
                        }
                        start_x = e.pageX,start_y=e.pageY,move_t=new Date().valueOf()
                    }
                    function up(e) {
                        document.removeEventListener(mouseEvents.move,move,false)
                        document.removeEventListener(mouseEvents.up,up,false)
                        var info = getTranslateInfo(_.box.style[vendorPrefix+"Transform"]),c_info,ban_info
                        e=e.changedTouches? e.changedTouches[0]:e
                        _.box.style[vendorPrefix+"Transition"]='all .25s ease-out'
                        if(end_t){
                            if(_.direction=='y'){
                                c_info = move_y/end_t*100+info.y
                                if(c_info<_.scrollHeight-_.boxHeight) c_info = _.scrollHeight-_.boxHeight+
                                    (_.infiniteEnd?60:0)
                                if(c_info>0 || _.boxHeight<_.scrollHeight) c_info = 0
                                ban_info =-c_info/_.boxWidth
                                if(_.refreshing && _.hasRefresh){
                                    _.refresh.querySelector('span').style[vendorPrefix+'Transform']='rotate(0)'
                                  if(!_.infiniteing) {
                                      _.refresh.querySelector('.refresh2').style.display = 'block';
                                      _.refresh.querySelector('.refresh1').style.display = 'none';
                                      c_info = 60;
                                      _.doRefresh()
                                  }

                                }
                                setTimeout(function () {_.setPosition(c_info,ban_info)},20)
                            }else {
                                c_info = move_x/end_t*80+info.x
                                if(c_info<_.scrollWidth-_.boxWidth) c_info = _.scrollWidth-_.boxWidth
                                if(c_info>0 || _.boxWidth<_.scrollWidth) c_info = 0
                                ban_info =-c_info/_.boxWidth
                                setTimeout(function () {_.setPosition(c_info,ban_info,true)},20)
                            }
                        }
                        _.$emit('end',e,info)
                        setTimeout(function () {
                            _.box.style[vendorPrefix+"Transition"]='-'+vendorPrefix+'-transform 0s'
                            _.box.style["transition"]='transform 0s'
                        },270)
                    }
                }
            },
            refreshPosition(){ //重置位置
                var _ = this, info = getTranslateInfo(_.box.style[vendorPrefix+"Transform"]),c_info,ban_info
                if(_.direction=='y'){
                    if(-info.y+_.scrollHeight>_.boxHeight){
                        c_info = _.scrollHeight - _.boxHeight>0?0:_.scrollHeight - _.boxHeight
                        ban_info =-c_info/_.boxHeight
                       _.setPosition(c_info,ban_info)
                    }
                }else {
                    if(-info.x+_.scrollWidth>_.boxWidth){
                        c_info = _.scrollWidth - _.boxWidth>0?0: _.scrollWidth - _.boxWidth
                        ban_info =-c_info/_.boxWidth
                        _.setPosition(c_info,ban_info,true)
                    }
                }
            },
            removeInfinite(){
                this.infinite.style.display='none'
                this.refreshPosition();
            },
            finishInfinite(type){
                var _ = this;
                if(type) _.infiniteEnd = true
                _.infiniteing = false,_.refreshing =false
                _.infinite.querySelector('span').style.display='none';
            },
            checknfinite(){
                if(this.scrollHeight>this.boxHeight && this.hasInfinite){
                    this.doInfinite()
                }
            },
            doInfinite(){
                if(this.infiniteing || this.infiniteEnd) return
                this.infiniteing = true
                this.infinite.querySelector('span').style.display='block';
                this.$emit('infinite')
            },
            doRefresh(){
                var _ = this;
                if(_.doRefreshing ) return
                _.doRefreshing = true
                console.log('refresh')
                _.$emit('refresh');
            },
            finishRefresh(){
                this.refresh.querySelector('.refresh2').style.display='none';
                this.refresh.querySelector('.refresh1').style.display='block';
                this.initData()
                this.setPosition(0,0)
                this.refreshing = false;
                this.doRefreshing = false
                this.infiniteEnd = false
                this.infiniteing = false
                this.checknfinite()
            }
        },
        mounted(){
            this.refreshing = false  //加载中
            this.infiniteing = false  //加载中
            this.infiniteEnd = false
            this.doRefreshing = false
            this.scrollBox = this.$refs.scrollBox  //外框
            this.refresh = this.$refs.refresh;  //刷新
            this.infinite = this.$refs.infinite;  //刷新
            this.box = this.$refs.box  //滚动框
            this.scrollbar = this.$refs.scrollbar //滚动条bar
            this.scrollerScrollbarStyle = this.$refs.scrollerScrollbarStyle //滚动条外框
            if(this['_events'].infinite) this.hasInfinite=true
            if(this['_events'].refresh) this.hasRefresh=true
            this.initData()  //初始化宽高
            this.scrollerScrollbarInit()
            this.bindEvent();
            this.checknfinite()
            window.addEventListener('scroll',function (e) {
                console.log(e)
            })
            var _this = this ;this.imgLoadList = []
            this.$slots.default.forEach((v,i)=>{
                if(v.tag){
                    v.elm.querySelectorAll('img').forEach((v,i)=>{
                        v.onload=function () {
                            setTimeout(()=>{
                                _this.initData()
                                _this.refreshPosition();
                                _this.checknfinite()
                            },20)
                            v.onload = new Function()
                        }
                        if(v.getAttribute('newSrc') != null){
                            _this.imgLoadList.push(v)
                        }
                    })
                }
            })
        },
        updated(){
            var _ = this;
            if(!this.refreshing){
                setTimeout(()=>{
                    this.initData()
                    _.refreshPosition();
                    _.checknfinite()
                },50)
            }
        },
        components: {}
    }
</script>
<style scoped="" lang="scss">
    @keyframes refresh_comment_ing { from { transform: rotate(0);} to {transform: rotate(360deg);} }
    @-webkit-keyframes refresh_comment_ing { from {  -webkit-transform: rotate(0);} to {-webkit-transform: rotate(360deg);} }
    .scroller_comment_box .scroller-scrollbar{position: absolute;}
    .scroller_comment_box .refresh{height: 60px;text-align: center;width: 100%;font-size: 16px;color: #666;}
    .scroller_comment_box .refresh span{  -webkit-transition: all .4s;  transition: all .4s;}
    .scroller_comment_box .refresh .refresh2{display: none;}
    .scroller_comment_box .refresh .refresh2 span{  -webkit-animation:refresh_comment_ing 1.25s infinite linear;
        animation:refresh_comment_ing 1.25s infinite linear;margin-top: 15px;line-height: 1px;}
    .scroller_comment_box  .scroll-box{position: absolute;left: 0;  top: -60px;
        -webkit-transition:  -webkit-transform 0s;  -moz-transition: -moz-transform 0s;  transition: transform 0s;}
    .scroller_comment_box .scroller-scrollbar p{position: absolute;border-radius: 5px;background-color: #ddd;
       opacity: .5; -webkit-transition:  -webkit-transform 0s;  -moz-transition: -moz-transform 0s;  transition: transform 0s; }
    .scroller_comment_box .infinite  span{-webkit-animation:refresh_comment_ing 1.25s infinite linear;display: none;
        animation:refresh_comment_ing 1.25s infinite linear;margin-top: 15px;line-height: 1px;}
</style>