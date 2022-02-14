<template>
  <div class="box">
    <h3>疫情地图</h3>
    <van-tabs
      animated
      @click="getCurConfirmedMap"
      color="#0fa8b0"
      line-width="1rem"
      title-active-color="#0fa8b0"
    >
      <van-tab title="现存确诊">
        <div id="main1">This is map</div>
      </van-tab>
      <van-tab title="累计确诊">
        <div id="main2">haha</div>
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
  created() {
    console.log(this.sectionCurConfirmedData);
  },
  watch: {
    //当vuex数据变化时,渲染地图
    sectionCurConfirmedData() {
      this.$nextTick(() => {
        this.getMap("main1", this.sectionCurConfirmedData);
      });
    },
    clientWidth() {
      console.log("width被调用了");
      this.showMap = false;

      this.$nextTick(() => {
        this.showMap = true;
        // this.getMap("main1", this.sectionCurConfirmedData);
      });
    },
  },
  mounted() {
    //待dom渲染完成之后再渲染地图
    this.$nextTick(() => {
      this.getMap("main1", this.sectionCurConfirmedData);
    });
  },
  methods: {
    //获取echarts中国地图
    getMap(id, dataArr) {
      console.log(document.getElementById(id));
      let myChart = echarts.init(document.getElementById(id));
      // 绘制图表
      const option = {
        tooltip: {
          triggerOn: "click",
          enterable: true,
          formatter(data) {
            return `<a style="color:white" href="#/home/province/${data.name}">&nbsp; ${data.name}: ${data.value} &nbsp; | &nbsp; 查看详情 > </a> `;
          },
        },
        visualMap: {
          //地图图例
          orient: "colomn", //水平排布
          show: true,
          left: 24,
          bottom: 0,
          showLabel: true,
          pieces: [
            //根据数据大小，各省显示不同颜色
            {
              gte: 10000,
              label: ">= 10000",
              color: "#b80909",
            },
            {
              gte: 1000,
              lt: 9999,
              label: "1000 - 9999",
              color: "#e64546",
            },
            {
              gte: 100,
              lt: 999,
              label: "100 - 999",
              color: "#f57567",
            },
            {
              gte: 10,
              lt: 99,
              label: "10 - 99",
              color: "#ff9985",
            },
            {
              gte: 1,
              lt: 10,
              label: "1-9",
              color: "#ffe5db",
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

          y: 20,
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
    //累计和现有地图切换
    getCurConfirmedMap(title) {
      this.$nextTick(() => {
        if (title === 0) {
          this.getMap("main1", this.sectionCurConfirmedData);
        }
        if (title === 1) {
          this.getMap("main2", this.sectionConfirmedData);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  margin-top: 0.2rem;
  font-size: 0.15rem;
}
h3 {
  // margin-left: 0.08rem;
  border-left: 0.1rem #0ea7af solid;
  padding-left: 0.1rem;
  margin-left: 0.18rem;
}
#main1,
#main2 {
  background-color: rgb(248, 249, 250);
  height: 3.5rem;
}
</style>
