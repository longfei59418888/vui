/**
 * Created by DELL on 2017/6/6.
 */

function VueRouterTransition (VueRouter,routes) {
    let history_vue_list = ['/']
    VueRouter.prototype.go = function (n) {
        this.isBack = 'right'
        window.history.go(n)
        history_vue_list = history_vue_list.slice(0,history_vue_list.length+n)
    }
    VueRouter.prototype.backTo = function(location){
        let index = history_vue_list.indexOf(router.matcher.match(location).matched[0].path)
        if(index == -1){
            this.resolve(location)
            return
        }
        this.isBack = 'right'
        this.go(index-history_vue_list.length+1)
    }
// 或者你可以新建一个方法
    VueRouter.prototype.goBack = function () {
        this.isBack = 'right'
        this.go(-1)
    }
    const router = new VueRouter({
        // mode: 'history',
        saveScrollPosition:true,
        routes:routes, // （缩写）相当于 routes: routes
    })
    const push = router.history.push
    if(router.history.getCurrentLocation() !='/'){
        console.log(router.matcher.match(router.history.getCurrentLocation()))
        history_vue_list.push(router.matcher.match(router.history.getCurrentLocation()).matched[0].path)
    }
    router.history.push=function (location, onComplete, onAbort) {
        router.isBack = 'left'
        history_vue_list.push(router.matcher.match(location).matched[0].path)
        push.call(router.history,location, onComplete, onAbort)
    }
    return router
}

export default VueRouterTransition
