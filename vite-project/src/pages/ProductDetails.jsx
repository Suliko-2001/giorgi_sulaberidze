import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>პროდუქტის დეტალები</h2>
      <p>
        არჩეული პროდუქტის ID არის: <strong>{id}</strong>
      </p>
    </div>
  );
}

export default ProductDetails;
