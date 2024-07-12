import { AddonFormStep } from "./components/AddonFormStep"
import { FormFooter } from "./components/FormFooter"
import { FormStep } from "./components/FormStep"
import { PersonalInfoFormStep } from "./components/PersonalInfoFormStep"
import { Stepper } from "./components/Stepper"
import { SubscriptionFormStep } from "./components/SubscriptionFormStep"
import { SummaryFormStep } from "./components/SummaryFormStep"
import { ThankYouFormStep } from "./components/ThankYouFormStep"
import { MultiStepFormContextProvider } from "./contexts/MultiStepFormContext"
import { FormSchema, schemas } from "./data/schema"

const STEPS = [
  "Your info",
  "Select plan",
  "Add-ons",
  "Summary",
]

function App() {
  return <MultiStepFormContextProvider<FormSchema, typeof schemas>
    defaultValues={{
      name: "",
      email: "",
      phone: "",
      plan: "arcade",
      subscription: "monthly",
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
    }}
    schemas={schemas}
    onSubmit={data => console.log(data)}
    onError={console.error}
  >
    <Stepper steps={STEPS} />

    <FormStep step={0}>
      <PersonalInfoFormStep />
    </FormStep>

    <FormStep step={1}>
      <SubscriptionFormStep />
    </FormStep>

    <FormStep step={2}>
      <AddonFormStep />
    </FormStep>

    <FormStep step={3}>
      <SummaryFormStep />
    </FormStep>

    <FormStep step={4}>
      <ThankYouFormStep />
    </FormStep>

    <FormFooter />
  </MultiStepFormContextProvider>
}

export default App

