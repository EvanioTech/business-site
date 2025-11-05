'use client';

import Link from 'next/link';
import React from 'react';
import styles from './web.module.css'; // 👈 novo import
import Header from '@/components/header';

const SistemaWebPage = () => {
  const WEB_SITE_LINK = "https://octadroid.netlify.app/";
  const WEB_SITE_LINK2 = "https://dev-matias-xi.vercel.app/";

  return (
    <div style={{ backgroundColor: "#121212", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.title}>Sistemas Web</h1>

        <section className={styles.section}>
          <div className={styles.iframeContainer}>
            <div className={styles.iframeWrapper}>
              <iframe
                src={WEB_SITE_LINK}
                title="Miniatura do Site Octadroid"
                className={styles.iframeMockup}
                frameBorder="0"
              ></iframe>
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <h3 className={styles.iframeTitle}>Site : Octadroid</h3>
            <p className={styles.descriptionText}>
              Site feito para uma empresa de serviços de tecnologia, oferecendo soluções personalizadas...
            </p>
            <button className={styles.buttonVisit} onClick={() => window.open(WEB_SITE_LINK, "_blank")}>Visitar Site</button>
            <button className={styles.buttonRequest}>Solicitar Sistema Web</button>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.iframeContainer}>
            <div className={styles.iframeWrapper}>
              <iframe
                src={WEB_SITE_LINK2}
                title="Miniatura do Site Matias Developer"
                className={styles.iframeMockup}
                frameBorder="0"
              ></iframe>
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <h3 className={styles.iframeTitle}>Site : Matias Developer</h3>
            <p className={styles.descriptionText}>
              Site pessoal de um desenvolvedor, apresentando seu portfólio, habilidades e projetos...
            </p>
            <button className={styles.buttonVisit} onClick={() => window.open(WEB_SITE_LINK2, "_blank")}>Visitar Site</button>
            <button className={styles.buttonRequest}>Solicitar Sistema Web</button>
          </div>
        </section>

        <Link href="/" className={styles.nav}>Voltar à página principal</Link>
      </main>
    </div>
  );
};

export default SistemaWebPage;
