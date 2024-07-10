import PropType from "prop-types";

export const ProductShape = () => PropType.shape({
  name: PropType.string,
  brand: PropType.string,
  price: PropType.number,
  maxQuantity: PropType.number,
  description: PropType.string,
  keywords: PropType.arrayOf(PropType.string),
  imageCollection: PropType.arrayOf(PropType.string),
  sizes: PropType.arrayOf(PropType.string),
  isFeatured: PropType.bool,
  isRecommended: PropType.bool,
  isMale: PropType.bool,
  isFemale: PropType.bool,
  availableColors: PropType.arrayOf(PropType.string),
}).isRequired;
