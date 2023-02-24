import React, { useState } from 'react';

//This component is used to build out the review and rating elements, as well as link functionality to parent components

const ReviewForm = (props) => {
    const initialFormState = { id: null, username: "", review: "", rating: 0 };
  
    const [review, setReview] = useState(initialFormState);
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
        <>



      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!review.username || !review.review) return;
  
          props.addReview(review);
          setReview(initialFormState);
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
        <div className="mb-6">
        <label class="block mb-2 text-lg font-bold text-gray-900">Enter Username:</label>
        <input type="text"  
        class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        name="username"
        value={review.username}
        onChange={handleChange}/>

          <label className="mb-1 text-lg font-bold text-gray-800">Enter a Review:</label>
          
          <textarea 
          id="message" 
          rows="6" 
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pb-12" 
          placeholder="Leave a review..."
          name="review"
          value={review.review}
          onChange={handleChange}></textarea>

          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 mt-2 mr-4 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >Add Review</button>
        </div>
      </form>
      </>
    );
  };
  
  export default ReviewForm;