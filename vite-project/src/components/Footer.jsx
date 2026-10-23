function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} ყველა უფლება დაცულია.</p>
    </footer>
  );
}

const footerStyle = {
  textAlign: "center",
  padding: "1rem",
  backgroundColor: "#f1f1f1",
  marginTop: "auto",
};

export default Footer;
