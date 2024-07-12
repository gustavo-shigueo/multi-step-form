import style from "./AddonFormStep.module.css"
import { useFormContext } from "react-hook-form"
import { addons } from "../../data/addons"
import { CheckBox } from "../CheckBox"
import { FormSchema } from "../../data/schema"

export const AddonFormStep = () => {
  const { watch } = useFormContext<FormSchema>()
  return <>
    <header>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
    </header>

    {[...addons.entries()].map(([name, addon]) => {
      return (
        <CheckBox key={name} className={style.addon} name={name}>
          <h2>{addon.title}</h2>
          <p>{addon.description}</p>
          <strong>
            +${watch("subscription") === "yearly"
              ? `${addon.monthlyPrice * 10}/yr`
              : `${addon.monthlyPrice}/mo`}
          </strong>
        </CheckBox>
      )
    })}
  </>
}
