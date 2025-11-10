import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import styles from './android.module.css';

export const metadata = {
    title: "Aplicativo Android — Business Site",
    description:
        "Baixe nosso aplicativo Android para gerenciar sua conta, receber atualizações e se manter conectado onde estiver.",
};

export default function AndroidPage (){
    return (
        <main className={styles.main}>
            <Header />
            <section className={styles.section}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        Aplicativo Diário da Mamãe
                    </h1>
                    <p className={styles.description}>
                        Nosso aplicativo Android facilita o acompanhamento das atividades diárias do seu bebê,
                        oferecendo uma interface intuitiva e recursos úteis para pais ocupados.
                    </p>

                    <div className={styles.buttonContainer}>
                        <Link
                            href="https://play.google.com/store/apps/details?id=com.matiasdevts.diariodamamae"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.buttonLink}
                        >
                            Ver no Google Play
                        </Link>

                        
                    </div>

                    <ul className={styles.featureList}>
                        <li>Compatível com Android 8.0 (Oreo) ou superior</li>
                        <li>Interface amigável e fácil de usar</li>
                        <li>Notificações personalizáveis para lembretes importantes</li>
                        
                    </ul>
                </div>

                <div className={styles.imageContainer}>
                
                    
                    {/* Substitua src por uma captura de tela real em /public quando disponível */}
                    <Image
                        src="/diario.jpg"
                        alt="Captura de tela do aplicativo"
                        width={270}
                        height={540}
                        className={styles.image}
                        priority
                        
                    />
                
                </div>
            </section>

            <section className={styles.infoSection}>
                <h2 className={styles.title}>Por que usar o app?</h2>
                <p className={styles.infoText}>
                    Nosso aplicativo Android foi projetado para ajudar pais e cuidadores a monitorar e registrar
                    as atividades diárias do bebê de maneira eficiente. Com recursos como registro de alimentação,
                    sono e fraldas, você pode manter todas as informações importantes em um só lugar, acessível a qualquer
                    momento.
                </p>

                <h3 className={styles.title}>Ajuda e suporte</h3>
                <p className={styles.infoText}>
                    Se precisar de ajuda ou tiver problemas com o aplicativo,
                    entre em contato com o suporte em{" "}
                    <a href="mailto:evanioshark@gmail.com">evanioshark@gmail.com</a>.
                </p>
            </section>
            <section className={styles.section}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        Aplicativo Gerador de Sorteio
                    </h1>
                    <p className={styles.description}>
                        Nosso aplicativo Android gera sorteios de forma rápida e prática,
                        ideal para promoções, eventos e atividades diversas.
                    </p>

                    <div className={styles.buttonContainer}>
                        <Link
                            href="https://play.google.com/store/apps/details?id=com.matiasdevts.Sorteio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.buttonLink}
                        >
                            Ver no Google Play
                        </Link>

                        
                    </div>

                    <ul className={styles.featureList}>
                        <li>Compatível com Android 8.0 (Oreo) ou superior</li>
                        <li>Interface amigável e fácil de usar</li>
                        <li>Histórico de sorteios realizados</li>
                        <li>Modo escuro para uso noturno</li>
                        
                    </ul>
                </div>

                <div className={styles.imageContainer}>
                    
                    {/* Substitua src por uma captura de tela real em /public quando disponível */}
                    <Image
                        src="/Sorteio.png"
                        alt="Captura de tela do aplicativo"
                        width={270}
                        height={540}
                        className={styles.image}
                        priority
                    />
                </div>
            </section>
            <section className={styles.infoSection}>
            
                <h2 className={styles.title}>Por que usar o app?</h2>
                <p className={styles.infoText}>
                    Nosso aplicativo Gerador de Sorteio é perfeito para quem precisa realizar sorteios de maneira
                    rápida e eficiente. Com uma interface simples, você pode configurar sorteios personalizados,
                    escolher entre diferentes métodos de seleção e manter um histórico dos resultados anteriores.
                </p>

                <h3 className={styles.title}>Ajuda e suporte</h3>
                <p className={styles.infoText}>
                    Se precisar de ajuda ou tiver problemas com o aplicativo,
                    entre em contato com o suporte em{" "}
                    <a href="mailto:evanioshark@gmail.com">evanioshark@gmail.com</a>.
                </p>
            </section>
            
            <section className={styles.section}>
                
             
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        Aplicativo Teste Fechado
                    </h1>
                    <p className={styles.description}>
                        Nosso aplicativo Android ajuda a gerenciar testes fechados de forma eficiente,
                        ideal para Testadores que desejam organizar seus testes a partir de um único lugar.
                    </p>

                    <div className={styles.buttonContainer}>
                        <Link
                            href="https://play.google.com/store/apps/details?id=com.matiasdevts.testerfull"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.buttonLink}
                        >
                            Ver no Google Play
                        </Link>

                        
                    </div>

                    <ul className={styles.featureList}>
                        <li>Compatível com Android 8.0 (Oreo) ou superior</li>
                        <li>Lista de Apps em teste</li>
                        <li>Botão para dar feedback</li>
                        <li>Compartilhamento de apps testados</li>
                        <li>Dicas para otimizar testes</li>
                        
                    </ul>
                </div>

                <div className={styles.imageContainer}>
                    
                    <Image
                        src="/test.jpg"
                        alt="Captura de tela do aplicativo"
                        width={270}
                        height={540}
                        className={styles.image}
                        priority
                    />
                </div>
            </section>
            <section className={styles.infoSection}>
                
                <h2 className={styles.title}>Por que usar o app?</h2>
                <p className={styles.infoText}>
                    Nosso aplicativo Teste Fechado é ideal para testadores que desejam gerenciar seus testes de
                    aplicativos de forma organizada. Com uma interface simples, você pode acompanhar os aplicativos em teste,
                    enviar feedback diretamente aos desenvolvedores e compartilhar suas experiências com outros testadores.
                </p>

                <h3 className={styles.title}>Ajuda e suporte</h3>
                <p className={styles.infoText}>
                    Se precisar de ajuda ou tiver problemas com o aplicativo,
                    entre em contato com o suporte em{" "}
                    <a href="mailto:evanioshark@gmail.com">evanioshark@gmail.com</a>.
                </p>
            </section>
        </main>
    );
}
