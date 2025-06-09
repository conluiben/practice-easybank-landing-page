import logoImg from "../assets/logo.svg";
import burgerIcon from "../assets/icon-hamburger.svg";
import Button from "./Button";
import { useState } from "react";
import useTailwindBreakpoint from "../utils/detectScreenSize.js";
import Container from "./Container.jsx";

const Navbar = ({ className }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const isMobile = useTailwindBreakpoint();

  return (
    <Container
      classNameOuter={`fixed top-0 bg-white lg:py-0 ${className}`}
      classNameInner={`flex flex-row justify-between`}
    >
      <div className="flex place-content-center">
        <img src={logoImg} alt="Easybank Logo" className="object-contain" />
      </div>
      <div
        className={`${
          isMobile ? (isMenuShown ? "flex" : "hidden") : "flex"
        } fixed lg:static gap-x-0 bg-white flex-col lg:flex-row w-[100%] lg:w-auto  left-0 top-[80px] lg:top-0 mx-auto`}
      >
        {["Home", "About", "Contact", "Blog", "Careers"].map((aLink, idx) => (
          <a
            key={idx}
            href="#"
            className="text-sm flex items-center p-4 hover:bg-neutral-lightblue transition-[background-color] duration-200 lg:hover:border-b-3 lg:hover:border-limegreen"
          >
            {aLink}
          </a>
        ))}
      </div>
      <div className="hidden lg:flex items-center justify-center">
        <Button>Request Invite</Button>
      </div>
      <div className="flex items-center justify-center lg:hidden">
        <img
          src={burgerIcon}
          alt="Menu Icon"
          onClick={() => setIsMenuShown((prevShown) => !prevShown)}
        />
      </div>
    </Container>
  );
};

export default Navbar;
