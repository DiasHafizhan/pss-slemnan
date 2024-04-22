import { useEffect, useState } from "react";

type productsTypes = {
  id: number;
  baju: string;
  price: number;
  size: string;
};
const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((response) => {
        setProducts(response.data)
      });
  }, []);
  return (
    <div className="">
      Ini product pages
      {products.map((products: productsTypes) => (
        <div key={products.id}>{products.baju}</div>
      ))}
    </div>
  );
};

export default Product;
