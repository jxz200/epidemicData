<template>
  <div>
    <header>
      <div>
        <p>新型冠状病毒</p>
        <h1>疫情实时数据报告</h1>
      </div>
    </header>
    <div class="views">
      <van-tabs
        scrollspy
        sticky
        color="#0fa8b0"
        line-width="1rem"
        title-active-color="#0fa8b0"
      >
        <van-tab title="疫情热点 "> <VirusNews></VirusNews> </van-tab>
        <van-tab title="疫情数据"> <VirusData></VirusData> </van-tab>
        <van-tab title="疫情地图 "> <VirusMap></VirusMap> </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import api from "@/api/index";
// import VirusNews from "../news/virusNews";
import VirusData from "../virusData/virusData.vue";
import VirusMap from "../virusMap/virusMap.vue";
export default {
  data() {
    return {
      virusNews: [],
    };
  },
  components: {
    VirusNews: () => import("../news/virusNews"),
    VirusData,
    VirusMap,
  },
  created() {
    this.StoreVirusData();
    this.StoreSectionData();
  },
  methods: {
    //调用store的addVirusNews
    ...mapMutations(["addVirusNews"]),
    //调用store的addVirusInfo
    ...mapMutations(["addVirusInfo"]),
    ...mapMutations(["addSectionConfirmedData"]),
    ...mapMutations(["addSectionCurConfirmedData"]),
    //对中国地图地区疫情数据进行清洗
    SectionDataFilter(array, prop) {
      let arr = [];
      for (let item of array) {
        const obj = {};
        obj.name = item.xArea;
        obj.value = item[prop];
        arr.push(obj);
      }
      return arr;
    },
    //获取中国各地区疫情数据并储存在vuex中
    async StoreSectionData() {
      // const result2 = await api.getSectionData(); //获取各地区数据
      console.log(result2);
      const sectionDataArray = result2.data.retdata;
      const cleanedConfirmedsectionData = this.SectionDataFilter(
        sectionDataArray,
        "confirm"
      );
      const cleanedCurConfirmedsectionData = this.SectionDataFilter(
        sectionDataArray,
        "curConfirm"
      );
      this.addSectionConfirmedData(cleanedConfirmedsectionData);
      this.addSectionCurConfirmedData(cleanedCurConfirmedsectionData);
    },
    //获取疫情数据并储存在vuex中
    async StoreVirusData() {
      const result1 = await api.getEpidemicData(); //获取疫情新闻和基本信息
      const list = result1.data.newslist[0]; //list包含desc，news，是我真正想要的数据
      const { desc, news } = list;
      this.addVirusNews(news); //调用store里的action方法
      this.addVirusInfo(desc);
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
  padding: 0.3rem 0.1rem;
  letter-spacing: 0.01rem;
  p {
    font-size: 0.2rem;
  }
  h1 {
    margin-top: 0.1rem;
    font-size: 0.3rem;
  }
}
van-tabs {
  border-radius: 10px;
}
.views {
  margin-top: -0.2rem;
  border-radius: 0.15rem;
  overflow: hidden;
}
</style>
