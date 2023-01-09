import React from "react";
import styled from "styled-components";
import NewTodo from "../components/Main/NewTodo/NewTodo";
import DetailTodo from "../components/Main/DetailTodo/DetailTodo";
import ListTodo from "../components/Main/ListTodo/ListTodo";
import LogOut from "../components/Logout/LogOut";
import { useRecoilValue } from "recoil";
import { logInState } from "../recoil";
import { useNavigate } from "react-router-dom";
import { AuthButton } from "../components/Logout/LogOut";
import { Background } from "../components/Styled-components/Common";

function Main() {
  const isLogIn = useRecoilValue(logInState);
  const navigate = useNavigate();
  return (
    <Background>
      <section>
        <LogInSection>
          {isLogIn ? (
            <LogOut />
          ) : (
            <AuthButton onClick={() => navigate("/auth/login")}>
              Login
            </AuthButton>
          )}
        </LogInSection>

        <NewTodo />

        <ListSection>
          <ListTodo></ListTodo>
          <DetailTodo />
        </ListSection>
      </section>
    </Background>
  );
}

export default Main;

const LogInSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2%;
`;

const ListSection = styled.section`
  display: flex;
  height: auto;
  min-height: 600px;
`;
