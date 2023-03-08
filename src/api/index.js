import base from "./base";
import axios from "axios";

const api = {


  //获取中国各地区疫情数据
  getSectionData() {
    return axios.get("https://yspm.api.storeapi.net/api/94/219?format=json&appid=13935&sign=3908a8a8e8cbb5def9bbe9995d8bcaa6");
  },
  getNews() {
    return axios.get("https://interface.sina.cn/app.news/24hours_news.d.json?conf=page&page=1&pageType=kangYiNewsFlash")
  },

  getEpidemicData () {
    return axios.get("https://lab.isaaclin.cn/nCoV/api/overall")
  }

};

export default api;
