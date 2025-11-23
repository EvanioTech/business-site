
"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./suporte.css";
import Header from "@/components/header";






type SubmitState = "idle" | "submitting" | "success" | "error";

export default function SuportePage() {
    
    const wppMessage = () => {
        const phoneNumber = "5585991785953"; // Substitua pelo número de telefone desejado
        const message = "Olá, gostaria de solicitar suporte de TI."; // Mensagem padrão
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    }
    

    return (
        <div style={{ backgroundColor: "#121212", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
              <Header />
        <main className="container">
            
            <h1 className="title">Suporte de TI</h1>
            

            <section className="card">
                <Image src="/format.jpg" alt="Suporte de TI" width={800} height={500} className="image" />
                <div className="content">
                    <h2 className="titleCard">Formatação de Computadores/Notebooks</h2>
                    <p className="lead">* Seu notebook está lento? </p>
                    <p className="lead">* Problemas com vírus ou malwares?</p>
                    <p className="lead">* Dificuldades com o sistema operacional?</p>
                    <p className="lead">* Outros problemas?</p>
                    <p className="lead">Solicite a formatação do seu dispositivo com nossa equipe de suporte.</p>
                    <div className="actions">
                        <button className="button" onClick={wppMessage}>Solicitar Formatação</button>
                    </div>
                </div>
            </section>
            <section className="card">
                <Image src="/fix.jpg" alt="Suporte de TI" width={800} height={500} className="image" />
                <div className="content">
                    <h2 className="titleCard">Reparo de Computadores/Notebooks</h2>
                    <p className="lead">* Seu notebook está apresentando problemas? </p>
                    <p className="lead">* Tela azul da morte?</p>
                    <p className="lead">* Problemas com hardware?</p>
                    <p className="lead">* Outros problemas?</p>
                    <p className="lead">Solicite o reparo do seu dispositivo com nossa equipe de suporte.</p>
                    <div className="actions">
                        <button className="button" onClick={wppMessage}>Solicitar Reparo</button>
                    </div>
                </div>
            </section>

            
        </main>
        </div>
    );
}

