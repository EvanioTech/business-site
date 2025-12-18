import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/components/header";

// URL para o Google (Será o source do iframe)
const WEB_SITE_LINK = "https://octadroid.netlify.app/";

// URL pública de imagem de exemplo
const ANDROID_APP_SCREENSHOT_SRC = "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#121212", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <div className={styles.page}>

        <main className={styles.main}>
          <div className={styles.header}>
            <div>
              <h1 className={styles.headingLg}>
                Seja bem-vindo(a) à Octadroid Tech
              </h1>
              <p className={styles.bodyMd}>
                Oferecemos **soluções de tecnologia personalizadas** e de alta qualidade para impulsionar o seu negócio.
              </p>
            </div>
            <Image
              className={styles.teste}
              src="/Matias.png"
              alt="Matias logo - Octadroid Tech"
              width={380}
              height={180}
            />
          </div>
          <div className={styles.ctas2}>
            <h2 className={styles.headingLg2}>
              Nossos Serviços em Destaque
            </h2>
          </div>

          {/* NOVO BLOCO: Implementação do Iframe */}
          <div className={styles.iframeContainer}>
            <h3 className={styles.iframeTitle}>Site : Octadroid</h3>
            <div className={styles.iframeWrapper}>
              {/* O Google PROVAVELMENTE BLOQUEARÁ esta incorporação por segurança. */}
              <iframe
                src={WEB_SITE_LINK}
                title="Miniatura do Site Google"
                className={styles.iframeMockup}
                frameBorder="0"
              ></iframe>
            </div>

          </div>

          {/* BLOCO MANTIDO: Aplicativos Android com imagem pública */}
          <div className={styles.serviceExample}>
            <Image
              src={ANDROID_APP_SCREENSHOT_SRC}
              alt="Captura de tela de Aplicativo Android"
              width={300}
              height={533}
              objectFit="cover"
            />
            <p className={styles.bodyMd}>
              **Aplicativos Android**: Crie experiências móveis intuitivas e funcionais para alcançar seus clientes em qualquer lugar.
            </p>
          </div>







          <div className={styles.grid}>
            <Link href="/web" className={styles.card}>
              <h3>Sistemas Web &rarr;</h3>
              <p>Desenvolvimento de **sistemas web personalizados**, escaláveis e de alta performance para atender às necessidades do seu negócio.</p>

            </Link>

            <Link href="/android" className={styles.card}>
              <h3>Aplicativos Android &rarr;</h3>
              <p>Criação de **aplicativos Android** intuitivos e funcionais, garantindo uma experiência de usuário excepcional.</p>
            </Link>



            <Link href="/suporte" className={styles.card}>
              <h3>Suporte Técnico &rarr;</h3>
              <p>Fornecemos suporte técnico **confiável e proativo** para garantir que seus sistemas estejam sempre funcionando perfeitamente, 24/7.</p>
            </Link>
          </div>

        </main>

      </div>
    </div>
  );
}