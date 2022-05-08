import React from 'react';
import Image from 'next/image';
import Product, {PRODUCT_FALLBACK_IMAGE} from './product';
import IconClose from './icons/icon-close';
import {motion} from "framer-motion";

const ProductDetailView = ({data, onClose}) => {

  const onCloseClick = () => {
    onClose(true);
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
    <>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0, transition: {duration: 0.15}}}
        transition={{type: "tween", duration: 0.15}}
        style={{pointerEvents: "auto"}}
        className="overlay"
      >
        <a onClick={onClose}/>
      </motion.div>
      <div className="product-card-container open">
        <motion.div className="card product-card" layoutId={`product-card-${id}`}>
          <motion.a className="icon-btn close-btn" onClick={onCloseClick}>
            <IconClose/>
          </motion.a>
          <motion.div className="product-card-content" layoutId={`product-card-content-${id}`}>
            <motion.div className="image-container" layoutId={`image-container-${id}`}>
              <Image
                src={imageUrl || PRODUCT_FALLBACK_IMAGE}
                alt={'name'}
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
              {/* New Fields*/}
              <motion.div
                initial={{opacity: 0, y: 24}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 40, transition: {duration: 0.2}}}
                transition={{duration: 0.4, delay: 0.4}}>
                <motion.div className="description">{description}</motion.div>
                {/*<motion.div className="additional-content">
                  <h5>Available toppings</h5>
                  <div className="grid-toppings">
                    <div className="topping-img">
                      <Image
                        src={'/images/design/chocolate.jpeg'}
                        alt={'chocolate'}
                        layout={'fill'}
                      />
                    </div>
                    <div className="topping-img">
                      <Image
                        src={'/images/design/strawberries.jpeg'}
                        alt={'strawberries'}
                        layout={'fill'}
                      />
                    </div>
                    <div className="topping-img">
                      <Image
                        src={'/images/design/sprinkles.jpeg'}
                        alt={'sprinkles'}
                        layout={'fill'}
                      />
                    </div>
                    <div className="topping-img">
                      <Image
                        src={'/images/design/fruits.jpeg'}
                        alt={'fruits'}
                        layout={'fill'}
                      />
                    </div>
                  </div>
                </motion.div>*/}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default ProductDetailView;

