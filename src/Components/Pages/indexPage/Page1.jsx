import React from "react";
import "./stylePage1.css";
import Header from "../../Header/Header";
import HeaderMenu from "../../Header/headerMenu";
import Footer from "../../Footer/Footer";
import MySlider from '../../Slider/MySlider'
import ReviewsSlider from "../../Layout/reviewsSlider/ReviewsSlider";
import CategoryRow from "../../UI/catalogUI/CategoryRow";

const Page1 = () => {
  return (
    <>
      <Header/>
      <HeaderMenu />
      <MySlider/>
      <CategoryRow/>
      <ReviewsSlider/>
      <Footer/>
    </>
  );
};

export default Page1;