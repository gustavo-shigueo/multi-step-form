import style from "./Card.module.css"
import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & { active?: boolean }
export const Card = ({ className, active, ...props }: CardProps) => {
  return <div
    className={
      `${style.card} ${active ? style.active : ""} ${className ?? ""}`.trim()
    }
    {...props}
  />
}
