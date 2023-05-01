import IconSVG from "@public/icons/iconTransparent.svg";

interface IconProps {
  size?: number;
}

export function Icon({ size }: IconProps) {
  return <img src={IconSVG} alt="Kanban Logo" width={size} height={size} />;
}
