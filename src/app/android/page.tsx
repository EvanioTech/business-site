import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";

export const metadata = {
    title: "Aplicativo Android — Business Site",
    description:
        "Baixe nosso aplicativo Android para gerenciar sua conta, receber atualizações e se manter conectado onde estiver.",
};

export default function AndroidPage (){
    return (
        <main style={{ padding: 24, fontFamily: "Inter, system-ui, sans-serif" , backgroundColor: "#121212", }}>
            <Header />
            <section
                style={{
                    maxWidth: 900,
                    margin: "0 auto",
                    display: "flex",
                    gap: 24,
                    alignItems: "center",
                    flexWrap: "wrap",  
                    minHeight: "100vh",
                    justifyContent: "center",
                    
                }}
            >
                <div style={{ flex: "1 1 320px" }}>
                    <h1 style={{ margin: "0 0 12px", fontSize: 32 , color: "#fff"}}>
                        Aplicativo Diário da Mamãe
                    </h1>
                    <p style={{ margin: "0 0 20px", color: "#fff", lineHeight: 1.5 }}>
                        Nosso aplicativo Android facilita o acompanhamento das atividades diárias do seu bebê,
                        oferecendo uma interface intuitiva e recursos úteis para pais ocupados.
                    </p>

                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" ,justifyContent: "center",}}>
                        <Link
                            href="https://play.google.com/store/apps/details?id=com.example.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-block",
                                padding: "10px 16px",
                                background: "#0f9d58",
                                color: "white",
                                borderRadius: 8,
                                textDecoration: "none",
                                fontWeight: 600,
                            }}
                        >
                            Ver no Google Play
                        </Link>

                        
                    </div>

                    <ul style={{ marginTop: 20, paddingLeft: 20, color: "#fff" }}>
                        <li>Compatível com Android 8.0 (Oreo) ou superior</li>
                        <li>Interface amigável e fácil de usar</li>
                        <li>Notificações personalizáveis para lembretes importantes</li>
                        
                    </ul>
                </div>

                <div
                    style={{
                        flex: "0 0 260px",
                        width: 260,
                        height: 520,
                        borderRadius: 12,
                        background: "#f6f8fa",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 6px 18px rgba(10,10,10,0.06)",
                        overflow: "hidden",
                    }}
                    aria-hidden
                >
                    
                    {/* Substitua src por uma captura de tela real em /public quando disponível */}
                    <Image
                        src="/diario.jpg"
                        alt="Captura de tela do aplicativo"
                        width={270}
                        height={540}
                        style={{ objectFit: "cover" }}
                        priority
                        
                    />
                
                </div>
            </section>

            <section
                style={{
                    maxWidth: 900,
                    margin: "40px auto 0",
                    padding: "24px",
                    background: "#fff",
                    borderRadius: 10,
                    boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
                }}
            >
                <h2 style={{ marginTop: 0, color: "#444", marginBottom: 12 }}>Por que usar o app?</h2>
                <p style={{ color: "#444" }}>
                    Nosso aplicativo Android foi projetado para ajudar pais e cuidadores a monitorar e registrar
                    as atividades diárias do bebê de maneira eficiente. Com recursos como registro de alimentação,
                    sono e fraldas, você pode manter todas as informações importantes em um só lugar, acessível a qualquer
                    momento.
                </p>

                <h3 style={{ marginBottom: 8, color: "#444" , marginTop: 12 }}>Ajuda e suporte</h3>
                <p style={{ marginTop: 0, color: "#444" }}>
                    Se precisar de ajuda ou tiver problemas com o aplicativo,
                    entre em contato com o suporte em{" "}
                    <a href="mailto:evanioshark@gmail.com">evanioshark@gmail.com</a>.
                </p>
            </section>
            <section
                style={{
                    maxWidth: 900,
                    margin: "40px auto",
                    display: "flex",
                    gap: 24,
                    alignItems: "center",
                    flexWrap: "wrap",
                }}
            >
                <div style={{ flex: "1 1 320px" }}>
                    <h1 style={{ margin: "0 0 12px", fontSize: 32, color: "#fff" }}>
                        Aplicativo Gerador de Sorteio
                    </h1>
                    <p style={{ margin: "0 0 20px", color: "#fff", lineHeight: 1.5 }}>
                        Nosso aplicativo Android gera sorteios de forma rápida e prática,
                        ideal para promoções, eventos e atividades diversas.
                    </p>

                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                        <Link
                            href="https://play.google.com/store/apps/details?id=com.example.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-block",
                                padding: "10px 16px",
                                background: "#0f9d58",
                                color: "white",
                                borderRadius: 8,
                                textDecoration: "none",
                                fontWeight: 600,
                            }}
                        >
                            Ver no Google Play
                        </Link>

                        
                    </div>

                    <ul style={{ marginTop: 20, paddingLeft: 20, color: "#fff" }}>
                        <li>Compatível com Android 8.0 (Oreo) ou superior</li>
                        <li>Interface amigável e fácil de usar</li>
                        <li>Histórico de sorteios realizados</li>
                        <li>Modo escuro para uso noturno</li>
                        
                    </ul>
                </div>

                <div
                    style={{
                        flex: "0 0 260px",
                        width: 260,
                        height: 520,
                        borderRadius: 12,
                        background: "#f6f8fa",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 6px 18px rgba(10,10,10,0.06)",
                        overflow: "hidden",
                    }}
                    aria-hidden
                >
                    {/* Substitua src por uma captura de tela real em /public quando disponível */}
                    <Image
                        src="/Sorteio.png"
                        alt="Captura de tela do aplicativo"
                        width={270}
                        height={540}
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>
            </section>
            <section
                style={{
                    maxWidth: 900,
                    margin: "40px auto 0",
                    padding: "24px",
                    background: "#fff",
                    borderRadius: 10,
                    boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
                }}
            >
                <h2 style={{ marginTop: 0, color: "#444", marginBottom: 12 }}>Por que usar o app?</h2>
                <p style={{ color: "#444" }}>
                    Nosso aplicativo Gerador de Sorteio é perfeito para quem precisa realizar sorteios de maneira
                    rápida e eficiente. Com uma interface simples, você pode configurar sorteios personalizados,
                    escolher entre diferentes métodos de seleção e manter um histórico dos resultados anteriores.
                </p>

                <h3 style={{ marginBottom: 8, color: "#444" , marginTop: 12 }}>Ajuda e suporte</h3>
                <p style={{ marginTop: 0, color: "#444" }}>
                    Se precisar de ajuda ou tiver problemas com o aplicativo,
                    entre em contato com o suporte em{" "}
                    <a href="mailto:evanioshark@gmail.com">evanioshark@gmail.com</a>.
                </p>
            </section>
            <section
                style={{
                    maxWidth: 900,
                    margin: "40px auto 0",
                    padding: "24px",
                    background: "#fff",
                    borderRadius: 10,
                    boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
                }}
            >
                <h2 style={{ marginTop: 0, color: "#444", marginBottom: 12 }}>Por que usar o app?</h2>
                <p style={{ color: "#444" }}>
                    Nosso aplicativo Android foi projetado para ajudar pais e cuidadores a monitorar e registrar
                    as atividades diárias do bebê de maneira eficiente. Com recursos como registro de alimentação,
                    sono e fraldas, você pode manter todas as informações importantes em um só lugar, acessível a qualquer
                    momento.
                </p>

                <h3 style={{ marginBottom: 8, color: "#444" , marginTop: 12 }}>Ajuda e suporte</h3>
                <p style={{ marginTop: 0, color: "#444" }}>
                    Se precisar de ajuda ou tiver problemas com o aplicativo,
                    entre em contato com o suporte em{" "}
                    <a href="mailto:evanioshark@gmail.com">evanioshark@gmail.com</a>.
                </p>
            </section>
            <section
                style={{
                    maxWidth: 900,
                    margin: "40px auto",
                    display: "flex",
                    gap: 24,
                    alignItems: "center",
                    flexWrap: "wrap",
                }}
            >
                <div style={{ flex: "1 1 320px" }}>
                    <h1 style={{ margin: "0 0 12px", fontSize: 32, color: "#fff" }}>
                        Aplicativo Teste Fechado
                    </h1>
                    <p style={{ margin: "0 0 20px", color: "#fff", lineHeight: 1.5 }}>
                        Nosso aplicativo Android ajuda a gerenciar testes fechados de forma eficiente,
                        ideal para Testadores que desejam organizar seus testes a partir de um único lugar.
                    </p>

                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                        <Link
                            href="https://play.google.com/store/apps/details?id=com.example.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-block",
                                padding: "10px 16px",
                                background: "#0f9d58",
                                color: "white",
                                borderRadius: 8,
                                textDecoration: "none",
                                fontWeight: 600,
                            }}
                        >
                            Ver no Google Play
                        </Link>

                        
                    </div>

                    <ul style={{ marginTop: 20, paddingLeft: 20, color: "#fff" }}>
                        <li>Compatível com Android 8.0 (Oreo) ou superior</li>
                        <li>Lista de Apps em teste</li>
                        <li>Botão para dar feedback</li>
                        <li>Compartilhamento de apps testados</li>
                        <li>Dicas para otimizar testes</li>
                        
                    </ul>
                </div>

                <div
                    style={{
                        flex: "0 0 260px",
                        width: 260,
                        height: 520,
                        borderRadius: 12,
                        background: "#f6f8fa",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 6px 18px rgba(10,10,10,0.06)",
                        overflow: "hidden",
                    }}
                    aria-hidden
                >
                    {/* Substitua src por uma captura de tela real em /public quando disponível */}
                    <Image
                        src="/test.jpg"
                        alt="Captura de tela do aplicativo"
                        width={270}
                        height={540}
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>
            </section>
            <section
                style={{
                    maxWidth: 900,
                    margin: "40px auto 0",
                    padding: "24px",
                    background: "#fff",
                    borderRadius: 10,
                    boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
                }}
            >
                <h2 style={{ marginTop: 0, color: "#444", marginBottom: 12 }}>Por que usar o app?</h2>
                <p style={{ color: "#444" }}>
                    Nosso aplicativo Teste Fechado é ideal para testadores que desejam gerenciar seus testes de
                    aplicativos de forma organizada. Com uma interface simples, você pode acompanhar os aplicativos em teste,
                    enviar feedback diretamente aos desenvolvedores e compartilhar suas experiências com outros testadores.
                </p>

                <h3 style={{ marginBottom: 8, color: "#444" , marginTop: 12 }}>Ajuda e suporte</h3>
                <p style={{ marginTop: 0, color: "#444" }}>
                    Se precisar de ajuda ou tiver problemas com o aplicativo,
                    entre em contato com o suporte em{" "}
                    <a href="mailto:evanioshark@gmail.com">evanioshark@gmail.com</a>.
                </p>
            </section>
        </main>
    );
}
