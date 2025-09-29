import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.header}>
          <div>
          <h1 className={styles.headingLg}>
            Seja bem-vindo ao Meu Site de Negócios
          </h1>
          <p className={styles.bodyMd}>
            Oferecemos serviços de alta qualidade para ajudar o seu negócio a crescer.
          </p>
          </div>
        <Image
          className={styles.teste}
          src="/Matias.png"
          alt="Matias logo"
          width={380}
          height={180}
          
          
        />
        </div>
        

        
      </main>
      
    </div>
  );
}
