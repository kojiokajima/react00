import React from 'react'
import { AboutContent } from '../index'
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core';
import { fontSize } from '@material-ui/system';

const useStyles = makeStyles(() => ({
    aboutContent: {
        fontSize: "18rem",
    }
}))

const ContactContent = () => {
    const classes = useStyles()
    const infoText = `Name: Koji Okajima<br/>Email: okka01240110@gmail.com<br/>Phone: 236-677-2088`;
    // console.log(infoText)
    const renderedText = () => {
        const text1 = infoText.split("<br/>")
        // console.log(text1)
        // console.log(text1[0])
        // console.log(text1[1])
        // console.log(text1[2])
        // const newText = text1.map((item, index) => {
        //     return  item + "yo"
        // })
        // console.log(newText)

        return infoText.split("<br/>").map((item, index) => {
            return <span key={index}>{item}<br/></span>
        })
        // const newText = text1.map((item, index) => {
        //     return <span key={index}>{item}<br/></span>
        // })
        // console.log(newText)
        // return newText

    }
    console.log(renderedText())

    return (
        <div className="contact-content">
            <div className="contact-content-title">
                <h1>Contact Info</h1>
            </div>

            <div className="contact-content-contacts">
                <div className="info">
                    <AboutContent
                        title={<PersonIcon className={classes.aboutContent}/>}
                        url={require('../../../assets/img/appetizer1.jpg')}
                        bgColor={"#415ed1"}
                        text={renderedText()}
                        // text={infoText}
                        isButtonExist={false}
                    />


                </div>

                <div className="form">

                </div>
            </div>
        </div>
    )
}

export default ContactContent