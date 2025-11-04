'use client';

import Link from 'next/link';
import React from 'react';
import   './web.css';

const SistemaWebPage = () => {

    const WEB_SITE_LINK = "https://octadroid.netlify.app/";
    const WEB_SITE_LINK2 = "https://dev-matias-xi.vercel.app/";
    return (
        <main className="container">
            <h1 className="title">Sistemas Web</h1>
            <section className="section">
        <div className="iframeContainer"> 
            
            <div className="iframeWrapper">
                {/* O Google PROVAVELMENTE BLOQUEARÁ esta incorporação por segurança. */}
                <iframe
                    src={WEB_SITE_LINK}
                    title="Miniatura do Site Google"
                    className="iframeMockup"
                    frameBorder="0"
                ></iframe>
            </div>
            
        </div>
        <div className="descriptionContainer">
        <h3 className="iframeTitle">Site : Octadroid</h3>
            <p className="descriptionText">
            Nosso sistema web oferece uma plataforma robusta e intuitiva para gerenciar suas operações comerciais de forma eficiente. Com recursos avançados de análise de dados, integração com outras ferramentas e uma interface amigável, nosso sistema web é projetado para atender às necessidades específicas do seu negócio, ajudando você a alcançar seus objetivos com facilidade.
            </p>
            <button className="buttonVisit" onClick={() => window.open(WEB_SITE_LINK, "_blank")}>visitar Site</button>
            <button className="buttonRequest">Solicitar Sistema Web</button>
        </div>
            </section>
            <section className="section">
        <div className="iframeContainer"> 
            
            <div className="iframeWrapper">
                {/* O Google PROVAVELMENTE BLOQUEARÁ esta incorporação por segurança. */}
                <iframe
                    src={WEB_SITE_LINK2}
                    title="Miniatura do Site Google"
                    className="iframeMockup"
                    frameBorder="0"
                ></iframe>
            </div>
            
        </div>
        <div className="descriptionContainer">
        <h3 className="iframeTitle">Site : Octadroid</h3>
            <p className="descriptionText">
            Nosso sistema web oferece uma plataforma robusta e intuitiva para gerenciar suas operações comerciais de forma eficiente. Com recursos avançados de análise de dados, integração com outras ferramentas e uma interface amigável, nosso sistema web é projetado para atender às necessidades específicas do seu negócio, ajudando você a alcançar seus objetivos com facilidade.
            </p>
            <button className="buttonVisit" onClick={() => window.open(WEB_SITE_LINK2, "_blank")}>visitar Site</button>
            <button className="buttonRequest">Solicitar Sistema Web</button>
        </div>
            </section>

            <Link href="/" className="nav">Voltar a la página principal</Link>
        </main>
    );
};

export default SistemaWebPage;
