import { Link } from "react-router-dom";

const LinkTree = () => {
  return (
    <div className="linkTree">
      <Link className="footerLinks" to="/">
        HOME
      </Link>
      <Link className="footerLinks" to="/contact">
        CONTACT
      </Link>
      <Link className="footerLinks" to="/products">
        PRODUCTS
      </Link>
      <Link className="footerLinks" to="/account">
        ACCOUNT
      </Link>
      <Link className="footerLinks" to="/offers">
        OFFERS
      </Link>
    </div>
  );
};

export default LinkTree;
