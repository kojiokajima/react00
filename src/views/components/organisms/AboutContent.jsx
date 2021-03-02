import React from 'react'
import {  makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'
import { ButtonBasic } from '..';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
});

const AboutContent = (props) => {
    const classes = useStyles()
    const bgUrl = props.url
    console.log(bgUrl.default)
    const bgColor = props.bgColor

    const style = {
        backgroundImage: `url(${bgUrl})`
    }

    return (
            <div className="about-content">
                <div className="about-content-main">
                    <div className="about-content-main-title" style={{backgroundColor: bgColor}}>
                        <p>{props.title}</p>
                    </div>

                    <div className="about-content-main-description" style={{
                        backgroundImage: "url(" + bgUrl.default + ")"
                    }}>
                    </div>
                </div>

                <div className="about-content-sub">
                    <p>{props.text}</p>
                    <ButtonBasic name={"Learn More"} />
                </div>
            </div>
    )
}

export default AboutContent