import style from "./Input.module.css"
import type { InputHTMLAttributes } from "react"
import { useFormContext } from "react-hook-form"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  name: string
  type:
  | "date"
  | "datetime-local"
  | "email"
  | "month"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week"
}
export const Input = ({ id, label, name, ...props }: InputProps) => {
  const { register, formState: { errors } } = useFormContext()
  const error = errors[name]?.message?.toString()

  return <div className={style.input}>
    <label htmlFor={id ?? name}>{label}</label>
    <input {...register(name)} id={id ?? name}  {...props} />
    {!!error && <output>{error}</output>}
  </div>
}
