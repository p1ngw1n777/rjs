import React from "react";
import "../css/stylePage1.css";
import Header from "../UI/Header";
import Menu from "../Menu";
import Footer from "../Footer/Footer";
import MySlider from '../UI/MySlider'
import ReviewsSlider from "../Layout/reviewsSlider/ReviewsSlider";
import CategoryRow from "../UI/CategoryRow";

const Page1 = () => {
  return (
    <>
      <Header/>
      <Menu />
      <MySlider/>
      <CategoryRow/>
      <ReviewsSlider/>
      <Footer/>
    </>
  );
};

export default Page1;