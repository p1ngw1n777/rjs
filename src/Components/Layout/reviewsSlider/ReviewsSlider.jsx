import React, { useEffect } from 'react';
import Review from "../../UI/Review";
import { useDispatch, useSelector } from "react-redux";
import { dataService } from "../../../api/services/data.services";
import { reviewToState } from "../../../Store/reducer/StatesSlice"


const ReviewsSlider = () => {
    
    const dispatch = useDispatch();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await dataService.getReviews();
          dispatch(reviewToState(response.obj1))
        } 
        catch (error) {
          console.error('Ошибка при выполнении запроса:', error);
        }
      };
      fetchData(); 
    }, []); 
	
    const Reviews = useSelector(state=>state.StatesSlice.review);
    return (
        <div>
            <div className="reviews-container">
                <div className="reviews">
                {
                  Reviews.map((el, index) => {
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
                  })
				}
                </div>
            </div>
        </div>
    );
};

export default ReviewsSlider;