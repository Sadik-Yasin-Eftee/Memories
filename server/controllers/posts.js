//here is all the handlers for the routes
//this part is used to make more scalable
//it is used so that all the logics of routes/posts.js is used here and the logics are called from here


//import the model or database
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req , res) => {
    try {

        //asynchonous function. so await is used
        const postMessage = await PostMessage.find(); 

        //provides a json file of all the post stored in the model
        res.status(200).json(postMessage); 

    } catch (error) {

        //provides an error message if the post is not found
        res.status(404).json({ message : error.message}); 
    }
}
 export const createPost = async (req , res) => {

    //create a body where the posts will be created
    //that is request is to be send to the front-end for the creation of post
    const post = req.body;

    //get the post 
    const newPost = new PostMessage(post);

    try {
        //save the post
        await newPost.save();

        //show the post
        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}