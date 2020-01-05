import React, { useState, useEffect } from 'react'
import { score } from '../../../actions'
import { ItemScore } from '../score'

import api from '../../../api'

const SectionScore = (props) => {
    const [scores, setScores] = useState([])

    useEffect(
        () => {
            api.getAllScore()
                .then(s => {
                    if(s.data.success === true){
                        var scores = s.data.data.map(i => (
                            {
                                _id: i._id,
                                score: i.score,
                                NonAnswered: i.nonAnswered
                            }
                        ))
                        
                        setScores(scores)
                    }
                })
        },[]
    )

    return (
        <div>
            {scores.map((i) => 
                <ItemScore
                    key={i._id}
                    {...i}
                />
            )}
        </div>
    )
}

export default SectionScore