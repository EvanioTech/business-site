
"use client";

import React, { useState } from "react";
import Image from "next/image";






type SubmitState = "idle" | "submitting" | "success" | "error";

export default function SuportePage() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [assunto, setAssunto] = useState("Hardware");
    const [descricao, setDescricao] = useState("");
    const [anexos, setAnexos] = useState<FileList | null>(null);
    const [status, setStatus] = useState<SubmitState>("idle");
    const [mensagemErro, setMensagemErro] = useState("");

    

    return (
        <main style={styles.container}>
            <h1 style={styles.title}>Suporte de TI</h1>
            

            <section style={styles.card}>
                <Image src="/format.jpg" alt="Suporte de TI" width={800} height={500} style={{ borderRadius: 8 }} />
                <div style={{ marginLeft: 16 }}>
                    <h2 style={{ fontSize: 24, margin: 0, color: "#222" }}>Formatação de Computadores/Notebooks</h2>
                    <p style={{ margin: 0 , color: "#555" }}>* Seu notebook está lento? </p>
                    <p style={{ margin: 0 , color: "#555" }}>* Problemas com vírus ou malwares?</p>
                    <p style={{ margin: 0 , color: "#555" }}>* Dificuldades com o sistema operacional?</p>
                    <p style={{ margin: 0, color: "#555" }}>* Outros problemas?</p>
                    <p style={{ margin: 0, color: "#555" }}>Solicite a formatação do seu dispositivo com nossa equipe de suporte.</p>
                    <div style={styles.actions}>
                        <button style={styles.button}>Solicitar Formatação</button>
                    </div>
                </div>
            </section>
            <section style={styles.card}>
                <Image src="/fix.jpg" alt="Suporte de TI" width={800} height={500} style={{ borderRadius: 8 }} />
                <div style={{ marginLeft: 16 }}>
                    <h2 style={{ fontSize: 24, margin: 0, color: "#222" }}>Reparo de Computadores/Notebooks</h2>
                    <p style={{ margin: 0 , color: "#555" }}>* Seu notebook está apresentando problemas? </p>
                    <p style={{ margin: 0 , color: "#555" }}>* Tela azul da morte?</p>
                    <p style={{ margin: 0 , color: "#555" }}>* Problemas com hardware?</p>
                    <p style={{ margin: 0, color: "#555" }}>* Outros problemas?</p>
                    <p style={{ margin: 0, color: "#555", paddingTop: 8 }}>Solicite o reparo do seu dispositivo com nossa equipe de suporte.</p>
                    <div style={styles.actions}>
                        <button style={styles.button}>Solicitar Reparo</button>
                    </div>
                </div>
            </section>

            
        </main>
    );
}

const styles: { [k: string]: React.CSSProperties } = {
    container: { maxWidth: 760, margin: "40px auto", padding: 20, fontFamily: "system-ui, Arial", display: "flex", flexDirection: "column", alignItems: "center" },
    title: { fontSize: 38, margin: "0 0 8px",  color: "#fffafa", marginBottom: 20 },
    lead: { margin: "0 0 20px", color: "#fffafa" },
    card: { background: "#fff", padding: 16, borderRadius: 8, boxShadow: "0 1px 3px rgba(0,0,0,0.06)", display: "flex", flexDirection: "row", marginBottom: 20,  },
    actions: { marginTop: 16 },
    button: { background: "#0070f3", color: "#fff", border: "none", padding: "10px 16px", borderRadius: 4, cursor: "pointer", fontSize: 16 },
    input: { width: "100%", padding: 8, marginTop: 4, marginBottom: 12, borderRadius: 4, border: "1px solid #ccc", fontSize: 16 },
    textarea: { width: "100%", height: 100, padding: 8, marginTop: 4, marginBottom: 12, borderRadius: 4, border: "1px solid #ccc", fontSize: 16 },
    select: { width: "100%", padding: 8, marginTop: 4, marginBottom: 12, borderRadius: 4, border: "1px solid #ccc", fontSize: 16 },
    success: { marginTop: 10, color: "green" },
    error: { marginTop: 10, color: "crimson" },
};