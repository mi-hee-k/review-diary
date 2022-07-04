import React from "react";

const StarItem = ({ star_id, star_img, star_des, onClick, isSelected }) => {
  return (
    <div
      onClick={() => onClick(star_id)}
      className={[
        "starItem",
        isSelected ? `starItem_on_${star_id}` : `starItem_off`,
      ].join(" ")}
    >
      <img src={star_img} />
      <span>{star_des}</span>
    </div>
  );
};

export default React.memo(StarItem);
