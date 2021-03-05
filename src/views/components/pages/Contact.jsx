import React from 'react'
import { ContactContent, Hero } from '../index'

const Contact = () => {
    return (
        <div className="contact">
            {/* hohoho */}
            <Hero text={"This is where I am"} bottom={"I'm always happy to hear from you"} />

            <ContactContent />

        </div>
    )
}

export default Contact