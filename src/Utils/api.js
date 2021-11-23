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
    console.log(res);
    return res.data;
  });
};
