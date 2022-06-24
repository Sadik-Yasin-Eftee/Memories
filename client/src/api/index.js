import axios from "axios";

//url returns all the posts saved in the database
const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url); 