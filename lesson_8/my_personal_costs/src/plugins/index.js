export default {
  install(Vue) {
    Vue.prototype.$context = {
      EventEmitter: new Vue(),
      show(element, cost) {
        this.EventEmitter.$emit("showContextMenu", cost);
      },
      hide(cost) {
        this.EventEmitter.$emit("hideContextMenu", {cost});
      },
    };
  },
};
