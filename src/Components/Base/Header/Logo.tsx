import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="headerLogo">
      <Link className="headerLogoLink" to="/">
        <h1 className="headerText">MelvinClothes</h1>
      </Link>
    </div>
  );
};

export default Logo;
