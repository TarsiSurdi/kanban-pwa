import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="group flex justify-center items-center hover:underline text-neutral-100 dark:hover:text-white dark:bg-neutral-400 max-h-max p-2 text-sm">
      <FaGithub className="dark:group-hover:text-white mr-2" />
      <a
        href="https://github.com/TarsiSurdi"
        className="font-semibold line-clamp-1 max-xs:hidden"
      >
        Desenvolvido por Tarcísio Surdi
      </a>
      <a
        href="https://github.com/TarsiSurdi"
        className="font-semibold line-clamp-1 xs:hidden"
      >
        Tarcísio Surdi
      </a>
    </footer>
  );
}
