import style from "./FormFooter.module.css"
import { useMultiStepFormContext } from "../../contexts/MultiStepFormContext"
import { Button } from "../Button"

const LAST_STEP = 4

export const FormFooter = () => {
  const { activeStep, back, next } = useMultiStepFormContext()

  if (activeStep >= LAST_STEP) {
    return null
  }

  const isSubmitStep = activeStep === LAST_STEP - 1

  return <footer className={style.footer}>
    {activeStep > 0 && (
      <Button
        variant="transparent"
        type="button"
        onClick={back}
      >
        Go Back
      </Button>
    )}

    {isSubmitStep ? (
      <Button key="submit" variant="accent" type="submit">
        Confirm
      </Button>
    ) : (
      <Button key="next" type="button" onClick={next}>
        Next Step
      </Button>
    )}
  </footer>
}
