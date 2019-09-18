import React from "react";
import styles from "../../../assets/styles/_HotVideo.module.scss";

interface Props {
  img: string;
  title: string;
  author: string;
  views: string;
}

export const HotVideo: React.FC<Props> = ({ img, title, author, views }) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={img} alt="video-img" />
      </div>
      <h3 className={styles.headline}>{title}</h3>
      <div className={styles.author}>{author}</div>
      <div className={styles.views}>просмотров {views} тыс.</div>
      <div className={styles.time}> Неделю назад</div>
    </div>
  );
};
