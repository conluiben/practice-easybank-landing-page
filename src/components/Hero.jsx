import Button from "./Button";
import imgMockups from "../assets/image-mockups.png";

const Hero = ({ className }) => {
  return (
    <div
      className={`flex flex-col flex-col-reverse relative items-center justify-center ${className} min-h-[30vh] xl:min-h-[50vh] bg-neutral-lightgray bg-[url(/assets/bg-intro-mobile.svg)] lg:bg-[url(/assets/bg-intro-desktop.svg)] bg-contain lg:bg-[length:auto_60vw] bg-no-repeat lg:bg-[center_right_-25vw] z-0 gap-4 py-8 px-8 lg:px-16 lg:py-32`}
    >
      <div className="w-full max-w-[1200px]">
        <div className="w-full text-center lg:text-left lg:w-1/3">
          <h1 className="mb-2 text-4xl mb:text-5xl font-extralight text-neutral-800">
            Next generation digital banking
          </h1>
          <p className="descriptive-text mb-4">
            Take your financial life online. Your Easybank account will be a
            one-stop shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button>Request Invite</Button>
        </div>
      </div>
      <img
        src={imgMockups}
        alt="Phone Mockups"
        className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-right-[7.5%] lg:w-[45%] w-[110%] max-w-[100vw] lg:max-w-[100%] lg:max-h-[120vh] -mt-[25%] lg:mt-0 top-0 object-contain z-10"
      />
    </div>
  );
};

export default Hero;
