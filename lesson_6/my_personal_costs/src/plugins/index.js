export default {
    install(Vue) {
        if (this.installed) {
            return
        }
        this.installed = true
        Vue.prototype.$modal = {
            show() {
                console.log('Shown!')
            },
            hide() {
                console.log('Hiden!')
            }
        }
    }
}
