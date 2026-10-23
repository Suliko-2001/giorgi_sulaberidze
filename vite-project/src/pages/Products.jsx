import { Link } from "react-router-dom";

function Products() {
  const productsList = [
    { id: 1, name: "ლეპტოპი" },
    { id: 2, name: "ტელეფონი" },
    { id: 3, name: "ყურსასმენი" },
  ];

  return (
    <div>
      <h2>პროდუქტების გვერდი</h2>
      <ul>
        {productsList.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
