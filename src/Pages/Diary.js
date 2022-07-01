import React from "react";
import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Dairy</h1>
      <p>이곳은 리뷰다이어리 상세페이지입니다</p>
    </div>
  );
};

export default Diary;
