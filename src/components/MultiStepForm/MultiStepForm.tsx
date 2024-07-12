import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { FormStep } from "../FormStep"
import { Button } from "../Button"
import { PersonalInfoFormStep } from "../PersonalInfoFormStep"
import { SubscriptionFormStep } from "../SubscriptionFormStep"
import { AddonFormStep } from "../AddonFormStep"
import { SummaryFormStep } from "../SummaryFormStep"
import { ThankYouFormStep } from "../ThankYouFormStep"
import { schemas, type FormSchema } from "../../data/schema"
import { Stepper } from "../Stepper"
import { FormFooter } from "../FormFooter"

const steps = [
  "Your info",
  "Select plan",
  "Add-ons",
  "Summary",
]

export const MultiStepForm = () => {
  const [step, setStep] = useState(0)
  const methods = useForm<FormSchema>({
    resolver: zodResolver(schemas[step]),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      plan: "arcade",
      subscription: "monthly",
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
    }
  })

  const { formState: { errors }, trigger, handleSubmit } = methods

  async function handleNext() {
    if (await trigger()) {
      setStep(s => s + 1)
    } else {
      console.error(errors)
    }
  }

  function handleBack() {
    setStep(s => s - 1)
  }

  async function onSubmit(data: unknown) {
    console.log(data)
    await handleNext()
  }

  function onError() {
    console.error(errors)
  }

  return <>
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Stepper steps={steps} activeStep={step} />

        <FormStep step={0} currentStep={step}>
          <PersonalInfoFormStep />
        </FormStep>

        <FormStep step={1} currentStep={step}>
          <SubscriptionFormStep />
        </FormStep>

        <FormStep step={2} currentStep={step}>
          <AddonFormStep />
        </FormStep>

        <FormStep step={3} currentStep={step}>
          <SummaryFormStep setStep={setStep} />
        </FormStep>

        <FormStep step={4} currentStep={step}>
          <ThankYouFormStep />
        </FormStep>

        <FormFooter
          step={step}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      </form>
    </FormProvider>
  </>
}
