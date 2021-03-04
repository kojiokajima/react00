import React from 'react';
import { CardItem } from '../index';

/*
配列が渡されるんだなぁ
中身は
[
    [alt, image, title]
    [alt, image, title]
    [alt, image, title]
]
みたいな感じ
 */

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
                    key={index.toString()}
                />
            })}
        </div>
    )
}

export default Cards