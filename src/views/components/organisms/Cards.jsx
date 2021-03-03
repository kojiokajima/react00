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
    console.log(imageData)
    console.log(imageData[0][0])
    console.log(imageData[0][1])
    console.log(imageData[0][2])
    // console.log(props.imageData[0])
    // console.log(props.imageData[1])
    // console.log(props.imageData[2])
    return (
        <div className="cards">
            {imageData.map((value, index) => {
                return <CardItem alt={imageData[index][0]} image={imageData[index][1]} title={imageData[index][2]} key={index.toString()}/>
            })}
            {/* <CardItem
                alt={}
                image={}
                title={}
            /> */}
        </div>
    )
}

export default Cards