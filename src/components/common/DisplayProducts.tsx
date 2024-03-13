import React from "react";
import ProductCard from "./ProductCard";
import image from '@/assets/loan.webp'
import image1 from '@/assets/insurance.jpg'
import image2 from '@/assets/saving.png'
import image3 from '@/assets/loan2.webp'
const DisplayProducts = () => {
  return (
    <div className=" mx-auto ">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <ProductCard image={image} title="ऋण सेवा" description="ज्योतिपुञ्ज सहकारी संस्थाले सदस्यहरुको लागि उद्यमी कर्जा, कृषि कर्जा, शैक्षिक कर्जा, आवास कर्जा लगायत अन्य कर्जा सेवा प्रदान गरेको छ ।" />
            <ProductCard image={image1} title="ऋण सेवा" description="ज्योतिपुञ्ज सहकारी संस्थाले सदस्यहरुको लागि उद्यमी कर्जा, कृषि कर्जा, शैक्षिक कर्जा, आवास कर्जा लगायत अन्य कर्जा सेवा प्रदान गरेको छ ।" />
            <ProductCard image={image3} title="ऋण सेवा" description="ज्योतिपुञ्ज सहकारी संस्थाले सदस्यहरुको लागि उद्यमी कर्जा, कृषि कर्जा, शैक्षिक कर्जा, आवास कर्जा लगायत अन्य कर्जा सेवा प्रदान गरेको छ ।" />
            <ProductCard image={image} title="ऋण सेवा" description="ज्योतिपुञ्ज सहकारी संस्थाले सदस्यहरुको लागि उद्यमी कर्जा, कृषि कर्जा, शैक्षिक कर्जा, आवास कर्जा लगायत अन्य कर्जा सेवा प्रदान गरेको छ ।" />
        </div>
      </div>
    </div>
  );
};

export default DisplayProducts;
