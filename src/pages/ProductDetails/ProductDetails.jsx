import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="container py-5">
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
    </div>
  );
}

export default ProductDetails;