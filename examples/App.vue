<template>
  <div id="app">
    <!-- 自定义按钮 -->
    <bqc-botton color="red">asdf</bqc-botton>
    <!-- toast提示组件 -->
    <!-- <bqc-toast :isShow="isShow" message="cccc"></bqc-toast> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: 1
    };
  },
  mounted() {
    // toast提示插件
    // setTimeout(() => {
    this.$toast("aaa", 1700);
    // }, 200);

    // loading插件
    // this.$loading(true);

    // 转拼音插件
    console.log(this.$pinyin("不虔诚"));

    // 全屏loading插件
    this.$fsLoading.show("上传中");
    setTimeout(() => {
      this.$fsLoading.hide();
    }, 2000);
  }
};
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
