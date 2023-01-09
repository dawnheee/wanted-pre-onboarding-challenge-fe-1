import React from "react";
import { logInState } from "../../recoil";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

function LogOut() {
  const setIsLogIn = useSetRecoilState(logInState);

  const logOutHandler = () => {
    localStorage.removeItem("token");
    setIsLogIn(false);
  };
  return <AuthButton onClick={logOutHandler}>Logout</AuthButton>;
}

export default LogOut;

export const AuthButton = styled.button`
  background-color: #efb9b1;
  border-color: white;
  color: white;
  border-radius: 7px;
  width: 17%;

  height: auto;
  padding: 1.5%;
  font-weight: 600;
`;
