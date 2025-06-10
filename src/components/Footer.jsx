import Container from "./Container";
import imgLogo from "../assets/logo.svg";
import iconFacebook from "../assets/icon-facebook.svg";
import iconYoutube from "../assets/icon-youtube.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconPinterest from "../assets/icon-pinterest.svg";
import iconInstagram from "../assets/icon-instagram.svg";
import Button from "./Button";

const listSocmed = [
  { name: "Facebook", image: iconFacebook },
  { name: "YouTube", image: iconYoutube },
  { name: "Twitter", image: iconTwitter },
  { name: "Pinterest", image: iconPinterest },
  { name: "Instagram", image: iconInstagram },
];

const menuItems = [
  "About Us",
  "Contact",
  "Blog",
  "Careers",
  "Support",
  "Privacy Policy",
];

const Footer = () => {
  return (
    <Container
      classNameOuter="bg-darkblue"
      classNameInner="flex flex-col lg:flex-row gap-8 lg:gap-24"
    >
      <div className="flex flex-col items-center justify-center lg:items-start gap-8 lg:gap-6">
        <img src={imgLogo} alt="Easybank Logo" className="invert" />
        <div className="flex gap-4">
          {listSocmed.map((aSocmed, idx) => (
            <a href="#" key={idx}>
              <img
                src={aSocmed.image}
                alt={aSocmed.name}
                className="w-[25px]"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 text-center justify-items-center lg:justify-items-start gap-4 lg:gap-x-16">
        {menuItems.map((aLink, idx) => (
          <a
            href="#"
            className="text-neutral-100 hover:text-limegreen"
            key={idx}
          >
            {aLink}
          </a>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center lg:items-end lg:grow gap-8 lg:gap-4">
        <Button>Request Invite</Button>
        <p className="text-neutral-500">© Easybank. All Rights Reserved.</p>
      </div>
    </Container>
  );
};

export default Footer;
