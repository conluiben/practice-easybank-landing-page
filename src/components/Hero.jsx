import Button from "./Button";
// import bgDesktop from "../assets/image-plane.jpg";
// import bgDesktop from "../assets/bg-intro-desktop.svg";
import imgMockups from "../assets/image-mockups.png";

const Hero = ({ className }) => {
  return (
    <div
      className={`flex relative items-center justify-center ${className} py-8 min-h-[60vh] bg-neutral-lightgray bg-[url(/assets/bg-intro-desktop.svg)] bg-[length:auto_150%] bg-no-repeat bg-[position:130%_60%] z-0`}
    >
      <div className="w-full max-w-[1200px]">
        <div className="w-1/3">
          <h1 className="mb-2 text-5xl font-extralight text-neutral-800">
            Next generation digital banking
          </h1>
          <p className="text-lg text-neutral-600 mb-4">
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
        className="absolute top-1/2 -translate-y-1/2 -right-[7.5%] w-[45%] object-contain z-1"
      />
    </div>
  );
};

export default Hero;
