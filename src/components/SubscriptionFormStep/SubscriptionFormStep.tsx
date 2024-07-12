import style from "./SubscriptionFormStep.module.css"
import { useFormContext } from "react-hook-form"
import { RadioButton } from "../RadioButton"
import { Toggle } from "../Toggle"
import { plans } from "../../data/plans"
import { FormSchema } from "../../data/schema"

export const SubscriptionFormStep = () => {
  const { formState: { errors }, watch } = useFormContext<FormSchema>()
  const error = errors.plan?.message?.toString()

  return <>
    <header>
      <h1>Select your plan</h1>
      <p>
        You have the option of monthly or yearly billing.
      </p>
    </header>

    {!!error && (
      <output className="text-danger weight-500">
        {error}
      </output>
    )}

    <div className={style.plans}>
      {[...plans.entries()].map(([name, plan]) => {
        return (
          <RadioButton
            key={name}
            name="plan"
            value={name}
            className={style.plan}
          >
            <img src={plan.icon} role="presentation" />

            <div>
              <h2>{plan.name}</h2>
              {watch("subscription") === "yearly" ? (
                <>
                  <p>${plan.monthlyPrice * 10}/yr</p>
                  <p><strong>2 months free</strong></p>
                </>
              ) : <p>${plan.monthlyPrice}/mo</p>}
            </div>
          </RadioButton>
        )
      })}
    </div>

    <div className={style.subscription}>
      <Toggle
        name="subscription"
        options={[
          { label: "Monthly", value: "monthly" },
          { label: "Yearly", value: "yearly" },
        ]}
      />
    </div>
  </>
}
