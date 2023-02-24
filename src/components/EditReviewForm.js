import React, { useState } from 'react';

//This component functions similarly to the review form, but allows editing existing reviews instead of creating them

const EditReviewForm = (props) => {
    const [review, setReview] = useState(props.currentReview);
    const [hover, setHover] = useState(5);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setReview({ ...review, [name]: value });
    };

    const handleClick = (e) => {
        e.preventDefault();
        const { name, value } = e.target.parentElement;
        setReview({ ...review, [name]: value });

    }
  
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
  
          props.updateReview(review.id, review);
        }}
      >

<div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            name="rating"
            value={index}
            onClick={handleClick}
            className={index <= (hover || review.rating) ? "on" : "off"}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(index)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
        <div className="">
        <label class="block mb-2 text-lg font-bold text-gray-900">Enter Username:</label>
        <input type="text" 
        id="small-input" 
        class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pb-12"
        name="Username"
        value={review.username}
        onChange={handleChange}/>

         <label className="block mb-2 text-lg font-bold text-gray-900">Enter a Review:</label>
          
          <textarea 
          id="message" 
          rows="6" 
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pb-12" 
          placeholder="Leave a review..."
          name="review"
          value={review.review}
          onChange={handleChange}></textarea>

          <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Update Review</button>
          <button
            onClick={() => props.setEditing(false)}
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2"
          >
            Cancel Edit
          </button>
        </div>
      </form>
    );
  };
  
  export default EditReviewForm;
  