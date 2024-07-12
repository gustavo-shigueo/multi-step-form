import style from "./SummaryFormStep.module.css"
import { useFormContext } from "react-hook-form"
import { addons } from "../../data/addons"
import { plans } from "../../data/plans"
import { useMemo } from "react"
import { Button } from "../Button"
import { FormSchema } from "../../data/schema"
import { useMultiStepFormContext } from "../../contexts/MultiStepFormContext"

export const SummaryFormStep = () => {
  const { setActiveStep } = useMultiStepFormContext()
  const { watch } = useFormContext<FormSchema>()

  const plan = watch("plan")
  const subscription = watch("subscription")
  const onlineService = watch("onlineService")
  const largerStorage = watch("largerStorage")
  const customizableProfile = watch("customizableProfile")

  const total = useMemo(
    () => {
      const multiplier = subscription === "yearly" ? 10 : 1

      let total = plans.get(plan)!.monthlyPrice * multiplier

      if (onlineService) {
        total += addons.get("onlineService")!.monthlyPrice * multiplier
      }

      if (largerStorage) {
        total += addons.get("largerStorage")!.monthlyPrice * multiplier
      }

      if (customizableProfile) {
        total += addons.get("customizableProfile")!.monthlyPrice * multiplier
      }

      return total
    },
    [plan, subscription, onlineService, largerStorage, customizableProfile]
  )

  return <>
    <header>
      <h1>Finishing up</h1>
      <p>
        Double-check everything looks OK before confirming.
      </p>
    </header>

    <section className={style.summary}>
      <div className={style.cart}>
        <header>
          <h2>
            {plans.get(plan)?.name} ({
              subscription === "yearly"
                ? "Yearly"
                : "Monthly"
            })
          </h2>

          <Button
            variant="link"
            type="button"
            onClick={() => setActiveStep(1)}
          >
            Change
          </Button>

          <strong>
            ${subscription === "yearly"
              ? `${plans.get(plan)!.monthlyPrice * 10}/yr`
              : `${plans.get(plan)!.monthlyPrice}/mo`}
          </strong>
        </header>

        {[...addons.keys()].some(k => watch(k)) && <hr />}

        {[...addons.entries()].map(([name, addon]) => {
          return watch(name) && (
            <div key={name}>
              <p>{addon.title}</p>
              <strong>
                +${subscription === "yearly"
                  ? `${addon.monthlyPrice * 10}/yr`
                  : `${addon.monthlyPrice}/mo`}
              </strong>
            </div>
          )
        })}
      </div>

      <div className={style.total}>
        <p>
          Total (per {subscription === "yearly" ? "year" : "month"})
        </p>
        <strong>
          +${total}/{subscription === "yearly" ? "yr" : "mo"}
        </strong>
      </div>
    </section>
  </>
}
