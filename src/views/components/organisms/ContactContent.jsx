import React from 'react'
import { AboutContent } from '../index'
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core';

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
    const infoText = `Name: Koji Okajima<br/>Email: okka01240110@gmail.com<br/>Phone: 236-788-2088`;
    const renderedText = () => {
        return infoText.split("<br/>").map((item, index) => {
            return <span key={index}>{item}<br/></span>
        })
    }
    

    return (
        <div className="contact-content">
            <div className="contact-content-title">
                <h1>Contact Info</h1>
            </div>

            <div className="contact-content-contacts">
                <div className="info">
                    <AboutContent
                        name={"Send Message"}
                        title={<PersonIcon className={classes.aboutContentIcon}/>}
                        link={""}
                        url={require('../../../assets/img/contact.png')}
                        bgColor={"#a4abbf"}
                        text={renderedText()}
                        isContact={true}

                    />
                                        

                </div>

                
            </div>
        </div>
    )
}

export default ContactContent