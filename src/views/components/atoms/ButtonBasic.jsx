import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { borderColor } from '@material-ui/system';

const useStyles = makeStyles(() => ({
    button: {
        color: "#d27979",
        borderColor: "#d27979",

        "&:hover": {
            color: "#fff",
            backgroundColor: "#d27979",
        }
    }
}))

const ButtonBasic = (props) => {
    const classes = useStyles()
    return (
        <Button className={classes.button} variant="outlined">
            {props.name}
      </Button>
    )
}


export default ButtonBasic