import {
  ArrowLeftOutlined,
  LoadingOutlined,
  CreditCardOutlined,
  TruckOutlined,
  FacebookOutlined,
  TwitterOutlined,
  PinterestOutlined,
} from "@ant-design/icons";
import {
  ColorChooser,
  ImageLoader,
  MessageDisplay,
  SizeChooser,
} from "@/components/common";
import { ProductShowcaseGrid } from "@/components/product";
import { RECOMMENDED_PRODUCTS, SHOP } from "@/constants/routes";
import { displayMoney } from "@/helpers/utils";
import {
  useBasket,
  useDocumentTitle,
  useProduct,
  useRecommendedProducts,
  useScrollTop,
} from "@/hooks";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Select from "react-select";

const ViewProduct = () => {
  const { id } = useParams();
  const { product, isLoading, error } = useProduct(id);
  const { addToBasket, isItemOnBasket } = useBasket(id);
  useScrollTop();
  useDocumentTitle(`View ${product?.name || "Item"}`);

  const [selectedImage, setSelectedImage] = useState(product?.image || "");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured,
  } = useRecommendedProducts(6);

  useEffect(() => {
    setSelectedImage(product?.image);
  }, [product]);

  const onSelectedSizeChange = (size) => {
    setSelectedSize(size);
  };

  const onSelectedColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleAddToBasket = () => {
    addToBasket({
      ...product,
      selectedColor,
      selectedSize: selectedSize || product.sizes[0],
    });
  };

  return (
    <main className="content">
      {isLoading && (
        <div className="loader">
          <h4>Loading Product...</h4>
          <br />
          <LoadingOutlined style={{ fontSize: "3rem" }} />
        </div>
      )}
      {error && <MessageDisplay message={error} />}
      {product && !isLoading && (
        <div className="product-view">
          <Link to={SHOP}>
            <h3 className="button-link d-inline-flex">
              <ArrowLeftOutlined />
              &nbsp; Voltar
            </h3>
          </Link>
          <div className="product-modal">
            {product.imageCollection.length !== 0 && (
              <div className="product-modal-image-collection">
                {product.imageCollection.map((image) => (
                  <div
                    className="product-modal-image-collection-wrapper"
                    key={image.id}
                    onClick={() => setSelectedImage(image.url)}
                    role="presentation"
                  >
                    <ImageLoader
                      className="product-modal-image-collection-img"
                      src={image.url}
                    />
                  </div>
                ))}
              </div>
            )}
            <div className="product-modal-image-wrapper">
              <ImageLoader
                alt={product.name}
                className="product-modal-image"
                src={selectedImage}
              />
            </div>
            <div className="product-modal-details">
              <div className="product-modal-details-novo">
                <div className="product-modal-details-breadcrumbs">
                  breadcrumbs
                </div>
                <div className="product-modal-details-title">
                  {product.name}
                </div>
                <div className="product-modal-details-price">
                  <div className="product-modal-details-price-row">
                    <span>{displayMoney(product.price)}</span>
                    <div className="product-modal-details-price-pix">
                      <span>{displayMoney(product.price * 0.95)}</span>
                      <span>com Pix</span>
                    </div>
                  </div>
                  <div className="product-modal-details-price-card">
                    <span>3x de</span>
                    <span>{displayMoney(product.price / 3)}</span>
                    <span>sem juros</span>
                  </div>
                </div>
                <div className="divider" />
                <div className="product-modal-details-size">
                  <div>TAMANHO</div>

                  <SizeChooser
                    availableSizes={product.sizes}
                    onSelectedSizeChange={onSelectedSizeChange}
                  />
                </div>
                {product.availableColors.length >= 1 && (
                  <div className="product-modal-details-color">
                    <div>COR</div>

                    <ColorChooser
                      availableColors={product.availableColors}
                      onSelectedColorChange={onSelectedColorChange}
                    />
                  </div>
                )}
                <button
                  className={`button button-small product-modal-details-btn ${
                    isItemOnBasket(product.id)
                      ? "button-border button-border-gray"
                      : ""
                  }`}
                  onClick={handleAddToBasket}
                  type="button"
                >
                  {isItemOnBasket(product.id)
                    ? "Remover do Carrinho"
                    : "Comprar"}
                </button>
                <div className="product-modal-details-pay">
                  <CreditCardOutlined />
                  <span>meios de pagamento</span>
                </div>
                <div className="product-modal-details-delivery">
                  <TruckOutlined />
                  <span>meios de envio</span>
                </div>
                <div className="product-modal-details-details">
                  <span>{product.description}</span>
                </div>
                <div className="product-modal-details-sm">
                  <FacebookOutlined />
                  <TwitterOutlined />
                  <PinterestOutlined />
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "10rem" }}>
            <div className="display-header">
              <h1>Recomendados</h1>
              <Link to={RECOMMENDED_PRODUCTS}>Ver Mais</Link>
            </div>
            {errorFeatured && !isLoadingFeatured ? (
              <MessageDisplay
                message={error}
                action={fetchRecommendedProducts}
                buttonLabel="Try Again"
              />
            ) : (
              <ProductShowcaseGrid
                products={recommendedProducts}
                skeletonCount={3}
              />
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default ViewProduct;
