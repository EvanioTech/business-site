import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';

const SistemaWebPage = () => {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Sistema Web</h1>
            <p className={styles.description}>
                Bienvenido a la página del sistema web. Aquí puedes encontrar información sobre nuestras soluciones web para tu negocio.
            </p>

            <Link href="/" className={styles.nav}>Voltar a la página principal</Link>
        </main>
    );
};

export default SistemaWebPage;
