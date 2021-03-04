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
        }
    })

}))

const ButtonBasic = (props) => {
    const classes = useStyles(props)

    return (
        <Button 
            className={classes.button}
            variant="outlined"
            onClick={props.onClick}
        >
                {props.name}
      </Button>
    )
}


export default ButtonBasic