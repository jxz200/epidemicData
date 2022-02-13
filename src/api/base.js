const base = {
  host: "http://api.tianapi.com/ncov/index", //天行数据 --新冠病毒消息
  host2: "https://yspm.api.storeapi.net/api/94/219", //挖数据--中国疫情情况
  host3: "https://interface.sina.cn/news/wap/fymap2020_data.d.json", //新浪疫情数据
  params: "?key=d619b8c2f104bb099ae157aa90951225", //请求参数
  params2: "?format=json&appid=13935&sign=3908a8a8e8cbb5def9bbe9995d8bcaa6", //挖数据--中国疫情情况请求参数
};

export default base;
