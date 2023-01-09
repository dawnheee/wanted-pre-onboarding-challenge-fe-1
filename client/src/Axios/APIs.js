import { instance } from "./AxiosInstance";

export const getAPI = async (url) => {
  try {
    const res = await instance.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteAPI = async (url) => {
  try {
    const res = await instance.delete(url);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const putAPI = async (url, data) => {
  try {
    const res = await instance.put(url, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const postAPI = async (url, data) => {
  try {
    const res = await instance.post(url, data);

    return res;
  } catch (error) {
    console.log(error);
  }
};
