<template>
    <div class="date-picker">
        <div class="input-wrapper" @mouseenter="showCancel = true" @mouseleave="showCancel = false">
            <div class="input" :style="{fontSize:range?'12px':''}" @click="togglePanel" v-text="range ? value[0] + ' -- ' + value[1] : value"></div>
            <transition name="fade">
                <span v-show="showCancel" @click="clear"><svg t="1500005441431" class="icon" style="margin-top: 10px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2952" width="16" height="16">
                    <path d="M958.859 903.62L566.872 512.056l392.972-392.575-55.266-55.207L511.61 456.849 118.595 64.223l-55.262 55.203 393.011 392.63L64.306 903.659l55.262 55.207L511.61 567.26l391.98 391.56 55.269-55.2z" fill="" p-id="2953"></path></svg>
                </span>
            </transition>
        </div>
        <transition name="toggle">
            <div ref="listBox" class="date-panel" v-show="panelState" :style="coordinates">
                <div class="panel-header" v-show="panelType !== 'year'">
                    <div class="arrow-left" @click="prevMonthPreview()">
                        <svg t="1500006143437" class="icon" style="-webkit-transform: rotate(180deg);-moz-transform: rotate(180deg);-ms-transform: rotate(180deg);
                            -o-transform: rotate(180deg);transform: rotate(180deg);" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                             p-id="3728" width="30" height="30">
                             <path d="M666.40551 502.455282 428.317513 264.367285 398.557959 294.12684 606.890256 502.455282 398.557959 710.78758 428.317513 740.545207 636.645956 532.216764 636.647883 532.216764Z" p-id="3729" fill="#66C1CA"></path>
                        </svg></div>
                    <div class="year-month-box">
                        <span class="year-box" @click="chType('year')" v-text="tmpYear+'年'"></span>
                        <span class="month-box" @click="chType('month')">{{tmpMonth + 1 | month(language)}}月</span>
                    </div>
                    <div class="arrow-right" @click="nextMonthPreview()">
                        <svg t="1500006143437" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                             p-id="3728" width="30" height="30">
                             <path d="M666.40551 502.455282 428.317513 264.367285 398.557959 294.12684 606.890256 502.455282 398.557959 710.78758 428.317513 740.545207 636.645956 532.216764 636.647883 532.216764Z" p-id="3729" fill="#66C1CA"></path>
                        </svg></div>
                </div>
                <div class="panel-header" v-show="panelType === 'year'">
                    <div class="arrow-left" @click="chYearRange(0)"><svg t="1500006143437" class="icon" style="-webkit-transform: rotate(180deg);-moz-transform: rotate(180deg);-ms-transform: rotate(180deg);
                            -o-transform: rotate(180deg);transform: rotate(180deg);" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                                         p-id="3728" width="30" height="30">
                        <path d="M666.40551 502.455282 428.317513 264.367285 398.557959 294.12684 606.890256 502.455282 398.557959 710.78758 428.317513 740.545207 636.645956 532.216764 636.647883 532.216764Z" p-id="3729" fill="#66C1CA"></path>
                    </svg></div>
                    <div class="year-range">
                        <span v-text="yearList[0]+'年'"></span> - <span v-text="yearList[yearList.length - 1]+'年'"></span>
                    </div>
                    <div class="arrow-right" @click="chYearRange(1)"> <svg t="1500006143437" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                                           p-id="3728" width="30" height="30">
                        <path d="M666.40551 502.455282 428.317513 264.367285 398.557959 294.12684 606.890256 502.455282 398.557959 710.78758 428.317513 740.545207 636.645956 532.216764 636.647883 532.216764Z" p-id="3729" fill="#66C1CA"></path>
                    </svg></div>
                </div>
                <div class="type-year action" :style="action" v-show="panelType === 'year'">
                    <ul class="year-list">
                        <li v-for="item in yearList"
                            v-text="item"
                            :class="{selected: isSelected('year', item), invalid: validateYear(item)}" 
                            @click="selectYear(item)"
                        >
                        </li>
                    </ul>
                </div>
                <div class="type-month action" :style="action" v-show="panelType === 'month'">
                    <ul class="month-list">
                        <li v-for="(item, index) in monthList"
                            :class="{selected: isSelected('month', index), invalid: validateMonth(index)}" 
                            @click="selectMonth(index)"
                        >
                            {{item | month(language)}}
                        </li>
                    </ul>
                </div>
                <div class="type-date action" :style="action" v-show="panelType === 'date'">
                    <ul class="weeks">
                        <li v-for="item in weekList">{{item | week(language)}}</li>
                    </ul>
                    <ul class="date-list">
                        <li v-for="(item, index) in dateList"
                            :class="{preMonth: item.previousMonth, nextMonth: item.nextMonth,
                                invalid: validateDate(item), firstItem: (index % 7) === 0}"
                            @click="selectDate(item)">
                            <div class="message" :class="{selected: isSelected('date', item)}">
                                <div class="bg"></div><span v-text="item.value"></span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div v-if="time" class="time-box">
                    <div class="time">
                        <span style="margin-right: 10px;">时间：</span><span><input v-model="hour" type="text"></span>
                        <span>&nbsp:&nbsp</span><span>
                        <input v-model="minutes" type="text"></span>
                    </div>
                    <div class="options">
                        <span @click="clear">清除</span>
                        <span @click="setTimed">确认</span>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    export default {
        data () {
            let now = new Date()
            return {
                action:{},
                showCancel: false,
                panelState: false,
                panelType: 'date',
                coordinates: {},
                year: now.getFullYear(),
                month: now.getMonth(),
                date: now.getDate(),
                hour:now.getHours(),
                minutes:now.getMinutes(),
                tmpYear: now.getFullYear(),
                tmpMonth: now.getMonth(),
                tmpStartYear: now.getFullYear(),
                tmpStartMonth: now.getMonth(),
                tmpStartDate: now.getDate(),
                tmpEndYear: now.getFullYear(),
                tmpEndMonth: now.getMonth(),
                tmpEndDate: now.getDate(),
                minYear: Number,
                minMonth: Number,
                minDate: Number,
                maxYear: Number,
                maxMonth: Number,
                maxDate: Number,
                yearList: Array.from({length: 12}, (value, index) => new Date().getFullYear() + index),
                monthList: [1, 2, 3 ,4 ,5, 6, 7 ,8, 9, 10, 11, 12],
                weekList: [0, 1, 2, 3, 4, 5, 6],
                rangeStart: false
            }
        },
        props: {
            language: {default: 'ch'},
            min: {default: '2000-05-04'},
            max: {default: '2050-06-01'},
            value: {
                type: [String, Array],
                default: ''
            },
            range: {
                type: Boolean,
                default: true
            },
            time:{default:false}
        },
        methods: {
            togglePanel () {
                this.panelState = !this.panelState
                this.rangeStart = false
            },
            isSelected (type, item) {
                switch (type){
                    case 'year':
                        if(!this.range) return item === this.tmpYear
                        return (new Date(item, 0).getTime() >= new Date(this.tmpStartYear, 0).getTime() 
                            && new Date(item, 0).getTime() <= new Date(this.tmpEndYear, 0).getTime())
                    case 'month':
                        if(!this.range) return item === this.tmpMonth && this.year === this.tmpYear
                        return (new Date(this.tmpYear, item).getTime() >= new Date(this.tmpStartYear, this.tmpStartMonth).getTime() 
                            && new Date(this.tmpYear, item).getTime() <= new Date(this.tmpEndYear, this.tmpEndMonth).getTime())
                    case 'date':
                        if(!this.range) return this.date === item.value && this.month === this.tmpMonth && item.currentMonth
                        let month = this.tmpMonth
                        item.previousMonth && month--
                        item.nextMonth && month++
                        return (new Date(this.tmpYear, month, item.value).getTime() >= new Date(this.tmpStartYear, this.tmpStartMonth, this.tmpStartDate).getTime() 
                            && new Date(this.tmpYear, month, item.value).getTime() <= new Date(this.tmpEndYear, this.tmpEndMonth, this.tmpEndDate).getTime())
                }
            },
            chType (type) {
                this.panelType = type
                var _ = this;
                _.action={opacity:0}
                setTimeout(()=>{
                    _.action={opacity:1}
                },10)
            },
            chYearRange (next) {
                if(next){
                    this.yearList = this.yearList.map((i) => i + 12)
                }else{
                    this.yearList = this.yearList.map((i) => i - 12)
                }
            },
            prevMonthPreview () {
                this.tmpMonth = this.tmpMonth === 0 ? 0 : this.tmpMonth - 1
            },
            nextMonthPreview () {
                this.tmpMonth = this.tmpMonth === 11 ? 11 : this.tmpMonth + 1
            },
            selectYear (year) {
                if(this.validateYear(year)) return
                this.tmpYear = year
                this.chType('month')
            },
            selectMonth (month) {
                if(this.validateMonth(month)) return
                this.tmpMonth = month
                this.chType('date')
            },
            selectDate (date) {
                setTimeout(() => {
                    if(this.validateDate(date)) return
                    if(date.previousMonth){
                        if(this.tmpMonth === 0){
                            this.year -= 1
                            this.tmpYear -= 1
                            this.month = this.tmpMonth = 11
                        }else{
                            this.month = this.tmpMonth - 1
                            this.tmpMonth -= 1
                        }
                    }else if(date.nextMonth){
                        if(this.tmpMonth === 11){
                            this.year += 1
                            this.tmpYear += 1
                            this.month = this.tmpMonth = 0
                        }else{
                            this.month = this.tmpMonth + 1
                            this.tmpMonth += 1
                        }
                    }
                    if(!this.range){
                        this.year = this.tmpYear
                        this.month = this.tmpMonth
                        this.date = date.value
                        let value = `${this.tmpYear}-${('0' + (this.month + 1)).slice(-2)}-${('0' + this.date).slice(-2)}`
                        if(this.time) value+=` ${this.hour}:${this.minutes}`
                        this.$emit('input', value)
                        if(!this.time) this.panelState = false
                    }else if(this.range && !this.rangeStart){

                        this.tmpEndYear = this.tmpStartYear = this.tmpYear
                        this.tmpEndMonth = this.tmpStartMonth = this.tmpMonth
                        this.tmpEndDate = this.tmpStartDate = date.value

                        this.rangeStart = true

                    }else if(this.range && this.rangeStart){
                        
                        this.tmpEndYear = this.tmpYear
                        this.tmpEndMonth = this.tmpMonth
                        this.tmpEndDate = date.value

                        let d1 = new Date(this.tmpStartYear, this.tmpStartMonth, this.tmpStartDate).getTime(),
                            d2 = new Date(this.tmpEndYear, this.tmpEndMonth, this.tmpEndDate).getTime()
                        if(d1 > d2){
                            let tmpY, tmpM, tmpD
                            tmpY = this.tmpEndYear 
                            tmpM = this.tmpEndMonth
                            tmpD = this.tmpEndDate

                            this.tmpEndYear = this.tmpStartYear
                            this.tmpEndMonth = this.tmpStartMonth
                            this.tmpEndDate = this.tmpStartDate

                            this.tmpStartYear = tmpY
                            this.tmpStartMonth = tmpM
                            this.tmpStartDate = tmpD
                        }
                        let RangeStart = `${this.tmpStartYear}-${('0' + (this.tmpStartMonth + 1)).slice(-2)}-${('0' + this.tmpStartDate).slice(-2)}`
                        let RangeEnd = `${this.tmpEndYear}-${('0' + (this.tmpEndMonth + 1)).slice(-2)}-${('0' + this.tmpEndDate).slice(-2)}`

                        let value = [RangeStart, RangeEnd]
                        this.$emit('input', value)

                        this.rangeStart = false
                        this.panelState = false
                    }
                }, 0)
            },
            validateYear (year) {
                return (year > this.maxYear || year < this.minYear) ? true : false
            },
            validateMonth (month) {
                if(new Date(this.tmpYear, month).getTime() >= new Date(this.minYear, this.minMonth - 1).getTime()
                    && new Date(this.tmpYear, month).getTime() <= new Date(this.maxYear, this.maxMonth - 1).getTime()){
                    return false
                }
                return true
            },
            validateDate (date) {
                let mon = this.tmpMonth
                if(date.previousMonth){
                    mon -= 1
                }else if(date.nextMonth){
                    mon += 1
                }
                if(new Date(this.tmpYear, mon, date.value).getTime() >= new Date(this.minYear, this.minMonth - 1, this.minDate).getTime()
                    && new Date(this.tmpYear, mon, date.value).getTime() <= new Date(this.maxYear, this.maxMonth - 1, this.maxDate).getTime()){
                    return false
                }
                return true
            },
            close (e) {
                if(!this.$el.contains(e.target)){
                    this.panelState = false
                    this.rangeStart = false
                }
            },
            clear() {
                this.$emit('input', this.range ? ['', ''] : '')
            },
            setTimed(){
                if(parseInt(this.hour=(''+this.hour).replace(/[^\d]/g,''))>23) this.hour = 23
                if(parseInt(this.minutes=(''+this.minutes).replace(/[^\d]/g,''))>59) this.hour = 59
                if(this.hour.length==1) this.hour = '0'+this.hour
                if(this.minutes.length==1) this.minutes = '0'+this.minutes
                let value = `${this.tmpYear}-${('0' + (this.month + 1)).slice(-2)}-${('0' + this.date).slice(-2)} ${this.hour}:${this.minutes}`
                this.$emit('input', value)
                this.panelState = false
            }
        },
        watch: {
            min (v) {
                let minArr = v.split('-')
                this.minYear = Number(minArr[0])
                this.minMonth = Number(minArr[1])
                this.minDate = Number(minArr[2])
            },
            max (v) {
                let maxArr = v.split('-')
                this.maxYear = Number(maxArr[0])
                this.maxMonth = Number(maxArr[1])
                this.maxDate = Number(maxArr[2])
            },
            range (newVal, oldVal) {
                if(newVal === oldVal) return
                if(newVal && Object.prototype.toString.call(this.value).slice(8, -1) === 'String'){
                    this.$emit('input', ['', ''])
                }
                if(!newVal && Object.prototype.toString.call(this.value).slice(8, -1) === 'Array'){
                    this.$emit('input', '')
                }
            }
        },
        computed: {
            dateList () {
                let currentMonthLength = new Date(this.tmpYear, this.tmpMonth + 1, 0).getDate()
                let dateList = Array.from({length: currentMonthLength}, (val, index) => {
                    return {
                        currentMonth: true,
                        value: index + 1
                    }
                })
                let startDay = new Date(this.tmpYear, this.tmpMonth, 1).getDay()
                let previousMongthLength = new Date(this.tmpYear, this.tmpMonth, 0).getDate()

                for(let i = 0, len = startDay; i < len; i++){
                    dateList = [{previousMonth: true, value: previousMongthLength - i}].concat(dateList)
                }
                for(let i = dateList.length, item = 1; i < 42; i++, item++){
                    dateList[dateList.length] = {nextMonth: true, value: item}
                }
                return dateList
            }
        },
        filters: {
            week: (item, lang) => {
                switch (lang) {
                    case 'en':
                        return {0: 'Su', 1: 'Mo', 2: 'Tu', 3: 'We', 4: 'Th', 5: 'Fr', 6: 'Sa'}[item]
                    case 'ch':
                        return {0: '日', 1: '一', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六'}[item]
                    case 'uk':
                        return {0: 'Пн', 1: 'Вт', 2: 'Ср', 3: 'Чт', 4: 'Пт', 5: 'Сб', 6: 'Нд'}[item]
                    default:
                        return item
                }
            },
            month: (item, lang) => {
                switch (lang) {
                    case 'en':
                        return {1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun',
                         7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec'}[item]
                    case 'ch':
                        return {1: '01', 2: '02', 3: '03', 4: '04', 5: '05', 6: '06',
                         7: '07', 8: '08', 9: '09', 10: '10', 11: '11', 12: '12'}[item]
                    case 'uk':
                        return {1: 'Січень', 2: 'Лютий', 3: 'Березень', 4: 'Квітень', 5: 'Травень', 6: 'Червень',
                         7: 'Липень', 8: 'Серпень', 9: 'Вересень', 10: 'Жовтень', 11: 'Листопад', 12: 'Грудень'}[item]
                    default:
                        return item
                }
            }
        },
        mounted () {
            this.$nextTick(() => {
                if(this.$el.parentNode.offsetWidth + this.$el.parentNode.offsetLeft - this.$el.offsetLeft <= 300){
                    this.coordinates = {right: '0', top: `${window.getComputedStyle(this.$el.children[0]).offsetHeight + 4}px`}
                }else{
                    this.coordinates = {left: '0', top: `${window.getComputedStyle(this.$el.children[0]).offsetHeight + 4}px`}
                }
                let minArr = this.min.split('-')
                this.minYear = Number(minArr[0])
                this.minMonth = Number(minArr[1])
                this.minDate = Number(minArr[2])

                let maxArr = this.max.split('-')
                this.maxYear = Number(maxArr[0])
                this.maxMonth = Number(maxArr[1])
                this.maxDate = Number(maxArr[2])

                if(this.range){
                    if(Object.prototype.toString.call(this.value).slice(8, -1) !== 'Array'){
                        throw new Error('Binding value must be an array in range mode.')
                    }
                    if(this.value.length){
                        let rangeStart = this.value[0].split('-')
                        let rangeEnd = this.value[1].split('-')
                        this.tmpStartYear = Number(rangeStart[0])
                        this.tmpStartMonth = Number(rangeStart[1]) - 1
                        this.tmpStartDate = Number(rangeStart[2])

                        this.tmpEndYear = Number(rangeEnd[0])
                        this.tmpEndMonth = Number(rangeEnd[1]) - 1
                        this.tmpEndDate = Number(rangeEnd[2])
                    }else{
                        this.$emit('input', ['', ''])
                    }
                    
                }
                if(!this.value){
                    this.$emit('input', '')
                }
                if(this.time && this.value){
                    var reg = /^(\d{1,2}):(\d{1,2})$/.exec(this.time)
                    if(reg){
                        this.hour = reg[1]
                        this.minutes = reg[2]
                    }
                }
                window.addEventListener('click', this.close)
            })
        },
        beforeDestroy () {
            window.removeEventListener('click', this.close)
        }
    }
</script>

<style scoped lang='scss'>
    .time-box{
        display: flex;font-size: 14px;line-height: 30px;background-color: #eee;border-radius: 3px;padding: 0 15px;color: #66C1CA;
        .time{flex: 1;overflow: hidden;
            span{float: left;display: inline-block;}
            input{line-height: 30px;height: 20px;width: 30px;border: 1px solid #ccc;border-radius: 2px;text-align: center;}
        }
        .options{
            span{display: inline-block;margin-left:15px;cursor: pointer }
        }
    }
    ul{
        padding: 0;
        margin: 0;
        list-style: none;
    }
    .date-picker{
        position: relative;
        height: 32px;
    }
    .action{
        -webkit-transition: all 1.5s;
        -moz-transition: all 1.5s;
        -ms-transition: all 1.5s;
        -o-transition: all 1.5s;
        transition: all 1.5s;}
    .input-wrapper{
        border: 1px solid #ccc;
        border-radius: 2px;
        vertical-align: middle;
        display: flex;
        justify-content: space-between;
        flex-flow: row nowrap;
        align-items: center;
        padding: 0 10px 0 4px;
        height: 32px;
        line-height: 32px;
        font-size: 16px;
        box-sizing: border-box;
    }
    .input{
        height: 100%;
        width: 100%;
        font-size: inherit;
        padding-left: 4px;
        box-sizing: border-box;
        outline: none;
    }
    .cancel-btn{
        height: 14px;
        width: 14px;
    }
    .date-panel{
        position: absolute;
        z-index: 5000;
        border: 1px solid #eee;
        box-sizing: border-box;
        width: 320px;
        padding: 5px 10px 10px;
        box-sizing: border-box;
        background-color: #fff;
        transform: translateY(4px);
    }
    .panel-header{
        display: flex;
        flex-flow: row nowrap;
        width: 100%;
    }
    .arrow-left, .arrow-right{
        flex: 1;
        height: 45px;
        svg{margin-top: 7.5px}
        background-color: #fff;
        text-align: center;
        cursor: pointer;
    }
    .year-range{
        font-size: 20px;
        line-height: 45px;
        color: #66C1CA;
        flex: 4;
        display: flex;
        justify-content: center;
    }
    .year-month-box{
        flex: 4;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        .year-box{padding-right: 10px;}
        .month-box{padding-left: 10px;}
    }
    .type-year, .type-month, .date-list{
        background-color: #fff;
    }

    .year-box, .month-box{
        height: 45px;line-height: 45px;color: #66C1CA;
        transition: all ease .1s;
        /*font-family: Roboto, sans-serif;*/
        font-size: 20px;
        cursor: pointer;
        background-color: #fff;
    }
    .year-list, .month-list{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        li{
            font-family: Roboto, sans-serif;
            transition: all .45s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
            cursor: pointer;
            text-align: center;
            font-size: 20px;
            width: 33%;
            padding: 10px 0;
            &:hover{
                background-color: #6ac1c9;
                color: #fff;
            }
            &.selected{
                background-color: #0097a7;
                color: #fff;
            }
            &.invalid{
                cursor: not-allowed;
                color: #ccc;
            }
        }
    }
    .date-list{
        margin-top: 10px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        .valid:hover{
            background-color: #eee;
        }
        li{
            transition: all ease .1s;
            cursor: pointer;
            box-sizing: border-box;
            border-bottom: 1px solid #fff;
            position: relative;
            margin: 2px;
            color: #000;
            &:not(.firstItem){
                margin-left: 10px;
            }
            .message{
                /*font-family: Roboto, sans-serif;*/
                font-weight: 300;
                font-size: 14px;
                position: relative;
                height: 30px;
                &.selected{
                    .bg{
                        background-color: rgb(0, 151, 167);
                    }
                    span{
                        color: #fff;
                    }
                }
                &:not(.selected){
                    .bg{
                        transform: scale(0);
                        opacity: 0;
                    }
                    &:hover{
                        .bg{
                            background-color: rgb(0, 151, 167);
                            transform: scale(1);
                            opacity: .6;
                        }
                        span{
                            color: #fff;
                        }
                    }
                }
                .bg{
                    height: 30px;
                    width: 100%;
                    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
                    border-radius: 50%;
                    position: absolute;
                    z-index: 10;
                    top: 0;
                    left: 0;
                }
                span{
                    position: absolute;
                    z-index: 20;
                    left: 50%;
                    top: 50%;
                    transform: translate3d(-50%, -50%, 0);
                }
            }
            &.invalid{
                cursor: not-allowed;
                color: #ccc;
            }
        }
        
    }
    .weeks{
        display: flex;border-bottom: 1px solid #66C1CA;
        flex-flow: row wrap;
        justify-content: space-between;
        li{
            font-size: 16px; color: #66C1CA;
        }
    }
    .weeks, .date-list{
        width: 100%;
        text-align: center;
        .preMonth, .nextMonth{
            color: #ccc;
        }
        li{
            /*font-family: Roboto;*/
            width: 30px;
            height: 30px;
            text-align: center;
            line-height: 30px;
        }
    }
    .toggle-enter, .toggle-leave-active{
        opacity: 0;
        transform: translateY(-10px);
    }
    .toggle-enter-active, .toggle-leave-active{
        transition: all ease .2s;
    }
    .fade-enter, .fade-leave-active{
        opacity: 0;
        transform: scale3d(0, 0, 0);
    }
    .fade-enter-active, .fade-leave-active{
        transition: all ease .1s;
    }
</style>
