import React from "react";
import ProductCard from "./product-card";
import { Product } from "../../../../types";

const ProductList = ({ title, data }: { title: string; data: Product[] }) => {
  return (
    <>
      <div className=" h2-bold">{title}</div>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((product: Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>No product found</p>
        </div>
      )}
    </>
  );
};

export default ProductList;
