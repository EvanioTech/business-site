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
            Site feito para uma empresa de serviços de tecnologia, oferecendo soluções personalizadas para atender às necessidades dos clientes. Com uma interface amigável e recursos avançados, o site permite que os usuários explorem os serviços oferecidos, entrem em contato com a equipe de suporte e acessem informações relevantes sobre a empresa.
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
        <h3 className="iframeTitle">Site : Matias Developer</h3>
            <p className="descriptionText">
            Site pessoal de um desenvolvedor, apresentando seu portfólio, habilidades e projetos. Com um design moderno e responsivo, o site permite que os visitantes conheçam o trabalho do desenvolvedor, entrem em contato para oportunidades de colaboração e explorem seus conhecimentos técnicos.
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
