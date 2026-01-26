import { Route, Routes } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from "./Pages/Home";
import "./styles/header.css";
import "./styles/products.css";
import "./styles/product.css";
import "./styles/home.css";
import "./styles/footer.css";
import Products from "./Pages/Products";
import Error from "./Components/Base/Error";
import Product from "./Pages/Product";
import Account from "./Pages/Account";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/account" element={<Account />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
