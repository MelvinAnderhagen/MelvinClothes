import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { NavLink } from "react-router-dom";

const HeaderIcons = () => {
  return (
    <div className="headerIcons">
      <NavLink to="/cart">
        <ShoppingCartOutlinedIcon sx={{ fontSize: "32px" }} />
      </NavLink>
      <NavLink to="/account">
        <AccountCircleOutlinedIcon sx={{ fontSize: "32px" }} />
      </NavLink>
    </div>
  );
};

export default HeaderIcons;
