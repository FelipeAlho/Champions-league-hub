import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import styles from "./Matches.module.css";

const matches=[
  {id:1,home:"Real Madrid",away:"Liverpool",date:"12/02"},
  {id:2,home:"Bayern",away:"PSG",date:"18/02"}
];

export default function Matches(){
  return(
    <div className={styles.container}>
      <PageHeader title="Partidas" subtitle="Jogos marcantes"/>
      <table>
        <thead><tr><th>Mandante</th><th>Visitante</th><th>Data</th></tr></thead>
        <tbody>
          {matches.map(m=>(
            <tr key={m.id}><td>{m.home}</td><td>{m.away}</td><td>{m.date}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}