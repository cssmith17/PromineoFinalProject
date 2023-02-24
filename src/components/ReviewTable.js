import React from 'react';

//This component builds out the existing reviews and ratings within a table

const ReviewTable = (props) => (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase dark:text-gray-400"></thead>
      <tbody>
        {props.reviews.length > 0 ? (
          props.reviews.map((review) => (
            <tr key={review.id}>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                <p className="text-lg text-gray-900 dark:text-white">{review.username}</p>
                <p className="font-normal text-gray-300 dark:text-gray-400">{review.review}</p>
                <div className="star-icon">&#9733;</div>
                <div className="font-normal text-gray-300 dark:text-gray-400">{review.rating}/5</div>
              </td>
              <td className="px-8 py-1 bg-gray-50 dark:bg-gray-800">

              </td>
              <td className="bg-gray-50 dark:bg-gray-800">

              <button
                  onClick={() => {
                    props.editRow(review);
                  }}
                  id="edit-button"
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => props.deleteReview(review.id)}
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800" colSpan={3}>No Reviews to Display </td>
          </tr>
        )}
      </tbody>
    </table>
    </div>
  );
  
  export default ReviewTable;
  