import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();


//the below part is like the url routing in django. urlpatters in urls.py
//localhost:5000/posts

//before scalability added
// router.get('/' , (req , res) =>{
//     res.send('This Works');
// });

//after scalability added
router.get('/' , getPosts);
router.post('/' , createPost);

export default router;