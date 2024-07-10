import { ImageLoader } from "@/components/common";
import PropType from "prop-types";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useHistory } from "react-router-dom";
import { ProductShape } from "@/shapes/productShape";
import { displayMoney } from "@/helpers/utils";

const ProductCard = ({ product }) => {
  const history = useHistory();
  const onClickItem = () => {
    if (!product) return;

    history.push(`/product/${product.id}`);
  };

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div
        className="product-display"
        onClick={onClickItem}
        role="presentation"
      >
        <div className="product-display-img">
          {product.imageCollection ? (
            <>
              <ImageLoader
                className="product-card-bg"
                src={
                  product?.imageCollection[1]?.url ??
                  product?.imageCollection[0]?.url
                }
              />
              <ImageLoader
                className="product-card-img"
                src={product?.imageCollection[0]?.url}
              />
            </>
          ) : (
            <Skeleton width="100%" height="100%" />
          )}
        </div>
        <div className="product-display-details">
          <div className="product-display-details-title">
            <span>{product.name || <Skeleton width={80} />}</span>
            <span>[{product?.brand || <Skeleton width={40} />}]</span>
          </div>
          <div className="product-display-details-price">
            <span>
              {product.price ? (
                displayMoney(product.price)
              ) : (
                <Skeleton width={30} />
              )}
            </span>
          </div>
          <div className="product-display-details-pix">
            <span>
              {product.price ? (
                displayMoney(product.price * 0.95)
              ) : (
                <Skeleton width={30} />
              )}
            </span>
            <span>com</span>
            <span>Pix</span>
          </div>
          <div className="product-display-details-card">
            <span>3</span>
            <span>x de</span>
            <span>
              {product.price ? (
                displayMoney(product.price / 3)
              ) : (
                <Skeleton width={30} />
              )}
            </span>
            <span>sem juros</span>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

ProductCard.propTypes = {
  product: ProductShape(),
};

export default ProductCard;
