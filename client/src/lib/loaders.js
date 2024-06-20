import { defer } from "react-router";
import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/posts/" + params.id);
  console.log(res);
  return res.data.post;
};
export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  console.log(query);
  const postPromise = apiRequest("/posts?" + query);
  return defer({
    postPromise: postPromise,
  });
};
export const profilePageLoader = async () => {
  const postPromise = apiRequest("/users/profileposts");
  return defer({
    postPromise: postPromise,
  });
};

