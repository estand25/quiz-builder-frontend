import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { BuildItem } from '../preivew'

const Wrapper = styled.div`
    padding: 5px 5px 5px 5px;
    border: 1px solid black;
    margin: 10px;
`

const BuildList = () => {
    const qBuild = useSelector(state => state.buildlist)
    const [buildList_, setBuildList] = useState([])

    useEffect(
        () => { 
            setBuildList(qBuild.previewList)
        },[]
    )
    
    const Render = () => {
        if(buildList_.length == 0){
            return (
                <div>
                    Loading...
                </div>
            )
        } else {
            return (
                <Wrapper>
                    {buildList_.map((i) => 
                        <div key={i._id}>
                            <BuildItem
                                {...i}
                            /> 
                        </div>
                    )}
                </Wrapper>
            )
        }
    }

    return (
        <Render />
    )
}

export default BuildList