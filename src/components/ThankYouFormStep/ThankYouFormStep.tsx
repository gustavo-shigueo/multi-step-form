import style from "./ThankYouFormStep.module.css"
import thankYouIcon from "../../assets/images/icon-thank-you.svg"

export const ThankYouFormStep = () => {
  return <div className={style.thanks}>
    <img src={thankYouIcon} role="presentation" />
    <h1>Thank you</h1>

    <p>
      Thanks for confirming your subscription! We hope you have fun
      using our platform. If you ever need support, please feel free
      to email us at support@loremgaming.com.
    </p>
  </div>
}
