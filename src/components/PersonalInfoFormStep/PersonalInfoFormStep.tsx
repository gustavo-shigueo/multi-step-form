import { Input } from "../Input"

export const PersonalInfoFormStep = () => {
  return <>
    <header>
      <h1>Personal info</h1>
      <p>
        Please provide your name, email address, and phone number.
      </p>
    </header>

    <Input
      type="text"
      name="name"
      label="Name"
      placeholder="e.g. Stephen King"
    />

    <Input
      type="email"
      name="email"
      label="Email Address"
      placeholder="e.g. stephenking@lorem.com"
    />

    <Input
      type="tel"
      name="phone"
      label="Phone Number"
      placeholder="e.g. +1 234 567 890"
    />
  </>
}
