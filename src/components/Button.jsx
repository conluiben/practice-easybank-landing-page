const Button = ({ children }) => {
  return (
    <button className="px-8 py-2 rounded-full text-white font-semibold bg-linear-to-r from-limegreen to-brightcyan hover:cursor-pointer hover:opacity-70 duration-200">
      {children}
    </button>
  );
};

export default Button;
