import { ReactNode } from "react";

interface OverlayProps {
  children: ReactNode;
}

export function Overlay({ children }: OverlayProps) {
  return (
    <div className="absolute top-0 left-0 h-full w-full backdrop-blur-sm z-20">
      {children}
    </div>
  );
}
