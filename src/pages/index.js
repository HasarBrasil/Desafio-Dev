import styles from "../styles/home.module.css";

export default function Home() {
  const extrairDadosPlanilhaExcel = async (event) => {
    let file = event.target.files[0];

    console.log("Extrair dados planilha");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Desafio Dev</h1>
      <span className={styles.caption}>
        Clique <a href="/produtos.xlsx">aqui</a> para baixar o modelo de arquivo
      </span>
      <hr />

      <div className={styles.form}>
        <input type="file" accept="xlsx" onChange={extrairDadosPlanilhaExcel} />
      </div>
    </div>
  );
}
