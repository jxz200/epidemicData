<template>
  <div>
    <header>
      <div>
        <p>新型冠状病毒</p>
        <h1>疫情实时数据报告</h1>
      </div>
    </header>
    <VirusData></VirusData>
    <VirusNews></VirusNews>
    <VirusInfo :virusInfo="virusInfo"></VirusInfo>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import api from "@/api/index";
import VirusInfo from "../virusInfo/VirusInfo.vue";
import VirusNews from "../news/virusNews";
import VirusData from "../virusData/virusData.vue";
export default {
  data() {
    return {
      virusInfo: {},
      virusNews: [],
    };
  },
  components: {
    VirusInfo,
    VirusNews,
    VirusData,
  },
  async created() {
    const result = await api.getEpidemicData(); //获取疫情新闻和基本信息
    const list = result.data.newslist[0]; //list包含desc，news，是我真正想要的数据
    const { desc, news } = list;
    this.virusInfo = desc;
    this.addVirusNews(news); //调用store里的action方法
    this.addVirusInfo(desc);
    console.log(this.virusInfo);
  },
  methods: {
    ...mapMutations(["addVirusNews"]),
    ...mapMutations(["addVirusInfo"]),
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
  p {
    font-size: 0.2rem;
  }
  h1 {
    margin-top: 0.1rem;
    font-size: 0.3rem;
  }
}
</style>
