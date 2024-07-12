import style from "./FormStep.module.css"
import { useLayoutEffect, type PropsWithChildren } from "react"
import { useMultiStepFormContext } from "../../contexts/MultiStepFormContext"

type FormStepProps = PropsWithChildren<{ step: number }>
export const FormStep = ({
  step,
  children,
}: FormStepProps) => {
  const { activeStep } = useMultiStepFormContext()

  useLayoutEffect(() => {
    if (step !== activeStep) {
      return
    }

    const element = document.querySelector<HTMLInputElement>(
      `.${style.step} :is(label:has(input), input)`
    )

    element?.focus()
  }, [step, activeStep])

  if (step !== activeStep) {
    return null
  }

  return <main className={style.step}>{children}</main>
}
