import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { DiaryStateContext } from "./../App";
import MyHeader from "../Components/MyHeader";
import MyButton from "../Components/MyButton";

import { starList } from "../util/star";
import { getStringDate } from "../util/date";

const Diary = () => {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (targetDiary) {
        setData(targetDiary);
      } else {
        alert("없는 일기입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  if (!data) {
    return <div className="DairyPage">로딩중입니다... </div>;
  } else {
    const curStarData = starList.find(
      (it) => parseInt(it.star_id) === parseInt(data.star)
    );

    return (
      <div className="DiaryPage">
        <div>
          <MyHeader
            headText={`${getStringDate(new Date(data.date))}리뷰`}
            leftChild={
              <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
            }
            rightChild={
              <MyButton
                text={"수정하기"}
                onClick={() => navigate(`/edit/${data.id}`)}
              />
            }
          />
        </div>
        <article>
          <section>
            <h4>오늘의 감정</h4>
            <div
              className={[
                "diary_img_wrapper",
                `diary_img_wrapper_${data.star}`,
              ].join(" ")}
            >
              <img src={curStarData.star_img} />
              <div className="star_des">{curStarData.star_des}</div>
            </div>
          </section>
          <section>
            <h4>오늘의 일기</h4>
            <div className="diary_content_wrapper">
              <p>{data.content}</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
};

export default Diary;
