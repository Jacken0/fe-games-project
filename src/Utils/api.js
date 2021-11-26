import axios from "axios";

const gamesAPI = axios.create({
  baseURL: "https://jacks-games.herokuapp.com/api",
});

export const getReviews = (search) => {
  return gamesAPI.get(`/reviews${search}`).then((res) => {
    return res.data.reviews;
  });
};
export const getCategories = () => {
  return gamesAPI.get("/categories").then((res) => {
    return res.data.categories;
  });
};
export const getSingleReview = (id) => {
  return gamesAPI.get(`/reviews/${id}`).then((res) => {
    return res.data.review;
  });
};
export const getReviewComments = (id) => {
  return gamesAPI.get(`/reviews/${id}/comments`).then((res) => {
    return res.data.comments;
  });
};
export const patchVotes = (id, number) => {
  return gamesAPI
    .patch(`/reviews/${id}`, { inc_votes: number })
    .then((res) => {});
};
export const postComment = (id, comment) => {
  return gamesAPI.post(`/reviews/${id}/comments`, comment).then((res) => {
    return res;
  });
};
