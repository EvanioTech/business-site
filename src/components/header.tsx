import Link from "next/link";
import Style from "./header.module.css";


export default function Header() {
  return (
    // Aplicar Style.header ao elemento <header>
    <header className={Style.headerContainer}> 
      <nav>
        {/* Aplicar Style.ul ao <ul> */}
        <ul className={Style.ul}>
          <li className={Style.listItem}>
            {/* O Style.text já está aplicado aqui */}
            <Link href="/" className={Style.text}>Octadroid Tech</Link>
          </li>
            <li className={Style.listItem}>
              <Link href="/web" className={Style.text}>Sistemas Web</Link>
            </li>
            <li className={Style.listItem}>
              <Link href="/android" className={Style.text}>Aplicativos Android</Link>
            </li>
            <li className={Style.listItem}>
              <Link href="/suporte" className={Style.text}>Suporte Técnico</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}