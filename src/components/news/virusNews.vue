<template>
  <div class="container">
    <i></i>
    <img src="../../assets/image/hot.png" alt="" />
    <div v-for="item in virusNews" :key="item.index" class="hotNews">
      <span class="time">
        {{ time(item.pubDate) }}
      </span>
      <div class="newsTextBox iconfont" @click="jumpTo(item.sourceUrl)">
        {{ item.title }}
      </div>
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
    time() {
      return function (time) {
        return new Date(time).toLocaleString("chinese", {
          hour12: false,
        });
      };
    },
    ...mapState(["virusNews"]),
  },
  methods: {
    jumpTo(url) {
      window.open(url);
    },
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
    margin-left: 0.08rem;
  }
  img {
    width: 0.8rem;
  }
  .hotNews {
    margin-top: 0.1rem;
    margin-bottom: 0.2rem;
    font-size: 0.14rem;
    letter-spacing: 0.01rem;
    padding: 0 0.3rem;
    .time {
      color: #999;
      display: block;
      display: flex;
      align-items: center;
      &::before {
        content: "";
        position: absolute;
        left: 0.15rem;
        // top: 0.1rem;
        width: 0.15rem;
        height: 0.15rem;
        box-sizing: border-box;
        background: #0faeb5;
        border-radius: 0.15rem;
        border-color: #cfeff0;
        border: 0.03rem solid #cfeff0;
      }
    }
    .newsTextBox {
      border-radius: 0.1rem;
      margin-top: 0.1rem;
      padding-left: 0.1rem;
      padding-right: 0.7rem;
      background-color: #f5f6f7;
      color: #4d5054;
      font-weight: 700;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      line-height: 0.25rem;
      height: 0.6rem;
      letter-spacing: 0.01rem;
      position: relative;
      &::after {
        position: absolute;
        right: 0.2rem;
        font-size: 0.2rem;
        color: #999;
        content: "\e775";
      }
    }
  }
}
</style>
