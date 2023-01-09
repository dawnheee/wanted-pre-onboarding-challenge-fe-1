import React, { useEffect, useState } from "react";
import { getAPI } from "../../../Axios/APIs";
import { useRecoilState } from "recoil";
import { renderHandler } from "../../../recoil";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function ListTodo() {
  const [todoList, setTodoList] = useState([]);
  const [isLoad, setIsLoad] = useRecoilState(renderHandler);
  const navigate = useNavigate();

  useEffect(() => {
    getAPI("/todos").then((res) => {
      if (res.data) {
        setTodoList(res.data);
      }
    });
  }, [isLoad]);

  console.log(todoList);

  const selectHandler = (id) => {
    navigate(`?id=${id}`);
  };

  return (
    <ListSection>
      <TodoList>
        {todoList &&
          todoList.map((i) => (
            <Item key={i.id} onClick={() => selectHandler(i.id)}>
              <div>{i.title}</div>
              <div>{i.content}</div>
            </Item>
          ))}
      </TodoList>
    </ListSection>
  );
}

export default ListTodo;

const ListSection = styled.section`
  width: 350px;
  padding: 1%;
`;

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  background-color: white;
  box-shadow: 0px 0px 1px 0;
  list-style: none;
  border-radius: 10px;
  height: 8vh;
  margin-bottom: 2vh;
  display: flex;
  flex-direction: column;
  padding: 2%;

  div:first-child {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;
