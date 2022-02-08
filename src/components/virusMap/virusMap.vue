<template>
  <div>
    <h3>疫情地图</h3>
    <van-tabs
      animated
      @click="getCurConfirmedMap"
      color="#0fa8b0"
      line-width="1rem"
      title-active-color="#0fa8b0"
    >
      <van-tab title="现存确诊">
        <div id="main1" style="width: 3.6rem; height: 3rem">This is map</div>
      </van-tab>
      <van-tab title="累计确诊">
        <div id="main2" style="width: 3.6rem; height: 3rem">haha</div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapState } from "vuex";
import * as echarts from "echarts";
import "echarts/map/js/china.js";
export default {
  computed: {
    ...mapState(["sectionConfirmedData"]),
    ...mapState(["sectionCurConfirmedData"]),
  },
  mounted() {
    this.$nextTick(() => {
      this.getMap("main1", this.sectionConfirmedData);
    });
  },
  updated() {},
  methods: {
    //获取echarts中国地图
    getMap(id, dataArr) {
      console.log(document.getElementById(id));
      let myChart = echarts.init(document.getElementById(id));
      // 绘制图表
      let option = {
        visualMap: {
          //地图图例
          orient: "horizontal", //水平排布
          show: true,
          left: 24,
          bottom: 0,
          showLabel: true,
          pieces: [
            //根据数据大小，各省显示不同颜色
            {
              gte: 100,
              label: ">= 1000",
              color: "#1f307b",
            },
            {
              gte: 500,
              lt: 999,
              label: "500 - 999",
              color: "#3c57ce",
            },
            {
              gte: 100,
              lt: 499,
              label: "100 - 499",
              color: "#6f83db",
            },
            {
              gte: 10,
              lt: 99,
              label: "10 - 99",
              color: "#9face7",
            },
            {
              lt: 10,
              label: "<10",
              color: "#bcc5ee",
            },
          ],
        },
        geo: {
          //中国地图设置
          map: "china",
          scaleLimit: {
            min: 1,
            max: 3,
          },
          zoom: 1, //地图缩放比例

          label: {
            normal: {
              show: true, //是否显示文字
              fontSize: "8", //文字大小
              color: "rgba(0,0,0,0.7)",
            },
          },
          itemStyle: {
            normal: {
              areaColor: "#ffffff",
              borderColor: "rgba(0, 0, 0, 0.2)",
            },
            emphasis: {
              areaColor: "rgba(255,100,0,0.8)",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: "rgba(0,0,0,0.5)",
              borderWidth: 0,
              shadowBlur: 20,
            },
          },
        },
        series: [
          {
            name: "中国",
            type: "map", //配置图表类型
            map: "china",
            roam: "是否允许自动缩放",
            geoIndex: 0,
            data: dataArr,
          },
        ],
      };

      myChart.setOption(option);
    },

    getCurConfirmedMap() {
      this.$nextTick(() => {
        this.getMap("main2", this.sectionCurConfirmedData);
      });
    },
    shit() {
      console.log("你好");
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  margin-top: 0.1rem;
  font-size: 0.15rem;
}
h3 {
  border-left: 0.1rem #0ea7af solid;
  padding-left: 0.1rem;
  margin-left: 0.1rem;
}
</style>
