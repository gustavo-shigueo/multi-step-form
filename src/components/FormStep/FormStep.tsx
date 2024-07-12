import type { PropsWithChildren } from "react"

type FormStepProps = PropsWithChildren<{
  step: number
  currentStep: number
}>
export const FormStep = ({
  currentStep,
  step,
  children,
}: FormStepProps) => {
  if (step !== currentStep) {
    return null
  }

  return <main>{children}</main>
}
