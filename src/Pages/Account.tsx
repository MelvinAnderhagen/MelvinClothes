import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "../Hooks/useLogin";
import { CircularProgress } from "@mui/material";
import useUsersFetch from "../Hooks/useUsersFetch";
import type { User } from "../Interfaces/User";
import profileImage from "../assets/profile.png";

interface accountProps {
  username: string;
}

const Account = ({ username }: accountProps) => {
  const { isAuthenticated, isInitialized } = useLogin();
  const { users, loading } = useUsersFetch();
  const [filteredUser, setFilteredUser] = useState<User>();
  const navigate = useNavigate();

  useEffect(() => {
    if (isInitialized && !isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, isInitialized, navigate]);

  useEffect(() => {
    const filtered = users.find((user) => user.username === username);
    setFilteredUser(filtered);
    console.log(filtered);
  }, [users, username]);

  if (!isInitialized) {
    return <CircularProgress color="inherit" />;
  }

  if (loading) return <CircularProgress color="inherit" />;

  if (!filteredUser) return <div>User not found</div>;

  return (
    <div className="accountContainer">
      <div className="accountImage">
        <img src={profileImage} alt="avatar" />
      </div>
      <div className="accountContent">
        <h1 className="accountName">
          {filteredUser.name.firstname} {filteredUser.name.lastname}
        </h1>
        <h2 className="accountUsername">Username: {filteredUser.username}</h2>
        <p className="accountParagraph">Email: {filteredUser.email}</p>
        <p className="accountParagraph">Phone: {filteredUser.phone}</p>
        <p className="accountParagraph">
          Address: <strong>{filteredUser.address.street}</strong>,{" "}
          <strong>{filteredUser.address.city}</strong>
        </p>
      </div>
    </div>
  );
};

export default Account;
