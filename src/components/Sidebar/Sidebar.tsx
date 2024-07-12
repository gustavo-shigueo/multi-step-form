import type { Dispatch, SetStateAction } from "react"

type SidebarProps = {
  currentStep: number
  setCurrentStep: Dispatch<SetStateAction<number>>
}
export const Sidebar = ({ currentStep, setCurrentStep }: SidebarProps) => {
  return <aside>
    <button
      type="button"
      disabled={currentStep < 1}
      onClick={() => setCurrentStep(1)}
    >
      Step 1
      Your info
    </button>

    <button
      type="button"
      disabled={currentStep < 2}
      onClick={() => setCurrentStep(2)}
    >
      Step 2
      Select plan
    </button>

    <button
      type="button"
      disabled={currentStep < 3}
      onClick={() => setCurrentStep(3)}
    >
      Step 3
      Add-ons
    </button>

    <button
      type="button"
      disabled={currentStep < 4}
      onClick={() => setCurrentStep(4)}
    >
      Step 4
      Summary
    </button>
  </aside>
}
