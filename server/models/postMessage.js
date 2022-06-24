//this part is used for database model

import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
});


//create the database/model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
