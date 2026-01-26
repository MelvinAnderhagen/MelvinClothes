import { NavLink } from "react-router-dom";
import Shop2Icon from "@mui/icons-material/Shop2";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import Shop2OutlinedIcon from "@mui/icons-material/Shop2Outlined";

const LeftHeaderIcons = () => {
  return (
    <div className="headerIcons">
      <NavLink to="/products" className="headerIconLinks">
        {({ isActive }) =>
          isActive ? (
            <Shop2Icon sx={{ fontSize: "32px" }} />
          ) : (
            <Shop2OutlinedIcon sx={{ fontSize: "32px" }} />
          )
        }
      </NavLink>
      <NavLink to="/offers" className="headerIconLinks">
        {({ isActive }) =>
          isActive ? (
            <LocalOfferIcon sx={{ fontSize: "32px" }} />
          ) : (
            <LocalOfferOutlinedIcon sx={{ fontSize: "32px" }} />
          )
        }
      </NavLink>
    </div>
  );
};

export default LeftHeaderIcons;
