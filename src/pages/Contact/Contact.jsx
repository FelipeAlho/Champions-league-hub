import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import styles from "./Contact.module.css";

export default function Contact(){
  return(
    <div className={styles.container}>
      <PageHeader title="Contato" subtitle="Envie sua mensagem"/>
      <form className={styles.form}>
        <input placeholder="Nome"/>
        <input placeholder="Email"/>
        <textarea placeholder="Mensagem"/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}