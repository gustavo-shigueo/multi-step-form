import style from "./Stepper.module.css"
import bgSidebarMobile from "../../assets/images/bg-sidebar-mobile.svg"
import bgSidebarDesktop from "../../assets/images/bg-sidebar-desktop.svg"

type StepperProps = {
  activeStep: number
  steps: string[]
}
export const Stepper = ({ steps, activeStep }: StepperProps) => {
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
        const isActive = i === activeStep
        const isLast = i === arr.length - 1
        const isOutOfBounds = i >= arr.length

        return <div
          key={`step-${i}`}
          className={
            `${style.step} ${isActive || (isLast && isOutOfBounds)
              ? "active"
              : ""
              }`.trim()
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
