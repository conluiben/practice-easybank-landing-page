import iconOnline from "../assets/icon-online.svg";
import iconBudgeting from "../assets/icon-budgeting.svg";
import iconOnboarding from "../assets/icon-onboarding.svg";
import iconApi from "../assets/icon-api.svg";
import Container from "./Container";

const listOfBenefits = [
  {
    heading: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    image: iconOnline,
  },
  {
    heading: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you're close to your hitting limits.",
    image: iconBudgeting,
  },
  {
    heading: "Fast Onboarding",
    description:
      "We don't do branches. Open your account in minutes online and start taking control of your finances right away",
    image: iconOnboarding,
  },
  {
    heading: "Open API",
    description:
      "Manage your savings, investments, pension and much more from one account. Tracking your money has never been easier.",
    image: iconApi,
  },
];

const Benefits = () => {
  return (
    <Container classNameInner="text-center" hasVerticalPadding>
      <h2 className="text-3xl font-extralight mb-2">Why choose Easybank?</h2>
      <p className="descriptive-text mb-16">
        We leverage Open Banking to turn you bank account into your financial
        hub. Control your finances like never before.
      </p>
      <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
        {listOfBenefits.map((aBenefit) => {
          return (
            <div className="flex flex-col gap-4 items-center md:text-left md:items-start">
              <img src={aBenefit.image} alt={aBenefit.heading} />
              <h3>{aBenefit.heading}</h3>
              <p className="descriptive-text">{aBenefit.description}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Benefits;
