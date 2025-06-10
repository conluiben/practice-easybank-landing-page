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
      classNameInner="flex flex-col gap-8"
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <img src={imgLogo} alt="Easybank Logo" className="invert" />
        <div className="flex gap-4">
          {listSocmed.map((aSocmed, idx) => (
            <a href="#" key={idx}>
              <img src={aSocmed.image} alt={aSocmed.name} />
            </a>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 text-center justify-items-center gap-y-4">
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
      <div className="flex flex-col items-center gap-8">
        <Button>Request Invite</Button>
        <p className="text-neutral-500">© Easybank. All Rights Reserved.</p>
      </div>
    </Container>
  );
};

export default Footer;
