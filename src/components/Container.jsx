const Container = ({
  classNameOuter,
  classNameInner,
  children,
  hasVerticalPadding,
}) => {
  return (
    <div
      className={`flex items-center justify-center w-full p-8 md:px-16 ${
        hasVerticalPadding && "py-16 lg:py-24"
      } ${classNameOuter}`}
    >
      <div className={`w-full max-w-[1200px] ${classNameInner}`}>
        {children}
      </div>
    </div>
  );
};

export default Container;
