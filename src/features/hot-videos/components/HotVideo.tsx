import React from "react";

interface Props {
  img: string;
  title: string;
  author: string;
  views: string;
}

export const HotVideo: React.FC<Props> = ({ img, title, author, views }) => {
  return (
    <div className="card">
      <div className="img">
        <img src={img} alt="video-img" />
      </div>
      <h3 className="headline">{title}</h3>
      <div className="author">{author}</div>
      <div className="views">просмотров {views} тыс.</div>
      <div className="time"> Неделю назад</div>
    </div>
  );
};
