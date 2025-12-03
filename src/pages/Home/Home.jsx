import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import styles from "./Home.module.css";

export default function Home(){
  return(
    <div className={styles.container}>
      <PageHeader title="Champions League Hub" subtitle="Tudo sobre a maior competição da Europa"/>
      <p>Explore partidas, times e informações históricas!</p>
    </div>
  );
}