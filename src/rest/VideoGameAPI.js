const REVIEWS_ENDPOINT =
  "https://63bf5e66a177ed68abaff54a.mockapi.io/videogames";

class VideoGameApi {
  get = async () => {
    try {
      const resp = await fetch(REVIEWS.ENDPOINT);
      const data = await resp.json();
      return data;
    } catch (e) {
      console.log("FetchReviews threw an error.", e);
    }
  };

  put = async (review) => {
    try {
      const resp = await fetch(`${REVIEWS_ENDPOINT}/${review.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application.json",
        },
        body: JSON.stringify(review),
      });
      return await resp.json();
    } catch (e) {
      console.log("Updating reviews threw an error.", e);
    }
  };

  create = async (review) => {
    try {
      const resp = await fetch(REVIEWS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      });
      return resp;
    } catch (e) {
      console.log("Creating reviews threw an error.", e);
    }
  };

  delete = async (id) => {
    try {
      const resp = await fetch(`${REVIEWS_ENDPOINT}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await resp.json();
      return data;
    } catch (e) {
      console.log("Deleting a review threw an error.", e);
    }
  };
}

export const videoGameApi = new VideoGameApi();