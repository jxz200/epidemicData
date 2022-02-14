<template>
  <div>
    <van-index-bar :index-list="indexList">
      <div v-for="item in province" :key="item.title">
        <van-index-anchor :index="item.title" />
        <van-cell
          :title="subItem"
          v-for="subItem in item.lists"
          :key="subItem.index"
          @click="jump"
        />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
// import { mapMutations } from "vuex";
export default {
  data() {
    return {
      //省份数据
      province: [
        {
          title: "A",
          lists: ["安徽"],
        },
        {
          title: "B",
          lists: ["北京"],
        },
        {
          title: "C",
          lists: ["重庆"],
        },

        {
          title: "F",
          lists: ["福建"],
        },
        {
          title: "G",
          lists: ["甘肃", "广东", "广西", "贵州"],
        },
        {
          title: "H",
          lists: ["海南", "河北", "河南", "黑龙江", "湖北", "湖南"],
        },
        {
          title: "J",
          lists: ["吉林", "江苏", "江西"],
        },
        {
          title: "L",
          lists: ["辽宁"],
        },
        {
          title: "N",
          lists: ["内蒙古", "宁夏"],
        },
        {
          title: "Q",
          lists: ["青海"],
        },
        {
          title: "S",
          lists: ["山东", "山西", "陕西", "上海", "四川"],
        },
        {
          title: "T",
          lists: ["天津"],
        },
        {
          title: "X",
          lists: ["西藏", "新疆"],
        },
        {
          title: "Y",
          lists: ["云南"],
        },
        {
          title: "z",
          lists: ["浙江"],
        },
      ],
      //省份的A-Z序列集合
      indexList: [],
    };
  },
  created() {
    //提取省份序列
    // for (const item of this.province) {
    //   this.indexList.push(item.title);
    // }
    this.indexList = this.province.map((item) => item.title);
  },
  methods: {
    //跳转回主页并记录选择好的城市
    jump(e) {
      console.log(e.target.innerText);
      sessionStorage.setItem("province", e.target.innerText);
      this.$router.push(`/home/province/${e.target.innerText}`);
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .van-index-anchor {
  background-color: #f7f8fa;
}
</style>
