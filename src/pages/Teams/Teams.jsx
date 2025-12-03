import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import styles from "./Teams.module.css";

const teams=[
  {id:1,name:"Real Madrid",country:"Espanha"},
  {id:2,name:"AC Milan",country:"Itália"},
  {id:3,name:"Liverpool",country:"Inglaterra"}
];

export default function Teams(){
  return(
    <div className={styles.container}>
      <PageHeader title="Times" subtitle="Clubes lendários da Champions"/>
      <ul>
        {teams.map(t=>(
          <li key={t.id}>{t.name} - {t.country}</li>
        ))}
      </ul>
    </div>
  );
}