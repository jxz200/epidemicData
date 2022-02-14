<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // clientWidth: document.documentElement.clientWidth,
    };
  },
  watch: {
    // clientWidth() {
    //   window.location.reload();
    // },
  },
  mounted() {
    this.isMobile();
    // this.watchWidth();
  },
  methods: {
    //用户用pc访问时弹出弹框
    isMobile() {
      var isMobile = /mobile/gi.test(navigator.userAgent);
      if (!isMobile) {
        alert("欢迎 建议您用移动端访问该网站,以获得更好地浏览体验哦 ♪(^∇^*)");
      }
    },
    //用户改变窗口宽度时强制刷新
    // watchWidth() {
    //   const that = this;
    //   window.onresize = function () {
    //     that.clientWidth = document.documentElement.clientWidth;
    //     console.log(that.clientWidth);
    //   };
    // },
  },
};
</script>

<style lang="scss" scoped></style>
