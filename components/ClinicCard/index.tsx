import React, { FC } from "react";
import Image from "next/image";
import styles from "./ClinicCard.module.sass";

import clinicPic from "../../public/ClinicImage/1.jpg";

interface ClinicCardProps {
  index: number;
}

const backgroundColors = ["#A7C5BD", "#FCAF39", "#BFBFBF"];

const ClinicCard: FC<ClinicCardProps> = ({ index }) => {
  return (
    <div
      className={styles.ClinicCard + " "}
      style={{ backgroundColor: backgroundColors[index % 3] }}
    >
      <div className={styles.workingArea}>
        <div className={styles.title}>
          <h1>Музейно-архитектурная клиника</h1>
        </div>
        <div className={styles.ClinicCardImages}>
          <Image src={clinicPic} alt="" />
        </div>
        <ul className={styles.ClinicCardLinks}>
          <li>
            <a href="https://spbu.ru/universitet/klinika-spbgu">
              <u>Подробнее</u>
            </a>
          </li>
          <li>К проектам клиники</li>
        </ul>
      </div>
    </div>
  );
};

export default ClinicCard;
