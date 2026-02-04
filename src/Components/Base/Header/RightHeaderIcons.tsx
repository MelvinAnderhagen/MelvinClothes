import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import useLogin from "../../../Hooks/useLogin";
import LogoutIcon from "@mui/icons-material/Logout";

const RightHeaderIcons = () => {
  const { isAuthenticated, logout } = useLogin();

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
      {isAuthenticated ? (
        <NavLink to="/account" className="headerIconLinks">
          {({ isActive }) =>
            isActive ? (
              <AccountCircleIcon sx={{ fontSize: "32px" }} />
            ) : (
              <AccountCircleOutlinedIcon sx={{ fontSize: "32px" }} />
            )
          }
        </NavLink>
      ) : (
        <NavLink to="/login" className="headerIconLinks">
          <Button
            variant="outlined"
            size="medium"
            sx={{
              textTransform: "none",
              fontSize: "14px",
              color: "black",
              padding: "0px 16px",
              borderColor: "black",
              borderRadius: "36px",
            }}
          >
            Sign In
          </Button>
        </NavLink>
      )}
      {isAuthenticated ? (
        <a style={{ cursor: "pointer" }} onClick={() => logout()}>
          <LogoutIcon sx={{ fontSize: "30px" }} />
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default RightHeaderIcons;
