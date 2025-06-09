const Container = ({
  classNameOuter,
  classNameInner,
  children,
  hasVerticalPadding,
}) => {
  return (
    <div
      className={`flex items-center justify-center w-full py-8 px-8 md:px-16 ${
        hasVerticalPadding && "lg:py-32"
      } ${classNameOuter}`}
    >
      <div className={`w-full max-w-[1200px] ${classNameInner}`}>
        {children}
      </div>
    </div>
  );
};

export default Container;
