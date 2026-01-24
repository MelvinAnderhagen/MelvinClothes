import "../../styles/error.css";

const Error = () => {
  return (
    <div className="errorPage">
      <h1 className="errorText">Page does not exist</h1>
      <h2 className="errorSubText">
        Please go back to the previous page or select a different option.
      </h2>
    </div>
  );
};

export default Error;
