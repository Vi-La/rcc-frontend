import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { add, update } from "../ReduxTable/historySlice";
import { useDispatch } from "react-redux";
import { nextID } from "../ReduxTable/historySlice";
import { userRequest } from "../api";
import { Twitter } from "@material-ui/icons";

export default function HistoryDialog({ data, render, onSave }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const defaultImg = data && data.img;
  const defaultTitle = data && data.title;
  const defaultSubTitle = data && data.subtitle;
  const defaultFavorites = data && data.favorites;
  const defaultLikes = data && data.likes;
  const defaultComments = data && data.comments;
  const defaultDescription = data && data.description;
  // Existing ID or random ID
  const id = data && data.id;

  const [img, setImg] = React.useState(defaultImg);
  const [title, setTitle] = React.useState(defaultTitle);
  const [subtitle, setSubTitle] = React.useState(defaultSubTitle);
  const [favorites, setFavorites] = React.useState("12");
  const [likes, setLikes] = React.useState("12");
  const [comments, setComments] = React.useState(defaultComments);
  const [description, setDescription] = React.useState(defaultDescription);
  const [addCmnty, setAddCmnty] = React.useState([])
  const handleClickOpen = () => {
    setOpen(true);
    setTitle('');
    setSubTitle('')
    setFavorites('')
    setLikes('')
    setComments('')
    setDescription('');
    setImg('');
  };
  
  console.log(title,subtitle,description,favorites,img)
  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
      let modified = Date.now()
      try {
        const response = await userRequest.post(`community/create`,{
            title: title,
            member: subtitle,
            action: description,
            twLink: favorites,
            image: img
          
        })
        setAddCmnty(response.data.data)
      } catch (error) {
        console.log(error)
      }
      console.log("input:", addCmnty)
    const action = data ? update : add;
    dispatch(action({ title, subtitle, description, favorites, likes, comments ,modified, id: id || nextID(), img }));
    onSave && onSave();
    handleClose();
  };

  return (
    <>
      {render(handleClickOpen)}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {data ? "Edit" : "Add"} History{" "}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="subtitle"
            label="Subtitle"
            fullWidth
            value={subtitle}
            onChange={(e) => {
              setSubTitle(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            fullWidth
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Image URL"
            fullWidth
            value={img}
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
