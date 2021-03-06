import React from 'react'
import {Hero, WorkContent} from '../index'

const Work = () => {
    const imageUrl = require('../../../assets/img/hero_work.png').default

    return (
        <div className="work">
            {/* yoyoyo */}
            <Hero text={"This is what I created"} bottom={"Explore my creativity"} image={imageUrl} />

            <WorkContent />

        </div>
    )
}

export default Work