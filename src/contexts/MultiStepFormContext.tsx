import { zodResolver } from "@hookform/resolvers/zod";
import { createContext, type Dispatch, type SetStateAction, useContext, useState, type PropsWithChildren } from "react";
import { FormProvider, useForm, type DefaultValues } from "react-hook-form";
import type { ZodType, ZodTypeDef } from "zod";

const MultiStepFormContext = createContext<MultiStepFormContextData | null>(null)

type MultiStepFormContextData = {
  activeStep: number
  setActiveStep: Dispatch<SetStateAction<number>>
  next: () => Promise<void>
  back: () => void
}

export const useMultiStepFormContext = () => {
  const data = useContext(MultiStepFormContext)

  if (!data) {
    throw new Error("This hook must be used inside a MultiStepFormContextProvider")
  }

  return data
}

type ZodSchema = ZodType<unknown, ZodTypeDef, unknown>
type MultiStepFormContextProviderProps<T extends object, U extends readonly ZodSchema[]> = PropsWithChildren<{
  defaultValues?: Required<DefaultValues<T>>
  schemas: U
  onSubmit: (data: T) => void | Promise<void>
  onError?: (error: unknown) => void | Promise<void>
}>

export const MultiStepFormContextProvider = <
  T extends object,
  U extends readonly ZodSchema[]
>({
  children,
  defaultValues,
  schemas,
  onSubmit,
  onError
}: MultiStepFormContextProviderProps<T, U>) => {
  const [activeStep, setActiveStep] = useState(0)
  const methods = useForm<T>({
    defaultValues: defaultValues as DefaultValues<T> | undefined,
    resolver: zodResolver(schemas[activeStep])
  })

  const { handleSubmit, trigger, formState: { errors } } = methods

  async function next() {
    if (await trigger()) {
      setActiveStep(s => s + 1)
    } else {
      console.error(errors)
    }
  }

  function back() {
    setActiveStep(s => Math.max(s - 1, 0))
  }

  const value = { activeStep, setActiveStep, next, back }
  return <MultiStepFormContext.Provider value={value}>
    <FormProvider {...methods}>
      <form
        onSubmit={
          handleSubmit(
            async data => {
              onSubmit(data)
              await next()
            },
            error => {
              console.error(errors)
              onError?.(error)
            },
          )
        }
      >
        {children}
      </form>
    </FormProvider>
  </MultiStepFormContext.Provider>
}
