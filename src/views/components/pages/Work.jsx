import React from 'react'
import {Hero, WorkContent} from '../index'

const Work = () => {
    return (
        <div className="work">
            {/* yoyoyo */}
            <Hero text={"This is what I created"} bottom={"Explore my creativity"} />

            <WorkContent />

        </div>
    )
}

export default Work