import style from "./Stepper.module.css"
import bgSidebarMobile from "../../assets/images/bg-sidebar-mobile.svg"
import bgSidebarDesktop from "../../assets/images/bg-sidebar-desktop.svg"
import { useMultiStepFormContext } from "../../contexts/MultiStepFormContext"

type StepperProps = {
  steps: string[]
}
export const Stepper = ({ steps }: StepperProps) => {
  const { activeStep } = useMultiStepFormContext()

  return <aside className={style.stepper}>
    <picture role="presentation">
      <source
        srcSet={bgSidebarMobile}
        media="(width < 50rem)"
      />

      <img src={bgSidebarDesktop} />
    </picture>

    <div>
      {steps.map((s, i, arr) => {
        const isCurrentStep = i === activeStep
        const isLast = i === arr.length - 1
        const isOutOfBounds = activeStep >= arr.length

        const active = isCurrentStep || (isLast && isOutOfBounds)

        return <div
          key={`step-${i}`}
          className={
            `${style.step} ${active ? style.active : ""}`.trim()
          }
        >
          <span>{i + 1}</span>

          <p>Step {i + 1}</p>
          <strong>{s}</strong>
        </div>
      })}
    </div>
  </aside>
}
