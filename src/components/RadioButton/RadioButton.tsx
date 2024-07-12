import style from "./RadioButton.module.css"
import type { ReactNode } from "react"
import { useFormContext } from "react-hook-form"
import { Card } from "../Card"

type RadioButtonProps = {
  className?: string
  children: ReactNode
  name: string
  value: string
}
export const RadioButton = ({ className, name, children, value }: RadioButtonProps) => {
  const { register, watch } = useFormContext()
  return <label className={style.radio}>
    <Card
      className={className ?? ""}
      active={watch(name) === value}
    >
      {children}

      <input
        {...register(name)}
        type="radio"
        value={value}
        style={{ display: "none" }}
      />
    </Card>
  </label>
}
