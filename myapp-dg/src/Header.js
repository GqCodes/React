const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: 'Default Title',
};

export default Header;

/* Default Props: All us to set values for the props expected in the components. If not provided, then default values will take over.  */
