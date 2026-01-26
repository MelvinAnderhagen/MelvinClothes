import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { NavLink } from "react-router-dom";

const RightHeaderIcons = () => {
  return (
    <div className="headerIcons">
      <NavLink to="/cart" className="headerIconLinks">
        {({ isActive }) =>
          isActive ? (
            <ShoppingBasketIcon sx={{ fontSize: "32px" }} />
          ) : (
            <ShoppingBasketOutlinedIcon sx={{ fontSize: "32px" }} />
          )
        }
      </NavLink>
      <NavLink to="/account" className="headerIconLinks">
        {({ isActive }) =>
          isActive ? (
            <AccountCircleIcon sx={{ fontSize: "32px" }} />
          ) : (
            <AccountCircleOutlinedIcon sx={{ fontSize: "32px" }} />
          )
        }
      </NavLink>
    </div>
  );
};

export default RightHeaderIcons;
