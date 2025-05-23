import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full  text-gray-800 relative">
            <div className="max-w-6xl mx-auto flex items-center justify-between pt-4 md:p-4 px-8">
                
                <div className="flex-shrink-0">
                    <Link href="/" className="flex items-center">
                    <Image
                        src={"/logo.png"}
                        alt={"logo saja"}
                        width={1000}
                        height={1000}
                        className="w-28 mb-4 md:mb-0"
                    /></Link>
                </div>
                {/* Menú para escritorio */}
                <ul className="hidden md:flex md:space-x-8 items-center">
                    <li>
                        <Link href="/develop" className="block p-4 hover:text-primary">
                            Desarrollo Web
                        </Link>
                    </li>
                    <li>
                        <Link href="/repair" className="block p-4 hover:text-primary">
                            Reparaciones
                        </Link>
                    </li>
                    <li>
                        <a href="#" className="block p-4 hover:text-primary">
                            Catálogo
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block p-4 hover:text-primary">
                            Contáctanos
                        </a>
                    </li>
                </ul>
                {/* Botón de menú para móviles */}
                <button
                    className="block md:hidden text-gray-800 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>
            {/* Menú móvil */}
            <ul
                className={`${
                    isMenuOpen ? "block" : "hidden"
                } md:hidden absolute top-full left-0 w-full bg-white shadow-md z-10`}
            >
                <li className="border-b">
                    <Link href="/develop" className="block p-4 hover:text-primary">
                        Desarrollo Web
                    </Link>
                </li>
                <li className="border-b">
                    <Link href="/repair" className="block p-4 hover:text-primary">
                        Reparaciones
                    </Link>
                </li>
                <li className="border-b">
                    <a href="#" className="block p-4 hover:text-primary">
                        Catálogo
                    </a>
                </li>
                <li>
                    <a href="#" className="block p-4 hover:text-primary">
                        Contáctanos
                    </a>
                </li>
            </ul>
        </nav>
    );
}