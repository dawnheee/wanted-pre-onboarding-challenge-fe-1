import axios, { AxiosError } from "axios";
import { useSetRecoilState } from "recoil";
import { logInState } from "../recoil";
import { useNavigate } from "react-router-dom";

const root = "http://localhost:8080";
const axiosConfig = {
  baseURL: root,
};
export const instance = axios.create(axiosConfig);

instance.interceptors.request.use((request) => {
  request.headers.authorization = localStorage.getItem("token");
  return request;
});

instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) return response;
  },
  (error) => {
    if (error instanceof AxiosError) {
      alert(error.response.data.details);
      if (window.confirm("로그인 페이지로 이동하시겠습니까?")) {
        const setIsLogin = useSetRecoilState(logInState);
        localStorage.removeItem("token");
        setIsLogin(false);
        const navigate = useNavigate();
        navigate("/auth/login");
      } else {
        const navigate = useNavigate();
        navigate("/");
      }
    }

    return Promise.reject(error);
  }
);
