import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { score } from '../../../actions'
import { ItemScore } from '../score'
import { EmptyList } from '../modals'

import api from '../../../api'

const SectionScore = (props) => {
    const qAuth = useSelector(state => state.auth)
    const [scores, setScores] = useState([])

    useEffect(
        () => {
            api.getAllScore()
                .then(s => {
                    if(s.data.success === true){
                        var scores = s.data
                            .data
                            .filter(i => { 
                                return i.userId == qAuth.userId
                            })
                            .map(i => (
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

    const ListOrEmtpy = () => {
        if(scores.length > 0){
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
        } else {
            return (
                <EmptyList 
                    emptyMessage={'No score present'}
                />
            )
        }
    }

    return (
        <ListOrEmtpy />
    )
}

export default SectionScore