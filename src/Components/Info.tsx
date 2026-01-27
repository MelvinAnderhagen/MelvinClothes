import { useEffect, useState } from "react";
import useProductFetch from "../Hooks/useProductFetch";
import { CircularProgress } from "@mui/material";

const Info = () => {
  const [randomId, setRandomId] = useState<number>();

  useEffect(() => {
    const id = Math.floor(Math.random() * 20) + 1;
    setRandomId(id);
  }, []);

  const { product, loading, error } = useProductFetch(randomId);

  if (!randomId || loading)
    return (
      <div>
        <CircularProgress color="inherit" />
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="infoContainer">
      <div className="infoText">
        <h1 className="infoTitle">Welcome to Melvin Clothes</h1>
        <p className="infoDescription">
          Discover the latest trends in fashion with Melvin Clothes. We offer a
          wide range of stylish and affordable clothing for all occasions.
        </p>
      </div>
      {product && (
        <img className="infoImage" src={product.image} alt={product.title} />
      )}
    </div>
  );
};

export default Info;
