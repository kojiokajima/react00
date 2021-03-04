import React from 'react'
import { Cards } from '../index'
import defaultDataset from '../../../dataset'
/*
Cardには配列を渡すんだなぁ
jsonファイル作ろうかなぁ
*/

const WorkContent = () => {
    return (
        <div className="work-content">
                <div className="work-content-title">
                    <h1>Drawings</h1>
                </div>
                <div className="work-content-works">
                    <Cards
                        imageData={defaultDataset["drawing"]}
                    />
                </div>
            </div>
    )
}

export default WorkContent