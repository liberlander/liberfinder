import Image from "next/image";
import styles from "./ResponseDiv.module.css";
import { useContext } from "react";
import { responseContext } from "@/context/responseContext";

const ResponseDiv = ({ escrachado }) => {
  const { setVisible } = useContext(responseContext);

  const title = escrachado
    ? "✅ Estás en las listas de los orkos"
    : "💔 No estás en la lista negra kuka";
  const img = escrachado ? "/images/false.jpg" : "/images/true.jpg";
  const color = escrachado ? "red" : "green";

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.titleBar}>
        <h3>{title}</h3>
        <button className={styles.button} onClick={closeModal}>
          x
        </button>
      </div>
      <Image
        src={img}
        alt="Escrachado"
        width={300}
        height={300}
        className={styles.img}
      />
      <strong>* recordá usar mayúsculas si tu usuario las tiene</strong>
    </div>
  );
};

export default ResponseDiv;
