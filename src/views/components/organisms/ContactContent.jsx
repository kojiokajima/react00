import React from 'react'
import { AboutContent, ContactForm } from '../index'
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core';
import { fontSize } from '@material-ui/system';

const useStyles = makeStyles(() => ({
    AboutContent: {
        height: "70vw",
        backgroundColor: "red"
    },
    aboutContentIcon: {
        fontSize: "18rem",
    }
}))

const ContactContent = () => {
    const classes = useStyles()
    const infoText = `Name: Koji Okajima<br/>Email: okka01240110@gmail.com<br/>Phone: 236-677-2088`;
    const renderedText = () => {
        const text1 = infoText.split("<br/>")

        return infoText.split("<br/>").map((item, index) => {
            return <span key={index}>{item}<br/></span>
        })
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
                        // className={classes.AboutContent}
                        title={<PersonIcon className={classes.aboutContentIcon}/>}
                        url={require('../../../assets/img/appetizer1.jpg')}
                        bgColor={"#a4abbf"}
                        text={renderedText()}
                        // text={infoText}
                        isButtonExist={true}
                    />
                    
                                        

                </div>

                
            </div>
        </div>
    )
}

export default ContactContent