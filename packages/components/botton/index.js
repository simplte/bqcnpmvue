// 导入组件，组件必须声明 name
import toast from "./main.vue";

// 为组件添加 install 方法，用于按需引入
toast.install = function(Vue) {
  Vue.component(toast.name, toast);
};

export default toast;
