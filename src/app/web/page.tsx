
'use client';

import Link from 'next/link';
import React from 'react';
import styles from './web.module.css';
import Header from '@/components/header';
import WhatsAppButton from "@/components/WhatsAppButton";

const SistemaWebPage = () => {
  const WEB_SITE_LINK = "https://octadroid.netlify.app/";
  const WEB_SITE_LINK2 = "https://dev-matias-xi.vercel.app/";

  const wppMessage = (site: string) => {
    const phoneNumber = "5585991785953";
    const message = `Olá, gostaria de solicitar um sistema web similar ao ${site}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  return (
    <main className={styles.main}>
      <Header />

      <section className={styles.section}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Site: Octadroid</h1>
          <p className={styles.descriptionText}>
            Site feito para uma empresa de serviços de tecnologia, oferecendo soluções personalizadas e uma interface moderna para atrair novos clientes.
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.buttonVisit} onClick={() => window.open(WEB_SITE_LINK, "_blank")}>
              Visitar Site
            </button>
            <button className={styles.buttonRequest} onClick={() => wppMessage("Octadroid")}>
              Solicitar Sistema
            </button>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.iframeWrapper}>
            <iframe
              src={WEB_SITE_LINK}
              title="Miniatura do Site Octadroid"
              className={styles.iframeMockup}
            ></iframe>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Site: Matias Developer</h1>
          <p className={styles.descriptionText}>
            Portfólio profissional apresentando habilidades, projetos e experiências de forma elegante e responsiva.
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.buttonVisit} onClick={() => window.open(WEB_SITE_LINK2, "_blank")}>
              Visitar Site
            </button>
            <button className={styles.buttonRequest} onClick={() => wppMessage("Matias Developer")}>
              Solicitar Sistema
            </button>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.iframeWrapper}>
            <iframe
              src={WEB_SITE_LINK2}
              title="Miniatura do Site Matias Developer"
              className={styles.iframeMockup}
            ></iframe>
          </div>
        </div>
      </section>

      <section className={styles.infoSection}>
        <h2 className={styles.title}>Por que ter um Sistema Web?</h2>
        <p className={styles.infoText}>
          Um sistema web personalizado permite que sua empresa esteja disponível 24/7, alcance novos clientes e automatize processos internos. Nossas soluções são focadas em performance, SEO e experiência do usuário.
        </p>

        <h3 className={styles.title}>Desenvolvimento Sob Medida</h3>
        <p className={styles.infoText}>
          Precisa de algo específico? Entre em contato conosco para um orçamento personalizado em{" "}
          <a href="mailto:evanioshark@gmail.com" style={{ color: "#18cae9" }}>evanioshark@gmail.com</a>.
        </p>
      </section>

      <Link href="/" className={styles.nav}>Voltar à página principal</Link>
      <WhatsAppButton />
    </main>
  );
};

export default SistemaWebPage;
