<template>
  <div>
    <div class="title">
      <span>地区</span>
      <span>无症状</span>
      <span>现有</span>
      <span>累计</span>
      <span>治愈</span>
      <span>死亡</span>
    </div>
    <div class="province">
      <span>{{ provinceName }}</span>
      <span>{{ sectionData.asymptomatic }}</span>
      <span>{{ sectionData.curConfirm }}</span>
      <span>{{ sectionData.confirm }}</span>
      <span>{{ sectionData.heal }}</span>
      <span>{{ sectionData.died }}</span>
    </div>
    <template v-for="item in sectionData.subList">
      <div class="city" :key="item.index">
        <span>{{ item.city }}</span>
        <span>{{ item.asymptomatic }}</span>
        <span>{{ item.curConfirm }}</span>
        <span>{{ item.confirm }}</span>
        <span>{{ item.heal }}</span>
        <span>{{ item.died }}</span>
      </div>
    </template>
  </div>
</template>

<script>
import api from "@/api/index";
export default {
  data() {
    return {
      sectionData: [],
      provinceName: this.$route.params.provinceName,
    };
  },
  created() {
    this.getSectionData();
  },
  methods: {
    async getSectionData() {
      // const result2 = await api.getSectionData(); //获取各地区数据
      const allSectionsData = result2.data.retdata;
      this.sectionData = allSectionsData.find(
        (item) => item.xArea === this.provinceName
      ); //返回我们想要的省份的数据
      console.log(this.sectionData);
    },
  },
};
</script>

<style lang="scss" scoped>
.title,
.province,
.city {
  padding: 0 0.1rem;
  display: flex;
  height: 0.3rem;
  margin-top: 0.05rem;
  span {
    flex: 1;
    text-align: center;
    line-height: 0.3rem;
    background-color: #f5f6f7;
    font-size: 0.14rem;
    margin-right: 0.01rem;
  }
  & :first-child {
    flex: 1.5;
  }
}
.province {
  & :first-child {
    background-color: #00bec9;
    color: white;
  }
}
.city {
  span {
    background-color: white;
  }
  & :first-child {
    color: #00bec7;
    &::after {
      content: " >";
    }
  }
}
</style>
