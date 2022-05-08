import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
export const PRODUCT_FALLBACK_IMAGE = "/images/design/placeholder.svg";

const Product = ({data, onSelect}) => {

  const onProductClick = (productId) => {
    onSelect(productId);
  };

  function pricingLabel(code) {
    switch (code) {
      case 'cakes':
        return 'Per pound';
      case 'muffins':
        return 'Per piece'
      default:
        return "";
    }
  }

  const {
    id,
    name,
    price,
    description,
    imageUrl,
    category_id,
    category_code,
    category_name,
  } = data;
  return (
    // <Link href={`/products/${id}`}>
    <div className="product-card-container">
      <motion.div className="card product-card" layoutId={`product-card-${id}`} onClick={() => onProductClick(id)}>
        <motion.div className="product-card-content" layoutId={`product-card-content-${id}`}>
          <motion.div className="image-container" layoutId={`image-container-${id}`}>
            <Image
              src={imageUrl || PRODUCT_FALLBACK_IMAGE}
              alt={name}
              layout={'fill'}
              className={imageUrl || 'placeholder-img'}
            />
          </motion.div>
          <motion.div className="caption" layoutId={`caption-${id}`}>
            <div className="title-container">
              <h3 className="title">{name}</h3>
            </div>
            <div className="price-container">
              <span className="price">Rs. {price}</span>
              {/*<span className="price-label">{pricingLabel(category_code)}</span>*/}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
    // </Link>
  );
};

export default Product;
