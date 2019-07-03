import axios from "axios";

const KEY = "AIzaSyC4Oud6jN7vD87-uIDawIW9sm_nraUr6cE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
