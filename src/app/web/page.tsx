import Link from 'next/link';
import React from 'react';
import   './web.css';

const SistemaWebPage = () => {

    const WEB_SITE_LINK = "https://octadroid.netlify.app/";
    return (
        <main className="container">
            <h1 className="title">Sistemas Web</h1>
            <section className="section">
        <div className="iframeContainer"> 
            <h3 className="iframeTitle">Site : Octadroid</h3>
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
            <p className="descriptionText">
            Nosso sistema web oferece uma plataforma robusta e intuitiva para gerenciar suas operações comerciais de forma eficiente. Com recursos avançados de análise de dados, integração com outras ferramentas e uma interface amigável, nosso sistema web é projetado para atender às necessidades específicas do seu negócio, ajudando você a alcançar seus objetivos com facilidade.
            </p>
        </div>
            </section>

            <Link href="/" className="nav">Voltar a la página principal</Link>
        </main>
    );
};

export default SistemaWebPage;
