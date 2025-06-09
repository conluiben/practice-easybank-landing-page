import Container from "./Container";
import imgMoney from "../assets/image-currency.jpg";
import imgRestaurant from "../assets/image-restaurant.jpg";
import imgPlane from "../assets/image-plane.jpg";
import imgConfetti from "../assets/image-confetti.jpg";

const listArticles = [
  {
    headline: "Receive money in any currency with no fees",
    author: "Claire Robinson",
    body: "Receive money through lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: imgMoney,
  },
  {
    headline: "Treat yourself without worrying about money",
    author: "Wilson Hutton",
    body: "Treat yourself through Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: imgRestaurant,
  },
  {
    headline: "Take your Easybank card wherever you go",
    author: "Wilson Hutton",
    body: "Take your Easybank Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: imgPlane,
  },
  {
    headline: "Our invite-only Beta accounts are now live!",
    author: "Claire Robinson",
    body: "Our invite-only Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: imgConfetti,
  },
];

const Articles = () => {
  return (
    <Container
      classNameOuter="bg-neutral-lightgray"
      classNameInner="text-center md:text-left"
      hasVerticalPadding
    >
      <h2 className="text-3xl font-extralight mb-8">Latest Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 auto-rows-fr">
        {listArticles.map((anArticle) => (
          <div className="flex flex-col bg-white rounded-lg overflow-hidden">
            <img
              src={anArticle.image}
              alt={anArticle.headline}
              className="w-full h-[200px] object-cover object-center"
            />
            <div className="flex flex-col justify-center p-6 grow gap-2 text-left">
              <p className="descriptive-text !text-xs">By {anArticle.author}</p>
              <h4 className="text-xl/6 font-light mb-2">
                {anArticle.headline}
              </h4>
              <p className="descriptive-text line-clamp-4">{anArticle.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Articles;
