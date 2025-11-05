
import Link from "next/link";
import './header.css';


export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/" className="text">Octadroid Tech</Link>
          </li>
            <li>
              <Link href="/web" className="text">Sistemas Web</Link>
            </li>
            <li>
              <Link href="/android" className="text">Aplicativos Android</Link>
            </li>
            <li>
              <Link href="/suporte" className="text">Suporte Técnico</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}



