
export default {
    bind: (el, binding) => {
        const func = binding.value
        let time = el.getAttribute('gapTime')
        time = time && !isNaN(parseInt(time)) ? parseInt(time) : 500
        if (typeof func != 'function') {
            console.error('reclick 必须为函数，传值用bind来完成')
            return
        }
        let quick = false;
        el.onclick = (e) => {
            if (quick) {
                return false
            }
            quick = true
            func(e);
            e.stopPropagation()
            setTimeout(() => {
                quick = false
            }, time)
        }
    }
}