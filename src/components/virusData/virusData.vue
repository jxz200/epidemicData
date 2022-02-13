<template>
  <div>
    <i class="decoration"></i>
    <h3>国内疫情</h3>
    <p class="time">数据更新至 {{ virusInfo.modifyTime | time }}</p>
    <div class="virusData">
      <div class="firstLine">
        <ul>
          <p>现有确诊</p>
          <span>{{ virusInfo.currentConfirmedCount | comma }}</span>
          <p>
            较昨日 <i>{{ virusInfo.currentConfirmedIncr | modifyNumber }}</i>
          </p>
        </ul>
        <ul class="">
          <p>累计死亡</p>
          <span>{{ virusInfo.deadCount | comma }}</span>
          <p>
            较昨日 <i>{{ virusInfo.deadIncr | modifyNumber }}</i>
          </p>
        </ul>
        <ul class="">
          <p>累计确诊</p>
          <span>{{ virusInfo.confirmedCount | comma }}</span>
          <p>
            较昨日 <i>{{ virusInfo.confirmedIncr | modifyNumber }}</i>
          </p>
        </ul>
      </div>
      <div class="secondLine">
        <ul class="">
          <p>累计治愈</p>
          <span>{{ virusInfo.curedCount | comma }}</span>
          <p>
            较昨日 <i>{{ virusInfo.curedIncr | modifyNumber }}</i>
          </p>
        </ul>
        <ul class="">
          <p>累计境外输入</p>
          <span>{{ virusInfo.suspectedCount | comma }}</span>
          <p>
            较昨日 <i>{{ virusInfo.suspectedIncr | modifyNumber }}</i>
          </p>
        </ul>
        <ul class="">
          <p>现存无症状</p>
          <span>{{ virusInfo.seriousCount | comma }}</span>
          <p>
            较昨日 <i>{{ virusInfo.seriousIncr | modifyNumber }}</i>
          </p>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    console.log(this.virusInfo);
  },
  computed: {
    //获取store里的数据
    ...mapState(["virusInfo"]),
  },
  filters: {
    //增加的数字若为非负，则前面加一个 + 号
    modifyNumber(number) {
      return number >= 0 ? "+" + number : number;
    },
    //每千分位加，
    comma(number) {
      return number ? number.toLocaleString() : "";
    },
    //时间戳转换
    time(value) {
      let d = new Date(value);
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();
      let hour = d.getHours();
      let minute = d.getMinutes();
      let second = d.getSeconds();
      return `${year}.${month}.${day} ${hour}:${minute}:${second}`;
    },
  },
};
</script>

<style scoped lang="scss">
div {
  padding: 0 0.1rem;
  margin-top: 0.1rem;
  font-size: 0.15rem;
  h3 {
    border-left: 0.1rem #0ea7af solid;
    padding-left: 0.1rem;
  }
  .time {
    color: gray;
    padding-left: 0.3rem;
    margin-top: 0.05rem;
    font-size: 0.14rem;
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
}
.virusData {
  border-radius: 0.2rem;
  box-shadow: 0px 0px 0.04rem #7d7d7d;
  height: 2.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .firstLine,
  .secondLine {
    display: flex;
    justify-content: center;
    ul {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      p,
      span {
        margin-bottom: 0.05rem;
      }
      span {
        color: #0ea5ae;
        font-size: 0.2rem;
        font-weight: 800;
      }
      i {
        color: orange;
      }
    }
  }
  .firstLine {
    margin-bottom: 0.1rem;
  }
}
</style>
