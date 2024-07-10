import { MessageDisplay } from "@/components/common";
import { ProductSlide } from "@/components/product";
import { Link } from "react-router-dom";

export const BannerProdutos = (args) => {
  const { title, link, error, isLoading, fetchProducts, products } = args;
  return (
    <div className="display">
      <div className="display-header">
        <h1>{title}</h1>
        <Link to={link}>Ver tudo</Link>
      </div>
      {error && !isLoading ? (
        <MessageDisplay
          message={error}
          action={fetchProducts}
          buttonLabel="Try Again"
        />
      ) : (
        <ProductSlide products={products} skeletonCount={6} />
      )}
    </div>
  );
};
