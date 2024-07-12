import style from "./CheckBox.module.css"
import checkmark from "../../assets/images/icon-checkmark.svg"
import type { ReactNode } from "react"
import { Card } from "../Card"
import { useFormContext } from "react-hook-form"

type CheckBoxProps = {
  className?: string
  children: ReactNode
  name: string
}
export const CheckBox = ({
  className,
  children,
  name
}: CheckBoxProps) => {
  const { register, watch } = useFormContext()
  return <label className={style.checkbox}>
    <Card className={className ?? ""} active={watch(name)}>
      <div className={style.input}>
        <img src={checkmark} role="presentation" />
        <input {...register(name)} type="checkbox" />
      </div>

      <div>{children}</div>
    </Card>
  </label>
}
