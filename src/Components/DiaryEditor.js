import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { DiaryDispatchContext } from "./../App";
import { getStringDate } from "./../util/date";
import { starList } from "../util/star";

import MyButton from "./MyButton";
import MyHeader from "./MyHeader";
import StarItem from "./StarItem";

const DiaryEditor = ({ isEdit, originData }) => {
  const contentInput = useRef();
  const [star, setStar] = useState(3);
  const [date, setDate] = useState(getStringDate(new Date()));
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const { onCreate, onEdit, onRemove } = useContext(DiaryDispatchContext);

  const handleClickEmote = (star) => {
    setStar(star);
  };

  const handleSubmit = () => {
    if (content.length < 1) {
      contentInput.current.focus();
      return;
    }
    if (
      window.confirm(
        isEdit ? "리뷰를 수정하시겠습니까?" : "새로운 리뷰를 작성하시겠습니까?"
      )
    ) {
      if (!isEdit) {
        onCreate(date, content, star);
      } else {
        onEdit(originData.id, date, content, star);
      }
    }

    navigate("/", { replace: true });
  };

  const handleRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onRemove(originData.id);
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setStar(originData.star);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  return (
    <div className="DiaryEditor">
      <MyHeader
        headText={isEdit ? "리뷰 수정하기" : "새 리뷰쓰기"}
        leftChild={
          <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
        }
        rightChild={
          isEdit && (
            <MyButton
              text={"삭제하기"}
              type={"negative"}
              onClick={handleRemove}
            />
          )
        }
      />
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input_box">
            <input
              className="input_date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
            />
          </div>
        </section>
        <section>
          <h4>영화는 어땠나요?</h4>
          <div className="input_box star_list_wrapper">
            {starList.map((it) => (
              <StarItem
                key={it.star_id}
                {...it}
                onClick={handleClickEmote}
                isSelected={it.star_id === star}
              />
            ))}
          </div>
        </section>
        <section>
          <h4>리뷰</h4>
          <div className="input_box text_wrapper">
            <textarea
              placeholder="리뷰를 작성하세요"
              ref={contentInput}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </section>
        <section>
          <div className="control_box">
            <MyButton text={"취소하기"} onClick={() => navigate(-1)} />
            <MyButton
              text={"작성완료"}
              type={"positive"}
              onClick={handleSubmit}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
