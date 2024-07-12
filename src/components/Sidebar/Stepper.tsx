import style from "./SideBar.module.css"
import bgSidebarMobile from "../../assets/images/bg-sidebar-mobile.svg"
import bgSidebarDesktop from "../../assets/images/bg-sidebar-desktop.svg"
import { useMultiStepFormContext } from "../../contexts/MultiStepFormContext"

type SideBarProps = {
  steps: string[]
}
export const SideBar = ({ steps }: SideBarProps) => {
  const { activeStep } = useMultiStepFormContext()

  return <aside className={style.sidebar}>
    <picture>
      <source
        srcSet={bgSidebarMobile}
        media="(width < 50rem)"
      />

      <img
        role="presentation"
        src={bgSidebarDesktop}
        alt=""
      />
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
