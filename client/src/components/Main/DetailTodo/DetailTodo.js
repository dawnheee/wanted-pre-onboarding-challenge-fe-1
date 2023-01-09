import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { deleteAPI, getAPI } from "../../../Axios/APIs";
import ModifyTodo from "./ModifyTodo";
import { renderHandler } from "../../../recoil";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DetailSection, DetailItem } from "../../Styled-components/Common";

function DetailTodo() {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const id = query.id;
  const [data, setData] = useState({});
  const [isModiFy, setIsModify] = useState(false);
  const [isLoad, setIsLoad] = useRecoilState(renderHandler);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getAPI(`/todos/${id}`).then((res) => {
        setData(res.data);
        console.log(data);
      });
    }
  }, [id]);

  const deleteHandler = () => {
    deleteAPI(`/todos/${id}`).then((res) => {
      console.log(res);
      setIsLoad(!isLoad);
      navigate("/");
    });
  };

  return (
    <DetailSection>
      {!isModiFy ? (
        <>
          {id && (
            <>
              <DetailItem>
                <span>{data.title}</span>
                <span>{data.content}</span>
                <span>{data.createdAt}</span>
                <span>{data.updatedAt}</span>
              </DetailItem>
              <section>
                <button onClick={() => setIsModify(!isModiFy)}>edit</button>
                <button onClick={deleteHandler}>delete</button>
              </section>
            </>
          )}
        </>
      ) : (
        <ModifyTodo
          setIsModify={setIsModify}
          isModiFy={isModiFy}
          data={data}
          id={id}
        />
      )}
    </DetailSection>
  );
}

export default DetailTodo;
