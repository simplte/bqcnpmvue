<template>
  <div class="info-box">
    <span><em>*</em>姓名</span>
    <input
      maxlength="22"
      placeholder="与证件保持一致"
      v-model.trim="passgerInfo.name"
      placeholder-class="placeholder"
      class="nameInput"
      v-bind:readonly="
        isSigning == 1 && urlParams.urlFrom == 2 && urlParams.type == 'edit'
      "
    />
    <span
      class="pinyin"
      v-if="isSigning || isOverFive == '1' || urlParams.urlFrom == 3"
      @click="zhuanpingyin()"
      >转拼音</span
    >
  </div>
</template>

<script>
export default {
  // 传入子组件的参数写到props
  name: "bqc-pinyin",
  props: {
    color: {
      type: String, // 颜色参数类型
      default: "#000" // 默认黑色
    }
  }
};
</script>

<style scoped>
.btn {
  width: 110px;
  height: 60px;
  border-radius: 10px;
  border: none;
  font-size: 15px;
}
</style>
