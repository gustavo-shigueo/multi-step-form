type AddonNames =
  | "onlineService"
  | "largerStorage"
  | "customizableProfile"

type Addon = {
  title: string
  description: string
  monthlyPrice: number
}

export const addons = new Map<AddonNames, Addon>([
  [
    "onlineService",
    {
      title: "Online service",
      description: "Access to multiplayer games",
      monthlyPrice: 1,
    }
  ],
  [
    "largerStorage",
    {
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      monthlyPrice: 2,
    }
  ],
  [
    "customizableProfile",
    {
      title: "Customizable profile",
      description: "Custom theme on your profile",
      monthlyPrice: 2,
    }
  ],
])


