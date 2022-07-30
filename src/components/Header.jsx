import Link from "next/link";
import Logo from "../public/logo.png";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-2 max-w-7xl w-full m-auto hidden sm:flex ">
      <div className="flex items-center ">
        <div className="w-16 h-16 relative">
          <Image
            src={Logo}
            alt="logo"
            //make logo fit the container
            layout="fill"
          />
        </div>

        <span className="ml-2 text-2xl font-bold">
          <Link href="/">
            <a className="text-primary">Norte Contabilidade</a>
          </Link>
        </span>
      </div>
      <nav className="flex items-center  gap-4 ">
        {links.map(({ href, label }, index) => (
          <Link href={href} key={index}>
            <a className="text-primary text-xl transition-transform duration-300 font-semibold hover:-translate-y-1 " style={{letterSpacing: '1px'}} >{label}</a>
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
