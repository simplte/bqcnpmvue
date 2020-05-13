# npmtools

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### how to use tools

```
1:
main.js
import bqcToast from "bqcvuetools";
Vue.use(bqcToast);
2:
view/**.vue
    botton: <bqc-botton color="red">asdf</bqc-botton>
    toast：<bqc-toast :isShow="isShow" message="cccc"></bqc-toast>
    $toast: this.$toast("aaa", 1700);
    $loading：this.$loading(true);

package：
    component 组件
    extendComponents 插件
    index.js  组价插件的注册
```
