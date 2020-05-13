// packages / index.js

// 导入单个组件
import Botton from "./components/botton/index";
import Toast from "./components/toast/index";

// 导入插件
import ToastC from "./extendComponents/toast.vue";
import Loading from "./extendComponents/Loading.vue";
import Pinyin from "./extendComponents/pinyin.js";
import fullScreenLoading from "./extendComponents/fullScreenLoading.vue";



// 以数组的结构保存组件，便于遍历
const components = [Botton, Toast];

// 定义 install 方法
const install = function (vue, options) {
  if (install.installed) return;
  install.installed = true;
  //   // 遍历并注册全局组件
  components.map(component => {
    // console.log(component.name);
    vue.component(component.name, component);
  });



  /*  
    插件挂载
    mytoast 提示框插件
  */

  //  mytoast 提示框插件
  const MyToast = vue.extend(ToastC);
  const toastinstance = new MyToast();
  toastinstance.$mount(document.createElement("div"));
  document.body.appendChild(toastinstance.$el);
  vue.prototype.$toast = (msg, duration = 2000) => {
    toastinstance.message = msg;
    toastinstance.isShow = true;
    setTimeout(() => {
      toastinstance.isShow = false;
    }, duration);
  };

  // lodingmore
  const MyLoading = vue.extend(Loading);
  const loadinginstance = new MyLoading();
  loadinginstance.$mount(document.createElement("div"));
  document.body.appendChild(loadinginstance.$el);
  vue.prototype.$loading = bool => {
    loadinginstance.isShow = bool;
  };

  // 转拼音插件
  vue.prototype.$pinyin = name => {
    let py = new Pinyin(name);
    return py.zhuanpingyin();
  };

  // 全屏loading加载动画插件
  const FullScreenLoading = vue.extend(fullScreenLoading);
  const fsloadinginstance = new FullScreenLoading();
  fsloadinginstance.$mount(document.createElement("div"));
  document.body.appendChild(fsloadinginstance.$el);
  if (options && options.tips) {
    fsloadinginstance.tips = options.tips;
  }
  vue.prototype.$fsLoading = {
    // 定义显示隐藏的方法
    show(tips) {
      fsloadinginstance.show = true;
      if (tips) {
        // 替换组件的默认数据
        fsloadinginstance.tips = tips;
      }
    },
    hide() {
      fsloadinginstance.show = false;
    }
  };
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  // 导出的对象必须具备一个 install 方法
  install,
  // 组件列表
  ...components
};
