import { Outlet } from "react-router-dom";
import Footer from "../Components/Base/Footer";
import Header from "../Components/Base/Header/Header";

const RootLayout = () => {
  return (
    <div className="rootLayout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
