import React, { useCallback, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import {  makeStyles } from '@material-ui/core/styles'
// import CardMedia from '@material-ui/core/CardMedia'
import { ButtonBasic, ContactForm } from '..';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    // button: {
    //     width: "50%",
    //     backgroundColor: "red"
    // }
});


const AboutContent = (props) => {
    const classes = useStyles()
    // const classes = useStyles()
    const bgUrl = props.url
    // console.log(bgUrl)
    // console.log(bgUrl.default)
    const bgColor = props.bgColor
    const isButtonExist = props.isButtonExist

    const [open, setOpen] = useState(false)

    const confirmOpen = () => {
        console.log(open)
    }


    const handleOpen = useCallback(() => {
        setOpen(true)
    }, [setOpen])

    const handleClose = useCallback(() => {
        setOpen(false)
    }, [setOpen])

    return (
        <div className="about-content">
            <div className="about-content-title" style={{backgroundColor: bgColor}}>
                <p>{props.title}</p>
            </div>

            <div className="about-content-description" style={{
                backgroundImage: "url(" + bgUrl.default + ")"
            }}>
                <p>{props.text}</p>
                
                {isButtonExist ? (
                    <ButtonBasic
                        name={"Send Message"}
                        bgColor={props.bgColor}
                        onClick={handleOpen}
                    />
                ) : (
                    <></>
                )}
            </div>

            <div className="form">
                    <ContactForm
                        open={open}
                        handleClose={handleClose}
                        handleOpen={handleOpen}
                    />
            </div>

        </div>
    )
}

export default AboutContent