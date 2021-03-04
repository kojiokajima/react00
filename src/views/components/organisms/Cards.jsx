import React from 'react';
import { CardItem } from '../index';


const Cards = (props) => {
    const imageData = props.imageData
    const pathArr = []
    for (let i = 1; i < imageData.length + 1; i++) {
        const path = require(`../../../assets/img/work${i}.jpg`).default
        // const path = require(`${imageData[i-1][1]}`).default
        pathArr.push(path)
    }

    return (
        <div className="cards">
            {imageData.map((value, index) => {
                return <CardItem
                    alt={imageData[index][0]}
                    image={pathArr[index]}
                    // image={"yooo"}
                    title={imageData[index][1]}
                    description={imageData[index][2]}
                    key={index.toString()}
                    // onClick={() => {console.log("yooo")}}
                />
            })}
        </div>
    )
}

export default Cards