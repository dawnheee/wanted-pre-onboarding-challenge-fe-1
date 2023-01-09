import { postAPI } from "../Axios/APIs";
import { useValid } from "../useValid";
import { useNavigate } from "react-router-dom";
import { AuthSection } from "../components/Styled-components/Common";

const SignUp = () => {
  const { onChangeHandler, userInfo, valid } = useValid();
  const navigate = useNavigate();

  const SignUpHandler = () => {
    postAPI("/users/create", { ...userInfo }).then((res) => {
      if (res.status === 200) {
        navigate("/auth/login");
      }
    });
  };

  return (
    <AuthSection>
      <section>
        <div>SignUp</div>
        <form>
          <input
            placeholder="이메일 주소를 입력해주세요"
            name="email"
            onChange={onChangeHandler}
          />
          <input
            placeholder="비밀번호를 입력해주세요"
            name="password"
            onChange={onChangeHandler}
          />
          <button
            type="button"
            onClick={SignUpHandler}
            disabled={valid.disabled}
          >
            Signup
          </button>
        </form>
      </section>
    </AuthSection>
  );
};

export default SignUp;
