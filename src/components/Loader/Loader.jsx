import "./Loader.css";

function Loader({ message = "Loading..." }) {
  return (
    <div className="tm-loader" role="status" aria-live="polite">
      <div className="tm-spinner"></div>
      <p>{message}</p>
    </div>
  );
}

export default Loader;