import React from "react";
import "../css/stylePage1.css";
import Header from "../UI/Header";
import Menu from "../Menu";
import Footer from "../Footer/Footer";
import MySlider from '../UI/MySlider'
import ReviewsSlider from "../Layout/reviewsSlider/ReviewsSlider";
import CategoryCard from "../Layout/category/CategoryCard";

const Page1 = () => {
  return (
    <>
      <Header/>
      <Menu />
      <MySlider/>
      <ReviewsSlider/>
      <CategoryCard 
        imageUrl={'https://dominilash.ru/upload/iblock/10a/d993wprcus8wescxk1flu2bm0u7xjbp5/Ellipse-1883.png'}
        category={'Клей'}/>
      <Footer/>
    </>
  );
};

export default Page1;