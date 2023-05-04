import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="group flex md:absolute md:bottom-0 md:right-0 md:[margin-right:max(env(safe-area-inset-right),_theme(spacing.4))] md:[margin-bottom:max(env(safe-area-inset-bottom),_theme(spacing.4))] md:py-2 md:px-4 md:rounded-2xl md:shadow-lg justify-center items-center hover:underline text-neutral-100 dark:hover:text-white dark:bg-neutral-400 max-h-max text-sm pb-[max(env(safe-area-inset-bottom),_theme(spacing.2))] pt-2">
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
