import React, { useEffect, useState } from "react";
import ContentStyle from "../css/content.module.css";
import styles from "../css/modal.module.css";
import dummyData from "../dummy.json";
console.log(dummyData);

const Content = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickFood, setClickFood] = useState({});

  const openModal = (item) => {
    setClickFood(item);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={ContentStyle.content}>
      <div className={ContentStyle.cardContainer}>
        <h2>Your favourite Nigerian food</h2>
        <div className={ContentStyle.card}>
          {dummyData?.map((food) => (
            <div className={ContentStyle.item}>
              <img src={food.image_url} alt="efo-riro" />
              <div>
                <h2>{food.title}</h2>
                <p className={ContentStyle.likes}>
                  <img
                    src="https://www.freeiconspng.com/thumbs/facebook-love-png/facebook-love-png-6.png"
                    alt="like icon"
                  />
                  <p>{food.likes} Likes</p>
                </p>
                <div className={ContentStyle.buttonStyle}>
                  <button onClick={() => openModal(food)}>Comment</button>
                  <button>Reservation</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.closeIcon} onClick={closeModal}>
                &times;
              </span>
              <img src={clickFood.image_url} alt="efo-riro" />
              <h2>{clickFood.title}</h2>
              {clickFood.comments?.map((comment, index) => (
                <div className={styles.commentProperty}>
                  <div className={styles.commentInputApi}>
                    <p>Comment(1)</p>
                    <p className={styles.date}>{comment.date}</p>
                    <p className={styles.userInfo}>
                      {comment.name}: {comment.comment}
                    </p>
                  </div>
                  <div className={styles.commentInput}>
                    <p>Add a comment</p>
                    <input placeholder="Enter your name"></input>
                    <textarea
                      placeholder="Comments..."
                      cols={20}
                      rows={5}
                    ></textarea>
                    <button className={styles.submitComment}>Comment</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
