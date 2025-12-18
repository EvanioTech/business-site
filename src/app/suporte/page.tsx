
"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/header";
import styles from "./suporte.module.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function SuportePage() {
    
    const wppMessage = () => {
        const phoneNumber = "5585991785953"; // Substitua pelo número de telefone desejado
        const message = "Olá, gostaria de solicitar suporte de TI."; // Mensagem padrão
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    }

    return (
        <main className={styles.main}>
            <Header />
            
            <section className={styles.section}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        Formatação de Computadores/Notebooks
                    </h1>
                    <p className={styles.description}>
                        Seu dispositivo está lento ou com problemas? Nossa equipe oferece um serviço de formatação completo e seguro.
                    </p>

                    <div className={styles.buttonContainer}>
                        <button className={styles.buttonLink} onClick={wppMessage}>
                            Solicitar Formatação
                        </button>
                    </div>

                    <ul className={styles.featureList}>
                        <li>* Seu notebook está lento?</li>
                        <li>* Problemas com vírus ou malwares?</li>
                        <li>* Dificuldades com o sistema operacional?</li>
                        <li>* Outros problemas?</li>
                    </ul>
                </div>

                <div className={styles.imageContainer}>
                    <Image
                        src="/format.jpg"
                        alt="Formatação de Computadores"
                        width={270}
                        height={180}
                        className={styles.image}
                        priority
                    />
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        Reparo de Computadores/Notebooks
                    </h1>
                    <p className={styles.description}>
                        Problemas de hardware ou tela azul? Realizamos reparos técnicos especializados para deixar seu equipamento novo de novo.
                    </p>

                    <div className={styles.buttonContainer}>
                        <button className={styles.buttonLink} onClick={wppMessage}>
                            Solicitar Reparo
                        </button>
                    </div>

                    <ul className={styles.featureList}>
                        <li>* Seu notebook está apresentando problemas?</li>
                        <li>* Tela azul da morte?</li>
                        <li>* Problemas com hardware?</li>
                        <li>* Outros problemas?</li>
                    </ul>
                </div>

                <div className={styles.imageContainer}>
                    <Image
                        src="/fix.jpg"
                        alt="Reparo de Computadores"
                        width={270}
                        height={180}
                        className={styles.image}
                        priority
                    />
                </div>
            </section>

            <section className={styles.infoSection}>
                <h2 className={styles.title}>Por que escolher nosso suporte?</h2>
                <p className={styles.infoText}>
                    Nossa equipe de TI é altamente qualificada para lidar com diversos problemas técnicos, desde otimização de software até reparos de hardware complexos. Garantimos um atendimento rápido e eficiente para que você não fique parado.
                </p>

                <h3 className={styles.title}>Contato Direto</h3>
                <p className={styles.infoText}>
                    Se preferir, você também pode nos enviar um e-mail em{" "}
                    <a href="mailto:evanioshark@gmail.com" style={{ color: "#18cae9" }}>evanioshark@gmail.com</a>.
                </p>
            </section>

            <WhatsAppButton />
        </main>
    );
}

