<template>
  <div>
    <div class="views">
      <van-tabs scrollspy sticky color="#0fa8b0" line-width="1rem" title-active-color="#0fa8b0">
        <van-tab title="疫情热点 "> <VirusNews></VirusNews> </van-tab>
        <van-tab title="疫情数据"> <VirusData></VirusData> </van-tab>
        <van-tab title="疫情地图 "> <VirusMap :key="key"></VirusMap> </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import api from "@/api/index";
import VirusNews from "@/components/news/virusNews";
import VirusData from "@/components/virusData/virusData.vue";
import VirusMap from "@/components/virusMap/virusMap.vue";
export default {
  data() {
    return {
      virusNews: [],
      key: 1,
      clientWidth: 0,
    };
  },
  components: {
    VirusNews,
    VirusData,
    VirusMap,
  },
  created() {
    sessionStorage.clear(); //清除存储，让右上角的省份变为默认的切换省份
    this.StoreSectionData();
    this.watchWidth();
  },
  watch: {
    clientWidth() {
      this.key++;
    },
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
      // const result2 = {};
      const result2 = await api.getSectionData(); //获取各地区数据
      console.log(result2);
      const sectionDataArray = result2.data.retdata;
      const cleanedConfirmedsectionData = this.SectionDataFilter(sectionDataArray, "confirm");
      const cleanedCurConfirmedsectionData = this.SectionDataFilter(sectionDataArray, "curConfirm");
      this.addSectionConfirmedData(cleanedConfirmedsectionData);
      this.addSectionCurConfirmedData(cleanedCurConfirmedsectionData);
    },
    //获取疫情数据并储存在vuex中
    StoreVirusData() {
      // api.getEpidemicData().then(res => {
      //   console.log(res,"res")
      //   console.log(res.data.results[0])
      //
      // }); //获取疫情新闻和基本信息
      // this.addVirusNews(news); //调用store里的action方法
      // this.addVirusInfo(desc);
    },
    //监听窗口的宽度，一旦窗口变化，就记录clienteidth
    watchWidth() {
      const that = this;
      window.onresize = function () {
        console.log("sesize被调用了");
        that.clientWidth = document.documentElement.clientWidth;
        console.log(that.clientWidth);
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.views {
  margin-top: -0.2rem;
  border-radius: 0.15rem;
  overflow: hidden;
}
</style>
