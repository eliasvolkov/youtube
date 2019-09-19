import React from "react";
import styles from "../../../assets/styles/_FoundVideo.module.scss";

interface Props {
  img: string;
  title: string;
  author: string;
  description: string;
}

export const FoundVideo: React.FC<Props> = ({
  img,
  title,
  author,
  description
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.img}>
          <img src={img} />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <h3 className={styles.headline}>{title}</h3>
            <div className={styles.info}>{author}</div>
            <div className={styles.info}>45 тыс. просмотров</div>
            <div className={styles.info}> Неделю назад</div>
          </div>
          <div className={styles.descr}>{`${description.slice(0, 55)}...`}</div>
        </div>
      </div>
    </div>
  );
};
