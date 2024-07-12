import style from "./Button.module.css"
import type { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "accent" | "transparent" | "link"
}
export const Button = ({ className, variant = "default", ...props }: ButtonProps) => {
  return <button
    className={
      `${style.button} ${style[variant]} ${className}`.trim()
    }
    {...props}
  />
}
