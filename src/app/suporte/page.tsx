
"use client";

import React, { useState } from "react";






type SubmitState = "idle" | "submitting" | "success" | "error";

export default function SuportePage() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [assunto, setAssunto] = useState("Hardware");
    const [descricao, setDescricao] = useState("");
    const [anexos, setAnexos] = useState<FileList | null>(null);
    const [status, setStatus] = useState<SubmitState>("idle");
    const [mensagemErro, setMensagemErro] = useState("");

    const resetForm = () => {
        setNome("");
        setEmail("");
        setAssunto("Hardware");
        setDescricao("");
        setAnexos(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMensagemErro("");
        if (!nome.trim() || !email.trim() || !descricao.trim()) {
            setMensagemErro("Por favor, preencha nome, e-mail e descrição do problema.");
            return;
        }

        setStatus("submitting");
        try {
            // Monta FormData para enviar para sua API (/api/suporte) ou outro endpoint
            const fd = new FormData();
            fd.append("nome", nome);
            fd.append("email", email);
            fd.append("assunto", assunto);
            fd.append("descricao", descricao);
            if (anexos) {
                Array.from(anexos).forEach((f, i) => fd.append("anexos", f, f.name));
            }

            // Tente enviar para uma rota de API (implemente /api/suporte no servidor)
            const res = await fetch("/api/suporte", {
                method: "POST",
                body: fd,
            });

            if (!res.ok) {
                // fallback: se não houver API, consideramos sucesso localmente
                // Você pode ajustar isso para mostrar o erro real do servidor
                console.warn("Resposta não OK:", res.status);
                // throw new Error("Falha no envio");
            }

            setStatus("success");
            resetForm();
        } catch (err) {
            console.error(err);
            setStatus("error");
            setMensagemErro("Ocorreu um erro ao enviar. Tente novamente mais tarde.");
        } finally {
            // volta para idle depois de um tempo
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    return (
        <main style={styles.container}>
            <h1 style={styles.title}>Suporte de TI</h1>
            <p style={styles.lead}>
                Abra um chamado descrevendo o problema. Informações como prints, horário e passos para reproduzir
                ajudam a resolver mais rápido.
            </p>

            <section style={styles.card}>
                <form onSubmit={handleSubmit} style={styles.form} noValidate>
                    <label style={styles.label}>
                        Nome
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            style={styles.input}
                            required
                            placeholder="Seu nome completo"
                        />
                    </label>

                    <label style={styles.label}>
                        E-mail
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.input}
                            required
                            placeholder="seu@empresa.com"
                        />
                    </label>

                    <label style={styles.label}>
                        Tipo de problema
                        <select value={assunto} onChange={(e) => setAssunto(e.target.value)} style={styles.input}>
                            <option>Hardware</option>
                            <option>Software</option>
                            <option>Rede</option>
                            <option>Acesso / Conta</option>
                            <option>Outro</option>
                        </select>
                    </label>

                    <label style={styles.label}>
                        Descrição
                        <textarea
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            style={{ ...styles.input, height: 120, resize: "vertical" }}
                            required
                            placeholder="Descreva o problema, passos para reproduzir e horário aproximado"
                        />
                    </label>

                    <label style={styles.label}>
                        Anexar arquivos (prints, logs)
                        <input
                            type="file"
                            onChange={(e) => setAnexos(e.target.files)}
                            style={styles.input}
                            multiple
                            accept="image/*,text/plain,application/pdf"
                        />
                    </label>

                    {mensagemErro && <div style={styles.error}>{mensagemErro}</div>}

                    <div style={styles.actions}>
                        <button type="submit" disabled={status === "submitting"} style={styles.button}>
                            {status === "submitting" ? "Enviando..." : "Abrir chamado"}
                        </button>
                        <button
                            type="button"
                            onClick={resetForm}
                            disabled={status === "submitting"}
                            style={{ ...styles.button, background: "#eee", color: "#111" }}
                        >
                            Limpar
                        </button>
                    </div>

                    {status === "success" && <div style={styles.success}>Chamado enviado com sucesso.</div>}
                    {status === "error" && <div style={styles.error}>Erro ao enviar chamado.</div>}
                </form>
            </section>

            <section style={{ marginTop: 24, color: "#555" }}>
                <strong>Alternativas:</strong>
                <ul>
                    <li>Chat interno da empresa</li>
                    <li>Telefone do suporte: (xx) xxxx-xxxx</li>
                    <li>Para emergências, disque a extensão 100</li>
                </ul>
            </section>
        </main>
    );
}

const styles: { [k: string]: React.CSSProperties } = {
    container: { maxWidth: 760, margin: "40px auto", padding: 20, fontFamily: "system-ui, Arial" },
    title: { fontSize: 28, margin: "0 0 8px" },
    lead: { margin: "0 0 20px", color: "#444" },
    card: { background: "#fff", padding: 16, borderRadius: 8, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" },
    form: { display: "grid", gap: 12 },
    label: { display: "flex", flexDirection: "column", fontSize: 14, color: "#222" },
    input: { marginTop: 6, padding: "8px 10px", borderRadius: 6, border: "1px solid #ccd", fontSize: 14 },
    actions: { display: "flex", gap: 8, marginTop: 6 },
    button: {
        padding: "8px 14px",
        borderRadius: 6,
        border: "none",
        background: "#0066ff",
        color: "#fff",
        cursor: "pointer",
        fontWeight: 600,
    },
    success: { marginTop: 10, color: "green" },
    error: { marginTop: 10, color: "crimson" },
};