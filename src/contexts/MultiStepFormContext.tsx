import {
  createContext,
  useContext,
  useState,
  type DOMAttributes,
  type Dispatch,
  type SetStateAction,
  type ReactNode,
  type FormEventHandler,
} from "react";

type MultiStepFormContextValue = {
  step: number,
  setStep: Dispatch<SetStateAction<number>>
  totalSteps: number,
}

const MultiStepFormContext = createContext<MultiStepFormContextValue>({} as MultiStepFormContextValue)

export const useMultiStepFormContext = () => {
  return useContext(MultiStepFormContext)
}

type MultiStepFormContextProviderProps = DOMAttributes<HTMLFormElement> & {
  children: ReactNode
  totalSteps: number
  onSubmit: FormEventHandler<HTMLFormElement>
}

export function MultiStepFormContextProvider({
  children,
  totalSteps,
  ...props
}: MultiStepFormContextProviderProps) {
  const [step, setStep] = useState(1)
  return <MultiStepFormContext.Provider value={{ step, setStep, totalSteps }}>
    <form {...props}>
      {children}
    </form>
  </MultiStepFormContext.Provider>
}
