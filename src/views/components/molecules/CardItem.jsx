import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardModal } from "../index";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const CardItem = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    // console.log("handleOpen from Item", open);
  };

  const handleClose = () => {
    setOpen(false);
    // console.log("handleClose from Item", open);
  };

  const toggleModal = () => {
      setOpen(!open)
  }

  return (
    // <div className={`card ${classes.root}`} onClick={() => console.log("card clicked")}>
    <div className={`card ${classes.root}`} onClick={toggleModal}>
      <div className="card-img">
        <CardMedia
          component="img"
          alt={props.alt}
          height="140"
          src={props.image}
          // src={require('../../../assets/img/appetizer1.jpg').default}
          // image={'/static/media/work4.c2bdfbd0.jpg'}
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>

      <CardModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        src={props.image}
        title={props.title}
        description={props.description}
      />
    </div>
  );
};

export default CardItem;
