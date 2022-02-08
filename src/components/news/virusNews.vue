<template>
  <div class="container">
    <i></i>
    <img src="../../assets/image/hot.png" alt="" />
    <div v-for="item in virusNews" :key="item.index" class="hotNews">
      <span class="newest">最新</span>
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    console.log(this.virusNews);
  },
  computed: {
    ...mapState(["virusNews"]),
  },
};
</script>

<style scoped lang="scss">
.container {
  margin-top: 0.1rem;
  padding: 0 0.1rem;
  i {
    border-left: 0.1rem #0ea7af solid;
    margin-right: 0.1rem;
  }
  img {
    width: 0.8rem;
  }
  .hotNews {
    margin-top: 0.1rem;
    margin-bottom: 0.2rem;
    font-size: 0.14rem;
    letter-spacing: 0.01rem;
    .newest {
      display: inline-block;
      color: white;
      background-color: red;
    }
  }
}
</style>
