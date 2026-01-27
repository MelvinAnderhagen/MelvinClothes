import { Route, Routes } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from "./Pages/Home";
import "./styles/header.css";
import "./styles/products.css";
import "./styles/product.css";
import "./styles/home.css";
import "./styles/footer.css";
import "./styles/account.css";
import Products from "./Pages/Products";
import Error from "./Components/Base/Error";
import Product from "./Pages/Product";
import Account from "./Pages/Account";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/account" element={<Account username={username} />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={<Login setUsername={setUsername} username={username} />}
        />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
