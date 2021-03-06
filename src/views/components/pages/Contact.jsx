import React from 'react'
import { ContactContent, Hero } from '../index'

const Contact = () => {
    const imageUrl = require('../../../assets/img/hero_contact.png').default

    return (
        <div className="contact">
            {/* hohoho */}
            <Hero text={"This is where I am"} bottom={"I'm always happy to hear from you"} image={imageUrl} />

            <ContactContent />

        </div>
    )
}

export default Contact