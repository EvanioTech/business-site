"use client";

import React, { useState } from "react";




export default function Page() {
    return (
        <main style={styles.container}>
            <section style={styles.hero}>
                <h1 style={styles.title}>Consultoria de TI</h1>
                <p style={styles.lead}>
                    Ajudamos empresas a alinhar tecnologia e negócio: infraestrutura,
                    segurança, cloud, arquiteturas escaláveis e transformação digital.
                </p>
                <a href="#contato" style={styles.cta}>
                    Solicitar proposta
                </a>
            </section>

            <section style={styles.services}>
                <h2 style={styles.sectionTitle}>Nossos serviços</h2>
                <ul style={styles.grid}>
                    <li style={styles.card}>
                        <strong>Estratégia de TI</strong>
                        <p>Roadmaps, governança e alinhamento com objetivos de negócio.</p>
                    </li>
                    <li style={styles.card}>
                        <strong>Cloud & Infraestrutura</strong>
                        <p>Migração, otimização de custos e arquiteturas resilientes.</p>
                    </li>
                    <li style={styles.card}>
                        <strong>Segurança</strong>
                        <p>Auditorias, hardening, políticas e resposta a incidentes.</p>
                    </li>
                    <li style={styles.card}>
                        <strong>DevOps & Observability</strong>
                        <p>CI/CD, automação e monitoramento para entrega confiável.</p>
                    </li>
                </ul>
            </section>

            <section style={styles.faq}>
                <h2 style={styles.sectionTitle}>Perguntas frequentes</h2>
                <details style={styles.detail}>
                    <summary>Como começa um projeto de consultoria?</summary>
                    <p>Iniciamos com discovery e avaliação técnica para propor um plano de ação.</p>
                </details>
                <details style={styles.detail}>
                    <summary>Vocês trabalham com cloud pública?</summary>
                    <p>Sim — experiência em AWS, Azure e GCP, além de soluções híbridas.</p>
                </details>
            </section>

            <section id="contato" style={styles.contact}>
                <h2 style={styles.sectionTitle}>Fale conosco</h2>
                <p>Preencha o formulário e retornaremos em até 2 dias úteis.</p>
                <ContactForm />
            </section>
        </main>
    );
}

/* Client component for the contact form */
function ContactForm() {
    "use client";
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<null | "idle" | "sending" | "sent" | "error">(
        "idle"
    );

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!email || !name) {
            alert("Por favor, preencha nome e e-mail.");
            return;
        }

        setStatus("sending");

        try {
            // Simula envio. Substitua por chamada real ao seu backend.
            await new Promise((r) => setTimeout(r, 800));
            setStatus("sent");
            setName("");
            setCompany("");
            setEmail("");
            setMessage("");
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    }

    return (
        <form onSubmit={onSubmit} style={styles.form} aria-label="Formulário de contato">
            <label style={styles.label}>
                Nome
                <input
                    style={styles.input}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>

            <label style={styles.label}>
                Empresa
                <input style={styles.input} value={company} onChange={(e) => setCompany(e.target.value)} />
            </label>

            <label style={styles.label}>
                E-mail
                <input
                    style={styles.input}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>

            <label style={styles.label}>
                Mensagem
                <textarea
                    style={{ ...styles.input, minHeight: 100 }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </label>

            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <button type="submit" style={styles.button} disabled={status === "sending"}>
                    {status === "sending" ? "Enviando..." : "Enviar mensagem"}
                </button>

                {status === "sent" && <span style={styles.success}>Mensagem enviada ✅</span>}
                {status === "error" && <span style={styles.error}>Erro ao enviar. Tente novamente.</span>}
            </div>
        </form>
    );
}

/* Minimal inline styles to avoid external deps */
const styles: Record<string, React.CSSProperties> = {
    container: {
        fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
        color: "#0f172a",
        padding: "40px 20px",
        maxWidth: 960,
        margin: "0 auto",
        lineHeight: 1.5,
    },
    hero: {
        textAlign: "center",
        marginBottom: 36,
    },
    title: {
        fontSize: 36,
        margin: "0 0 8px",
    },
    lead: {
        fontSize: 16,
        margin: "0 0 16px",
        color: "#334155",
    },
    cta: {
        display: "inline-block",
        padding: "10px 18px",
        background: "#0ea5a4",
        color: "#fff",
        borderRadius: 6,
        textDecoration: "none",
    },
    services: {
        marginBottom: 32,
    },
    sectionTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 12,
        listStyle: "none",
        padding: 0,
        margin: 0,
    },
    card: {
        padding: 14,
        border: "1px solid #e6eef2",
        borderRadius: 8,
        background: "#fff",
    },
    faq: {
        marginBottom: 32,
    },
    detail: {
        marginBottom: 8,
        padding: 12,
        borderRadius: 8,
        border: "1px solid #e6eef2",
        background: "#f8fafb",
    },
    contact: {
        marginBottom: 80,
    },
    form: {
        marginTop: 12,
        display: "grid",
        gap: 10,
        maxWidth: 640,
    },
    label: {
        display: "flex",
        flexDirection: "column",
        fontSize: 14,
        color: "#0f172a",
    },
    input: {
        marginTop: 6,
        padding: "8px 10px",
        borderRadius: 6,
        border: "1px solid #cbd5e1",
        fontSize: 14,
    },
    button: {
        padding: "10px 14px",
        background: "#0ea5a4",
        color: "#fff",
        border: "none",
        borderRadius: 6,
        cursor: "pointer",
    },
    success: {
        color: "#16a34a",
        fontSize: 14,
    },
    error: {
        color: "#dc2626",
        fontSize: 14,
    },
};