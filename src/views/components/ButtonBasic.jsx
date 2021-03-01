import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ButtonBasic = (props) => {
    return (
        // <button>{props.name}</button>
        <Button variant="outlined" color="primary">
            {props.name}
      </Button>
    )
}


export default ButtonBasic