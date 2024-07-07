import { PropsWithChildren } from "react"
import { useMultiStepFormContext } from "../../contexts/MultiStepFormContext"

type FormStepProps = PropsWithChildren<{
  title?: string
  subtitle?: string
  step: number
}>
export const FormStep = ({ step, title, subtitle, children }: FormStepProps) => {
  const { step: currentStep = 1, setStep, totalSteps } = useMultiStepFormContext()

  if (step !== currentStep) {
    return null
  }

  return (
    <section>
      {!!title && <h2>{title}</h2>}
      {!!subtitle && <h3>{subtitle}</h3>}

      {children}

      {step > 1 && (
        <button type="button" onClick={() => setStep(s => s - 1)}>Go Back</button>
      )}
      {step < totalSteps - 1 && (
        <button type="button" onClick={() => setStep(s => s + 1)}>Next Step</button>
      )}
      {step === totalSteps - 1 && (
        <button type="submit" onClick={() => setStep(totalSteps)}>Confirm</button>
      )}
    </section>
  )
}
