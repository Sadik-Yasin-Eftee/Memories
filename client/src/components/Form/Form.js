import React, { useState } from "react";
import useStyles from "./styles";

import { TextField, Button, Typography, Paper } from "@material-ui/core";

const Form = () => {
  //create hook
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const classes = useStyles();

  //handler function
  const handleSubmit = () => {};

  return (
    <Paper className={classes.paper}>
      <Form
        autocomplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography varient="h6">Creating a memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          } //here 'e' is for event. This part was not understandable
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) =>
            setPostData({ ...postData, title: e.target.value })
          } //here 'e' is for event. This part was not understandable
        />
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          } //here 'e' is for event. This part was not understandable
        />
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          } //here 'e' is for event. This part was not understandable
        />
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          } //here 'e' is for event. This part was not understandable
        />
      </Form>
    </Paper>
  );
};

export default Form;
