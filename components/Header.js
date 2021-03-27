

const Header = () => {
  return (
    <div className="main-header md:rounded-b">
      <p className="text-4xl underline">{process.env.NEXT_PUBLIC_SITE_NAME}</p>
    </div>
  );
};

export default Header;
