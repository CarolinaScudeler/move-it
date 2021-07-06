import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import levelImg from "../../public/icons/level.svg";
import Image from "next/image";
import images from "../../next.config";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <Image
        className={styles.profileImg}
        src="https://github.com/CarolinaScudeler.png"
        alt="Carolina Scudeler"
        width="80"
        height="100"
      />
      <div>
        <strong>Carolina Scudeler</strong>
        <p>
          <Image src={levelImg} alt="Level" width="0" height="20" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
