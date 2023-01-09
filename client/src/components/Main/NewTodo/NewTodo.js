import React, { useState } from "react";
import { postAPI } from "../../../Axios/APIs";
import { useRecoilState } from "recoil";
import { renderHandler } from "../../../recoil";
import styled from "styled-components";

function NewTodo() {
  const [todo, setTodo] = useState({
    title: "",
    content: "",
  });
  const [isLoad, setIsLoad] = useRecoilState(renderHandler);

  let { title, content } = todo;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };
  const makeNewTodo = (event) => {
    event.preventDefault();
    console.log(todo);
    postAPI("/todos", todo).then((res) => {
      console.log(res);
    });

    setIsLoad(!isLoad);

    setTodo({
      title: "",
      content: "",
    });
  };

  return (
    <NewTodoSection>
      <form>
        <div>
          <input
            name="title"
            placeholder="title"
            onChange={handleChange}
            value={title}
          />
          <input
            name="content"
            placeholder="content"
            onChange={handleChange}
            value={content}
          />
        </div>
        <button onClick={makeNewTodo}>submit</button>
      </form>
    </NewTodoSection>
  );
}

export default NewTodo;

const NewTodoSection = styled.section`
  width: 100%;

  form {
    display: flex;
    justify-content: space-between;
    height: 15vh;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
  input {
    border-radius: 10px;
    padding: 2%;
    margin-bottom: 2%;
    border-color: aliceblue;
  }
  input:nth-child(1) {
    min-height: 2vh;
  }
  input:nth-child(2) {
    min-height: 5vh;
  }
  button {
    border-radius: 10px;
    width: 17%;
    margin-bottom: 2%;
    background-color: lightblue;
    border-color: white;
    color: white;
    font-size: large;
    font-weight: 700;
  }
`;
