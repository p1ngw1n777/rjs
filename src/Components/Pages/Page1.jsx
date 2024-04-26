import React from "react";
import "../css/stylePage1.css";
import Review from "../UI/Review";
import Header from "../UI/Header";
import Menu from "../Menu";
import Footer from "../Footer/Footer";
import MySlider from '../UI/MySlider'
import { useSelector } from "react-redux";

const Page1 = () => {
  
  const Reviews = useSelector(state=>state.StatesSlice.review);

  return (
    <>
      <Header/>
      <Menu />
      <MySlider/>
      <div className="reviews-container">
        <div className="reviews">
          {Reviews.map((el) => {
            return (
              <Review
                photo={el.photo}
                name={el.name}
                surname={el.surname}
                reviewText={el.reviewText}
                workPhoto={el.workPhoto}
              />
            );
          })}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Page1;
