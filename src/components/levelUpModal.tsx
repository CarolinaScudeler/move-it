import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import close from "../../public/icons/close.svg";
import Image from "next/image";
import styles from "../styles/components/LevelUpModal.module.css";

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overLay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <Image src={close} alt="Fechar modal" width="40" height="40" />
        </button>
      </div>
    </div>
  );
}
