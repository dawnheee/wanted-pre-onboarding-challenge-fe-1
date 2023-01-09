import styled from "styled-components";

export const AuthSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: aliceblue;
  section {
    height: 40vh;
    background-color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 1%;
    box-shadow: 1px 1px 1px 1px lightgray;
  }
  div {
    font-size: 2rem;
    font-weight: 700;
    color: coral;
    margin: 5%;
  }
  form {
    height: 70%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    width: 20vw;
  }
  input {
    width: 75%;
    height: 3vh;
    border: 1px solid lightgray;
    padding-left: 2%;
  }
  button {
    height: 5vh;
    width: 80%;
    background-color: aliceblue;
    border: 1px solid lightgray;
  }
`;

export const Background = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: aliceblue;
`;

export const DetailSection = styled.section`
  width: 350px;
  padding: 1%;
  display: flex;
  flex-direction: column;
  section {
    display: flex;
    justify-content: flex-end;
    margin-top: 2%;
  }
  input {
    margin: 2%;
    box-shadow: 0px 0px 1px 0;
    border-radius: 6px;
    border: 0px;
    padding-left: 2%;
  }
  input:nth-child(1) {
    height: 3.5vh;
  }
  input:nth-child(2) {
    min-height: 20vh;
  }
  button {
    background-color: lightblue;
    border-color: white;
    color: whitesmoke;
    font-weight: 700;
    border-radius: 5px;
    width: 90%;
    padding: 2%;
    height: 5vh;
  }
`;

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  min-height: 20vh;
  border-radius: 10px;
  padding: 2%;
  margin-top: 4%;
  box-shadow: 0px 0px 1px 0;
`;
