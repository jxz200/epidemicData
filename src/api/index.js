import base from "./base";
import axios from "axios";

const api = {
  //获取基本疫情数据和新闻
  getEpidemicData() {
    return axios.get(base.host + base.params);
  },
  //获取中国各地区疫情数据
  getSectionData() {
    return axios.get(base.host2 + base.params2);
  },
};

export default api;
