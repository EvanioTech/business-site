import Link from "next/link";
import Style from "./header.module.css";
import { Home, Monitor, Smartphone, Headphones } from "lucide-react";

export default function Header() {
  return (
    // Aplicar Style.header ao elemento <header>
    <header className={Style.headerContainer}> 
      <nav className={Style.nav}>
        {/* Aplicar Style.ul ao <ul> */}
        <ul className={Style.ul}>
          <li className={Style.listItem}>
            {/* O Style.text já está aplicado aqui */}
            <Link href="/" className={Style.text}>
              <Home className={Style.icon} size={20} />
              <span className={Style.linkText}>Octadroid Tech</span>
            </Link>
          </li>
            <li className={Style.listItem}>
              <Link href="/web" className={Style.text}>
                <Monitor className={Style.icon} size={20} />
                <span className={Style.linkText}>Sistemas Web</span>
              </Link>
            </li>
            <li className={Style.listItem}>
              <Link href="/android" className={Style.text}>
                <Smartphone className={Style.icon} size={20} />
                <span className={Style.linkText}>Aplicativos Android</span>
              </Link>
            </li>
            <li className={Style.listItem}>
              <Link href="/suporte" className={Style.text}>
                <Headphones className={Style.icon} size={20} />
                <span className={Style.linkText}>Suporte Técnico</span>
              </Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}