<template>
  <div>
    <header>
      <div class="toggle iconfont" @click="$router.push('/selectProvince')">
        {{ province }}
      </div>
      <div class="">
        <p class="iconfont">新型冠状病毒</p>
        <h1>疫情实时数据报告</h1>
      </div>
      <div
        class="backToHome iconfont"
        @click="$router.push('/home')"
        v-show="$route.params.provinceName"
      >
        回到首页
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    //回到主页时，是切换省份，没有storage时是切换省份，其余都是省份值
    province() {
      if (this.$route.path === "/home/country") {
        return "切换省份";
      } else {
        return this.$route.params.provinceName || "切换省份";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 1rem;
  background: url("../../assets/image/background.jpg") no-repeat;
  background-size: cover;
  color: white;
  padding: 0.3rem 0.2rem;
  letter-spacing: 0.01rem;
  .toggle {
    position: absolute;
    top: 0.25rem;
    right: 0.1rem;
    height: 0.3rem;
    padding: 0 10px;
    line-height: 0.3rem;
    opacity: 0.76;
    background: #e5feff;
    border-radius: 0.15rem;
    text-align: center;
    font-size: 0.14rem;
    color: #104345;
    &::after {
      content: " \e600";
    }
  }
  p,
  h1 {
    margin-top: 0.1rem;
  }
  p {
    display: flex;
    align-items: center;
    &::before {
      content: "\e60a";
      margin-right: 0.1rem;
      font-size: 0.3rem;
    }
    font-size: 0.18rem;
    letter-spacing: 0.02rem;
  }
  h1 {
    margin-top: 0.05rem;
    font-size: 0.28rem;
    text-shadow: black;
  }
  .backToHome {
    height: 0.22rem;
    line-height: 0.22rem;
    font-size: 0.16rem;
    margin-top: 0.09rem;
    text-align: center;
    width: 1.1rem;
    background-image: linear-gradient(270deg, #00c1c1, #00b6d2);
    border: 1px solid rgba(196, 250, 255, 0.3);
    border-radius: 0.14rem;
    &::before {
      content: "\e7c6";
    }
  }
}
</style>
