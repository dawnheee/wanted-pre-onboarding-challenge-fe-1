import React, { useEffect, useState } from "react";
import { putAPI } from "../../../Axios/APIs";
import { renderHandler } from "../../../recoil";
import { useRecoilState } from "recoil";
import { DetailItem, DetailSection } from "../../Styled-components/Common";

function ModifyTodo({ setIsModify, isModiFy, data, id }) {
  const [modifyData, setModifyData] = useState({});
  const [modifyTitle, setModifyTitle] = useState(data.title);
  const [modifyContent, setModifyContent] = useState(data.content);
  const [isLoad, setIsLoad] = useRecoilState(renderHandler);

  const titleChange = (e) => {
    setModifyTitle(e.currentTarget.value);
  };
  const contentChange = (e) => {
    setModifyContent(e.currentTarget.value);
    console.log(modifyContent);
  };

  useEffect(() => {
    setModifyData({
      title: modifyTitle,
      content: modifyContent,
    });
  }, [modifyTitle, modifyContent]);

  //수정 데이터 전송
  const submitHandler = () => {
    putAPI(`/todos/${id}`, modifyData).then((res) => {
      console.log(res);
      setIsLoad(!isLoad);
    });
  };

  return (
    <DetailSection>
      <input
        name="title"
        value={modifyTitle || ""}
        onChange={titleChange}
        type="text "
      ></input>

      <input
        name="content"
        value={modifyContent || ""}
        onChange={contentChange}
        type="text "
      ></input>
      <section>
        <button onClick={submitHandler}>확인</button>
        <button onClick={() => setIsModify(!isModiFy)}>취소</button>
      </section>
    </DetailSection>
  );
}

export default ModifyTodo;
