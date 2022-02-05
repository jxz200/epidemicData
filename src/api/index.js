import base from "./base";
import axios from "axios";

const api = {
  getEpidemicData() {
    return axios.get(base.host + base.params);
  },
};

export default api;
