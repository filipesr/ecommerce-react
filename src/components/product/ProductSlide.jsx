/* eslint-disable react/forbid-prop-types */
import { ProductCard } from "@/components/product";
import PropType from "prop-types";
import React from "react";

const ProductSlide = ({ products, skeletonCount }) => (
  <div className="product-slide">
    {products.length === 0
      ? new Array(skeletonCount).fill({}).map((product, index) => (
          <ProductCard
            // eslint-disable-next-line react/no-array-index-key
            key={`product-skeleton ${index}`}
            product={product}
          />
        ))
      : products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
  </div>
);

ProductSlide.defaultProps = {
  skeletonCount: 4,
};

ProductSlide.propTypes = {
  products: PropType.array.isRequired,
  skeletonCount: PropType.number,
};

export default ProductSlide;
