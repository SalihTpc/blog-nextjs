import { axios } from "./axios.lib";

class CommonApi {
  async getCategories() {
    const response = await axios.get("api/category/list/");
    return response.data;
  }
  async getAnimes() {
    const response = await axios.get("api/list/");
    return response.data;
  }
  async register(values: any) {
    const response = await axios.post("users/auth/register/", values);
    return response.data;
  }
  async login(values: any) {
    const response = await axios.post("users/auth/login/", values);
    return response.data;
  }
}

export default new CommonApi();
