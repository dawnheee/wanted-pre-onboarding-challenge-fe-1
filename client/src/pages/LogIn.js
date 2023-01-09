import { postAPI } from "../Axios/APIs";
import { useValid } from "../useValid";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { logInState } from "../recoil";
import { AuthSection } from "../components/Styled-components/Common";

const LogIn = () => {
  const { onChangeHandler, userInfo, valid } = useValid();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(logInState);

  const LogInHandler = () => {
    postAPI("/users/login", { ...userInfo }).then((res) => {
      if (res?.status === 200) {
        localStorage.setItem("token", res.data.token);
        setIsLogin(true);
        navigate("/");
      }
    });
  };

  return (
    <AuthSection>
      <section>
        <div>LogIn</div>
        <form>
          <input name="email" onChange={onChangeHandler} placeholder="email" />
          <input
            name="password"
            onChange={onChangeHandler}
            placeholder="비밀번호를 입력해주세요"
          />
          <button
            type="button"
            onClick={LogInHandler}
            disabled={valid.disabled}
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/auth/signup");
            }}
          >
            Sign Up
          </button>
        </form>
      </section>
    </AuthSection>
  );
};

export default LogIn;
