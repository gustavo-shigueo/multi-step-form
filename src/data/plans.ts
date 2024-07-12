import arcadeIcon from "../assets/images/icon-arcade.svg"
import advancedIcon from "../assets/images/icon-advanced.svg"
import proIcon from "../assets/images/icon-pro.svg"

type PlanNames = "arcade" | "advanced" | "pro"
type Plan = { name: string, monthlyPrice: number, icon: string }
export const plans = new Map<PlanNames, Plan>([
  [
    "arcade",
    { name: "Arcade", monthlyPrice: 9, icon: arcadeIcon }
  ],
  [
    "advanced",
    { name: "Advanced", monthlyPrice: 12, icon: advancedIcon }
  ],
  [
    "pro",
    { name: "Pro", monthlyPrice: 15, icon: proIcon }
  ],
])
