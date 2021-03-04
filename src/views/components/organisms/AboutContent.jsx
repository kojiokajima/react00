import React from 'react'
// import {  makeStyles } from '@material-ui/core/styles'
// import CardMedia from '@material-ui/core/CardMedia'
import { ButtonBasic } from '..';

// const useStyles = makeStyles({
//     root: {
//       maxWidth: 345,
//     },
//     media: {
//       height: 140,
//     },
// });

const AboutContent = (props) => {
    // const classes = useStyles()
    const bgUrl = props.url
    // console.log(bgUrl)
    // console.log(bgUrl.default)
    const bgColor = props.bgColor
    const isButtonExist = props.isButtonExist

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
                    <ButtonBasic name={"Learn More"} bgColor={props.bgColor} />
                ) : (
                    <></>
                )}
            </div>

        </div>
    )
}

export default AboutContent