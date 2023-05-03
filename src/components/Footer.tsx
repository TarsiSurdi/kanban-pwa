import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="group flex md:absolute md:bottom-0 md:right-0 md:mr-safe md:mb-safe md:py-2 md:px-4 md:rounded-2xl justify-center items-center hover:underline text-neutral-100 dark:hover:text-white dark:bg-neutral-400 max-h-max text-sm pt-3 pb-safe">
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
