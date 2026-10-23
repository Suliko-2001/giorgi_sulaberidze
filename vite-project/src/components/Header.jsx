import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h2>ჩემი აპლიკაცია</h2>
      <nav>
        <Link to="/" style={linkStyle}>
          მთავარი
        </Link>
        <Link to="/products" style={linkStyle}>
          პროდუქტები
        </Link>
        <Link to="/contact" style={linkStyle}>
          კონტაქტი
        </Link>
      </nav>
    </header>
  );
}

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  backgroundColor: "#282c34",
  color: "white",
};

const linkStyle = {
  color: "white",
  marginLeft: "1rem",
  textDecoration: "none",
};

export default Header;
