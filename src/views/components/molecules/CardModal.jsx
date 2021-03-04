import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  fade: {
    backgroundColor: "#fff",
    width: "60vh",
    // height: "80vh",
    "& img": {
        width:"100%",
    },
    "& .text": {
        padding: "2% 5%",
        "& h2": {
            display: "inline-block",
            marginTop: "2%",
        },
        "& p": {
            marginTop: "2%",
        }
    }
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '100%',
    height: "100%"

  },
}));

const CardModal = (props) => {
  const classes = useStyles();
  const open = props.open;
  const handleOpen = props.handleOpen;
  const handleClose = props.handleClose;
  console.log(open);
  //   const [open, setOpen] = useState(props.open);

  //   const handleOpen = () => {
  //     setOpen(true);
  //   };
  //   const handleClose = () => {
  //     setOpen(false);
  //     console.log("handleClose from Modal", open)
  //   };

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        react-transition-group
      </button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        // open={props.open}
        onClose={handleClose}
        // onClose={handleClose()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} className={classes.fade}>
          {/* <Fade in={open}> */}
          <div className={classes.paper}>
            <img src={props.src} alt=""/>
            <div className="text">
                <h2 id="transition-modal-title">{props.title}</h2>
                <p id="transition-modal-description">
                {props.description}
                </p>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default CardModal;
