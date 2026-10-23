import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Parent from "./components/Parent";
import Counter from "./components/Counter";
import Optimization from "./components/Optimization";
import RegisterForm from "./components/RegisterForm";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import { useContext } from "react";

function ThemeDisplay() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "1rem",
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        border: "1px solid gray",
        margin: "1rem 0",
      }}
    >
      <h3>3.3 React Context (Theme)</h3>
      <p>
        მიმდინარე თემა: <strong>{theme}</strong>
      </p>
      <button onClick={toggleTheme}>თემის შეცვლა</button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />

        <main style={{ flex: 1, padding: "2rem" }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Parent />
                  <Counter />
                  <ThemeDisplay />
                  <Optimization />
                  <RegisterForm />
                </>
              }
            />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
