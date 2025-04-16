import Link from "next/link";

export default function BottomFooter() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-100 dark:bg-gray-800">
    <p className="text-xs text-gray-700 dark:text-gray-400">
      © 2025 Saja. Todos los derechos reservados.
    </p>
    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
      <Link
        className="text-xs hover:underline underline-offset-4 text-gray-700 dark:text-gray-400"
        href="#"
      >
        Términos de Servicio
      </Link>
      <Link
        className="text-xs hover:underline underline-offset-4 text-gray-700 dark:text-gray-400"
        href="#"
      >
        Privacidad
      </Link>
    </nav>
  </footer>
  );
}