import './App.css'
import { FormStep } from './components/FormStep'
import { MultiStepFormContextProvider } from './contexts/MultiStepFormContext'

function App() {
  return (
    <>
      <MultiStepFormContextProvider totalSteps={5} onSubmit={e => e.preventDefault()}>
        {/* Sidebar start */}

        Step 1
        Your info

        Step 2
        Select plan

        Step 3
        Add-ons

        Step 4
        Summary

        {/* Sidebar end */}

        <FormStep
          step={1}
          title='Personal info'
          subtitle='Please provide your name, email address, and phone number.'
        >
          Name
          e.g. Stephen King

          Email Address
          e.g. stephenking@lorem.com

          Phone Number
          e.g. +1 234 567 890

        </FormStep>

        <FormStep
          step={2}
          title="Select your plan"
          subtitle="You have the option of monthly or yearly billing."
        >
          Arcade
          $9/mo

          Advanced
          $12/mo

          Pro
          $15/mo

          Monthly
          Yearly
        </FormStep>

        <FormStep
          step={3}
          title="Pick add-ons"
          subtitle="Add-ons help enhance your gaming experience."
        >
          Online service
          Access to multiplayer games
          +$1/mo

          Larger storage
          Extra 1TB of cloud save
          +$2/mo

          Customizable Profile
          Custom theme on your profile
          +$2/mo
        </FormStep>

        <FormStep
          step={4}
          title="Finishing up"
          subtitle="Double-check everything looks OK before confirming."
        >

          {/* Dynamically add subscription and add-on selections here */}

          Total (per month/year)

        </FormStep>

        <FormStep step={5}>
          Thank you!

          Thanks for confirming your subscription! We hope you have fun
          using our platform. If you ever need support, please feel free
          to email us at support@loremgaming.com.
        </FormStep>
      </MultiStepFormContextProvider>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  )
}

export default App
