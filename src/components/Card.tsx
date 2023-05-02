import { FaPlusSquare } from "react-icons/fa";

type CardVariants = "normal" | "add";

interface CardProps {
  title?: string;
  variant?: CardVariants;
}

export function Card({ title, variant = "normal" }: CardProps) {
  switch (variant) {
    case "normal": {
      return (
        <div className="dark:bg-neutral-400 dark:text-white p-4 rounded-md shadow-md min-h-[100px] w-[200px]">
          <p className="line-clamp-5">{title}</p>
          <p className="dark:text-neutral-50 font-bold text-xs pt-4">
            3 of 3 subtasks
          </p>
        </div>
      );
    }
    case "add": {
      return (
        <section className="flex flex-col max-w-[80%] pl-4 last:mr-4 mt-12">
          <div className="dark:bg-neutral-400 dark:hover:bg-neutral-300 transition-colors duration-150 ease-out dark:text-white p-4 rounded-md shadow-md min-h-[100px] w-[200px] gap-y-4 flex flex-col items-center group">
            <FaPlusSquare className="text-4xl dark:text-neutral-100 dark:group-hover:text-neutral-50" />
            <p className="text-sm font-semibold dark:text-neutral-100 dark:group-hover:text-neutral-50">
              Adicionar Coluna
            </p>
          </div>
        </section>
      );
    }
    default: {
      throw new Error(`Invalid variant ${variant} provided to <Card />`);
    }
  }
}
