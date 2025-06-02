import logoImg from "../assets/logo.svg";
import Button from "./Button";
const Navbar = ({ className }) => {
  return (
    <div
      className={`fixed flex justify-center w-full top-0 bg-white ${className}`}
    >
      <div className="flex px-8 justify-between w-full max-w-[1200px]">
        <div className="flex place-content-center">
          <img src={logoImg} alt="Easybank Logo" className="object-contain" />
        </div>
        <div className="flex gap-x-0">
          {["Home", "About", "Contact", "Blog", "Careers"].map((aLink, idx) => (
            <a
              key={idx}
              href="#"
              className="text-sm flex items-center p-4 hover:bg-neutral-lightblue transition-[background-color] duration-200 hover:border-b-3 hover:border-limegreen"
            >
              {aLink}
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Button>Request Invite</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
