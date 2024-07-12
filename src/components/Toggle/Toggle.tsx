import style from "./Toggle.module.css"
import { useId, type HTMLAttributes } from "react"
import { useFormContext } from "react-hook-form"

type ToggleOption = {
  label: string
  value: string
}

type ToggleProps = HTMLAttributes<HTMLDivElement> & {
  name: string
  options: [ToggleOption, ToggleOption]
}

export const Toggle = ({
  className,
  name,
  options: [option1, option2],
  ...props
}: ToggleProps) => {
  const id = useId()
  const { register } = useFormContext()

  return <div
    className={`${style.toggle} ${className}`.trim()}
    {...props}
  >
    <label htmlFor={`${id}-${option1.value}`}>
      {option1.label}
    </label>

    <div>
      <label htmlFor={`${id}-${option1.value}`} aria-hidden />
      <label htmlFor={`${id}-${option2.value}`} aria-hidden />

      <input
        {...register(name)}
        id={`${id}-${option1.value}`}
        type="radio"
        value={option1.value}
      />

      <input
        {...register(name)}
        id={`${id}-${option2.value}`}
        type="radio"
        value={option2.value}
      />
    </div>

    <label htmlFor={`${id}-${option2.value}`}>
      {option2.label}
    </label>
  </div>
}
