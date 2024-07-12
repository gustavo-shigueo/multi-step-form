import { Button } from "../Button"

const LAST_STEP = 4

type FormFooterProps = {
  handleBack: () => void
  handleNext: () => Promise<void>
  step: number
}
export const FormFooter = ({ step, handleBack, handleNext }: FormFooterProps) => {
  if (step >= LAST_STEP) {
    return null
  }

  const isSubmitStep = step === LAST_STEP - 1

  return <footer>
    {step > 0 && (
      <Button
        variant="transparent"
        type="button"
        onClick={handleBack}
      >
        Go Back
      </Button>
    )}
    {isSubmitStep ? (
      <Button variant="accent" type="submit">
        Confirm
      </Button>
    ) : (
      <Button
        type="button"
        className="mis-auto"
        onClick={handleNext}
      >
        Next Step
      </Button>
    )}
  </footer>
}
