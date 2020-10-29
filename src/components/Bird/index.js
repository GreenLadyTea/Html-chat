import React from "react";
import bird from "./angry-bird.png";
import styles from "./styles.module.css";

export default function Bird() {
  return (
    <div className={styles.bird}>
      <img src={bird} alt="bird" />
    </div>
  );
}
