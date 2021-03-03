import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
    button: props => ({
        color: props.bgColor,
        borderColor: props.bgColor,
        
        "&:hover": {
            color: "#fff",
            backgroundColor: props.bgColor,
            // backgroundColor: color,
        }
    })

}))

const ButtonBasic = (props) => {
    const classes = useStyles(props)

    const bgColor = props.bgColor

    return (
        <Button className={classes.button} variant="outlined">
            {props.name}
      </Button>
    )
}


export default ButtonBasic