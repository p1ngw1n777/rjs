import React, { useEffect } from 'react';
import Review from "../../UI/Review";
import { useDispatch, useSelector } from "react-redux";
import { userService } from "../../../api/services/reviews.services";
import { reviewToState } from "../../../Store/reducer/StatesSlice"


const ReviewsSlider = () => {
    const Reviews = useSelector(state=>state.StatesSlice.review);
    const dispatch = useDispatch();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await userService.getReviews();
          dispatch(reviewToState(response))
        } 
        catch (error) {
          console.error('Ошибка при выполнении запроса:', error);
        }
      };
      fetchData(); 
    }, []); 
  
    return (
        <div>
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
        </div>
    );
};

export default ReviewsSlider;