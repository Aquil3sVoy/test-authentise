import api from "src/modules/shared/axios/useApiIntance";

// This is an example of a service class that uses the axios instance to make requests
// Object oriented programming is not required for this boilerplate, but it is a good practice

export default class BaseService {
  static async random() {
    const response = await api.get(`/breeds/image/random`);
    return response.data;
  }
}
