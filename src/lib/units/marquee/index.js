
export default {
    props: ['speed'],
    template: `
                <div style="overflow: hidden;width: 100%;" ref="notice">
                    <span style="white-space: nowrap;display: inline-block;"><slot></slot></span>
                </div>
            `,
    mounted() {
        const notice = this.$refs.notice
        let speed = 60
        if (this.speed) speed = this.speed
        const prefix = getVendorPrefix()
        const span = notice.querySelector('span');
        let s_w = span.offsetWidth, n_w = notice.offsetWidth, s_t = parseInt(s_w / speed),
            n_t = parseInt((n_w + 2 * s_w) / (speed + 10));
        if (span.offsetWidth > notice.offsetWidth) {
            span.style[prefix + 'Transform'] = `translateX(0)`
            span.style[prefix + 'Transition'] = `all ${s_t}s linear`
            span.style[prefix + 'Transform'] = `translateX(-${s_w}px)`
            setTimeout(() => {
                runTime()
            }, s_t * 1000)
        }

        function runTime() {
            span.style[prefix + 'Transition'] = 'all 0s linear'
            span.style[prefix + 'Transform'] = `translateX(${n_w}px)`
            setTimeout(() => {
                span.style[prefix + 'Transition'] = `all ${n_t}s linear`
                span.style[prefix + 'Transform'] = `translateX(-${s_w}px)`
            }, 200)
            setTimeout(() => {
                runTime()
            }, n_t * 1000)
        }

        function getVendorPrefix() {
            var body = document.body || document.documentElement,
                style = body.style,
                vendor = ['webkit', 'khtml', 'moz', 'ms', 'o'],
                i = 0;
            while (i < vendor.length) {
                if (typeof style[vendor[i] + 'Transition'] === 'string') {
                    return vendor[i];
                }
                i++;
            }
        }
    }
}