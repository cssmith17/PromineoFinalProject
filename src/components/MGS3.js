import React, { useState } from "react";

import ReviewTable from "./ReviewTable";
import ReviewForm from "./ReviewForm";
import EditReviewForm from "./EditReviewForm";
import { VideoGamesData } from './VideoGamesData';

//This component adds functionality to add, view, delete, and edit reviews, as well as displaying related video game info

export default function MGS3() {
     const gameReviews = [
      
      ];
    
      const initialFormState = { id: null, username: "", review: "", rating: null };

      //SETTING THE STATE
      const [reviews, setReviews] = useState(gameReviews);
      const [currentReview, setCurrentReview] = useState(initialFormState);
      const [editing, setEditing] = useState(false);
    
      // CRUD OPERATIONS
    
      //ADD A REVIEW
      const addReview = (review) => {
        review.id = reviews.length + 1;
        setReviews([...reviews, review]);
      };
    
      //DELETE A REVIEW
      const deleteReview = (id) => {
        setReviews(reviews.filter((review) => review.id !== id));
      };
    
      // //UPDATE REVIEW
    
      const updateReview = (id, updatedReview) => {
        setEditing(false);
    
        setReviews(
          reviews.map((review) => (review.id === id ? updatedReview : review))
        );
      };
    
      //EDIT ROW
      const editRow = (review) => {
        setEditing(true);
    
        setCurrentReview({
          id: review.id,
          username: review.username,
          review: review.review,
          rating: review.rating
        });
      };
    
      return (
        <div id="main-container">

<div className="mx-auto content-center max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<img className="rounded-t-lg mx-auto" src={VideoGamesData[2].poster} alt="" />
</div>
<div className="mx-auto content-center max-w-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
<div className="grid grid-cols-2">
<h5 className="text-center mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{VideoGamesData[2].title}</h5>
<div className="col-start-1">
<p className="text-center bg-green-100 text-lg text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">MetaCritic: {VideoGamesData[2].ms}</p>
<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{VideoGamesData[2].plot}</p>
        </div>
        <div className="col-start-2">
        <img className="rounded-t-lg" src={VideoGamesData[2].logo} />
        </div>
        </div>
     </div>

    
          <div className="grid grid-rows-1 grid-cols-3">
    
            <div className="col-start-2">
              <h2 className="mb-1 text-2xl font-bold">View Reviews</h2>
              <ReviewTable
                reviews={reviews}
                deleteReview={deleteReview}
                editRow={editRow}
              />
              <div className="">
              {editing ? (
                <div>
                  <h2 className="block text-2xl font-bold text-gray-900">Edit Review</h2>
                  <EditReviewForm
                    setEditing={setEditing}
                    currentReview={currentReview}
                    updateReview={updateReview}
                  />
                </div>
              ) : (
                <div className="">
                  <h2 className="block text-2xl font-bold text-gray-900">Add a Review</h2>
                  <ReviewForm addReview={addReview} />
                </div>
              )}
            </div>
            </div>
          </div>
        </div>
      );
    };