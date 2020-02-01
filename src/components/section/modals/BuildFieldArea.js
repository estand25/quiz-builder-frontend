import React from 'react'
import styled from 'styled-components'
import { BuildField } from '../modals'

const Row = styled.div`
    margin: 5px;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
`

const BuildFieldArea = ({list, state, changeState}) => {
    return (
        list.sort((i) => {return i.sort}).map((item, index) =>
                <Row key={index}>
                    <BuildField
                        item={item}
                        value={state}
                        changeState={(n,v) => changeState(n,v)}
                    />
                </Row>)
    )
        
}

export default BuildFieldArea