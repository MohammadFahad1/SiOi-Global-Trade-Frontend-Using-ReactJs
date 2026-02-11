import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import defaultProductImage from "../../assets/product_default.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const ProductImageGallery = ({ images, productName = "Product Image" }) => {
  const displayImages =
    images.length > 0 ? images : [{ id: 1, image: defaultProductImage }];
  return (
    <div className="rounded-lg overflow-hidden h-full">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="product-detail-slider h-full"
      >
        {displayImages.map((imageObj, index) => (
          <SwiperSlide key={index}>
            <img
              src={imageObj.image}
              alt={productName}
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImageGallery;
