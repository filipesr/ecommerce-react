import { ArrowRightOutlined } from "@ant-design/icons";
import { MessageDisplay } from "@/components/common";
import { ProductShowcaseGrid } from "@/components/product";
import {
  FEATURED_PRODUCTS,
  RECOMMENDED_PRODUCTS,
  SHOP,
} from "@/constants/routes";
import {
  useDocumentTitle,
  useFeaturedProducts,
  useRecommendedProducts,
  useScrollTop,
} from "@/hooks";
import bannerImg from "@/images/banner-girl.png";
import React from "react";
import { Link } from "react-router-dom";
import { Banner } from "./Banner";
import { BannerProdutos } from "./BannerProdutos";

const Home = () => {
  useDocumentTitle("IGNITE | Home");
  useScrollTop();

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured,
  } = useFeaturedProducts(6);
  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading: isLoadingRecommended,
    error: errorRecommended,
  } = useRecommendedProducts(6);

  return (
    <main className="content">
      <div className="home">
        <Banner />
        <BannerProdutos
          title="Destacados"
          link={FEATURED_PRODUCTS}
          error={errorFeatured}
          isLoading={isLoadingFeatured}
          fetchProducts={fetchFeaturedProducts}
          products={featuredProducts}
        />
        <div>
          <div>MASCULINO</div>
          <div>FEMININO</div>
        </div>
        {/* <BannerProdutos
          title="Recomendados"
          link={RECOMMENDED_PRODUCTS}
          error={errorRecommended}
          isLoading={isLoadingRecommended}
          fetchProducts={fetchRecommendedProducts}
          products={recommendedProducts}
        /> */}
      </div>
    </main>
  );
};

export default Home;
