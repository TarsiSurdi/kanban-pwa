import { ReactNode } from "react";

interface CardColumnProps {
  title: string;
  count: number;
  color: string;
  children: ReactNode;
}

export function CardColumn({ title, count, color, children }: CardColumnProps) {
  return (
    <section className="flex flex-col max-w-[80%] pl-4 last:mr-4">
      <div className="flex items-center my-4">
        <div
          className={`w-3 h-3 rounded-full ${color} before:content-[' '] mr-2`}
        ></div>
        <h2 className="text-xs tracking-widest font-semibold dark:text-neutral-100 uppercase">
          {title} {count > 0 && `(${count})`}
        </h2>
      </div>
      {children}
    </section>
  );
}
