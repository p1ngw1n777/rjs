import React, { useEffect } from "react";
import "../css/stylePage1.css";
import Review from "../UI/Review";
import Header from "../UI/Header";
import Menu from "../Menu";
import Footer from "../Footer/Footer";
import MySlider from '../UI/MySlider'
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../Layout/category/CategoryCard";
import { userService } from "../../api/services/reviews.services"
import { reviewToState } from "../../Store/reducer/StatesSlice"

const Page1 = () => {
  
  const Reviews = useSelector(state=>state.StatesSlice.review);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userService.getReviews();
        dispatch(reviewToState(response))
        
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
      }
    };

    fetchData(); 
  }, []); 

  return (
    <>
      <Header/>
      <Menu />
      <MySlider/>
      <div className="reviews-container">
        <div className="reviews">
          {Reviews.map((el, index) => {
            return (
              <Review
                key={index}
                photo={el.photo}
                name={el.name}
                surname={el.surname}
                reviewText={el.text}
                workPhoto={el.wphoto}
              />
            );
          })}
        </div>
      </div>
      <CategoryCard 
        imageUrl={'https://dominilash.ru/upload/iblock/10a/d993wprcus8wescxk1flu2bm0u7xjbp5/Ellipse-1883.png'}
        category={'Клей'}/>
      <Footer/>
    </>
  );
};

export default Page1;

/*
        {
            photo:
                "https://dominilash.ru/upload/resize_cache/iblock/1bc/e7hnkvrpsew9v4l14di4zl8rywrrgje1/70_10000_0/islands_150-_1_.webp",
            name: " Юлия",
            surname: "Доровских",
            reviewText:
                "Заказываю доставку через почту, всегда все быстро! Спасибо. За Клей Х отдельное спасибо, сейчас работаем только на нем, отлично справляется и с классикой, и с обьемами.",
            workPhoto:
                "https://dominilash.ru/upload/medialibrary/9e4/3gn1q3b5ccxrka0k1sxwqtmhr2akmwe3/4.JPG",
        },
        {
            photo:
                "https://dominilash.ru/upload/resize_cache/iblock/1bc/e7hnkvrpsew9v4l14di4zl8rywrrgje1/70_10000_0/islands_150-_1_.webp",
            name: "Мария",
            surname: "Потапчик",
            reviewText:
                "Самый лучший магазин. Вежливые менеджеры, продукция топ! Всегда все во время отправят, упаковка всегда целая. Клея свежие. Я уже второй год на этой продукции.",
            workPhoto:
                "https://dominilash.ru/upload/medialibrary/bbe/azabduldluvn9u2mhwan38ilj1j08d24/3.jpg",
        },
        {
            photo:
                "https://dominilash.ru/upload/resize_cache/iblock/1bc/e7hnkvrpsew9v4l14di4zl8rywrrgje1/70_10000_0/islands_150-_1_.webp",
            name: "Мария",
            surname: "Привалова",
            reviewText:
                "Я очень довольна качеством материалов. Ранее заказывала реснички и клей, они пушка",
            workPhoto:
                "https://dominilash.ru/upload/medialibrary/f78/e1jspl9vaiwn3yh06k72ecjb88jud0w8/2.jpg",
        },
        {
            photo:
                "https://dominilash.ru/upload/resize_cache/iblock/1bc/e7hnkvrpsew9v4l14di4zl8rywrrgje1/70_10000_0/islands_150-_1_.webp",
            name: "Анна",
            surname: "Шитикова",
            reviewText:
                "Любимый магазин с материалами, у которых вообще нет брака. И расположение магазина очень радует. Рядом метро Царицыно ",
            workPhoto:
                "https://dominilash.ru/upload/medialibrary/4d8/qpqdan5yoepxscigmt34jl91ztpxpkxh/1.jpg",
        },*/
