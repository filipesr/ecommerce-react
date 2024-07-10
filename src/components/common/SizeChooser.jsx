import PropType from "prop-types";
import React, { useState } from "react";

const SizeChooser = ({ availableSizes, onSelectedSizeChange }) => {
  const [selectedSize, setSelectedSize] = useState("");

  const setSize = (Size) => {
    setSelectedSize(Size);
    onSelectedSizeChange(Size);
  };
  return (
    <div className="size-chooser">
      {availableSizes.map((Size) => (
        <span
          className={
            selectedSize === Size ? "size-item size-item-selected" : "size-item"
          }
          key={Size}
          onClick={() => setSize(Size)}
          role="presentation"
        >{Size}</span>
      ))}
    </div>
  );
};

SizeChooser.propTypes = {
  availableSizes: PropType.arrayOf(PropType.string).isRequired,
  onSelectedSizeChange: PropType.func.isRequired,
};

export default SizeChooser;
