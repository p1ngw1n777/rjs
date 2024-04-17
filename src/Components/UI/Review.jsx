import React from 'react';
import '../UI/Review_style.css'

const Review = ({photo, name, surname, reviewText, workPhoto}) => {
    return (
        <div className="review">
            <div className="review-header">
                <img src={photo} alt={`${name} ${surname}`} className="review-photo" />
                <div className="review-details">
                    <h2>{name} {surname}</h2>
                    <p>{/* Добавьте дополнительные детали, например, число */}</p>
                </div>
            </div>
            <div className="review-content">
                <p>{reviewText}</p>
                {/* Добавьте второе фото клиента, если необходимо */}
            </div>
            <div className="work-photo">
                <img src={workPhoto} alt="Фотография работы" />
            </div>
        </div>
    );
};


export default Review;