
export default {
    props: {
        value: String
    },
    template: `
                <input type="tel" ref="input" :value="FormatValue" />
            `,
    mounted() {
        const input = this.$refs.input;
        this.$emit('input', this.deal(this.value));
        input.oninput = () => {
            let value = this.deal(input.value);
            input.value = value
            this.$emit('input', value);
        }
    },
    computed: {
        FormatValue() {
            return this.deal(this.value)
        }
    },
    methods: {
        deal(val) {
            const nVal = this.dealFormatPhone(val)
            if (val == nVal) {
                return nVal
            }
            return this.deal(nVal)
        },
        dealFormatPhone(val) {
            if (val && val.length > 13) return val.slice(0, 13)
            if (/^\d{0,3}$/.test(val)) return val;
            if (/^\d{3}\s$/.test(val)) return `${val.slice(0, 3)}`;
            if (/^\d{4}.*$/.test(val)) return `${val.slice(0, 3)} ${val.slice(3)}`;
            if (/^\d{3}\s\d{4}\s$/.test(val)) return `${val.slice(0, 8)}`;
            if (/^\d{3}\s\d{1,3}\s.*$/.test(val)) return `${val.slice(0, 3)} ${val.slice(3).replace(/\s/g, '')}`
            if (/^\d{3}\s\d{5}.*$/.test(val)) return `${val.slice(0, 8)} ${val.slice(8)}`;
            return val
        }
    }
}