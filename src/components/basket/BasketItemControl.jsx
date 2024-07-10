import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import PropType from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { addQtyItem, minusQtyItem } from "@/redux/actions/basketActions";
import { ProductShape } from "@/shapes/productShape";

const BasketItemControl = ({ product }) => {
  const dispatch = useDispatch();

  const onAddQty = () => {
    if (product.quantity < product.maxQuantity) {
      dispatch(addQtyItem(product.id));
    }
  };

  const onMinusQty = () => {
    if (product.maxQuantity >= product.quantity && product.quantity !== 0) {
      dispatch(minusQtyItem(product.id));
    }
  };

  return (
    <div className="basket-item-control">
      <button
        className="button button-border button-border-gray button-small basket-control basket-control-add"
        disabled={product.maxQuantity === product.quantity}
        onClick={onAddQty}
        type="button"
      >
        <PlusOutlined style={{ fontSize: "9px" }} />
      </button>
      <button
        className="button button-border button-border-gray button-small basket-control basket-control-minus"
        disabled={product.quantity === 1}
        onClick={onMinusQty}
        type="button"
      >
        <MinusOutlined style={{ fontSize: "9px" }} />
      </button>
    </div>
  );
};

BasketItemControl.propTypes = {
  product: ProductShape(),
};

export default BasketItemControl;
