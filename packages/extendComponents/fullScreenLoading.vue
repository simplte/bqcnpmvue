<template>
  <div id="loadingPanel" v-if="show">
    <div class="container-panel">
      <div class="arc"></div>
      <h1>
        <span>{{tips}}</span>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "FullScreenLoading",
  data() {
    return {
      tips: "加载中",
      show: false
    };
  }
};
</script>

<style lang="less" scoped>
// body {
//   font-family: "Inconsolata", monospace;
//   overflow: hidden;
// }
/*全屏遮罩层*/
#loadingPanel {
  width: 100%;
  height: 100%;
  background: rgba(11, 11, 20, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}
#loadingPanel .container-panel {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#loadingPanel .container-panel .arc {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border-top: 2px solid #ffea29;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  animation: ring 2s infinite linear;
}
#loadingPanel .container-panel .arc::before {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border-top: 2px solid #8d29ff;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  animation: ring 4s infinite linear reverse;
  content: "";
}
#loadingPanel .container-panel .arc::after {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0;
  height: 0;
  border-radius: 50%;
  border-top: initial;
  border-left: initial;
  border-right: initial;
  animation: solidCircle 1s infinite;
  content: "";
  background: snow;
}

#loadingPanel .container-panel h1 {
  position: absolute;
  height: 40px;
  margin: auto;
  top: 200px;
  left: 0;
  right: 0;
  bottom: 0;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.1em;
  font-size: 14px;
  font-weight: bold;
  color: white;
}

/*动画定义*/
@keyframes ring {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes solidCircle {
  0% {
    width: 0;
    height: 0;
  }
  75% {
    width: 40px;
    height: 40px;
  }
  100% {
    width: 0;
    height: 0;
  }
}
</style>