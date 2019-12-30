import React from 'react'
import styled from 'styled-components'
    
const Holder = styled.div``

const GeneralButton = styled.button`
    color: gray;
    font-size: 1em;
    margin: 5px;
    padding: 5px;
    border: 2px solid gray;
    border-radius: 3px;
`
const ArrayList = (item) => {
    console.log('ArrayList', item);
    
    if(item.length === 0 ){
        return (
            <Holder />
        )
    }

    return Object.keys(item).map((key, i) => {
        return (
            <GeneralButton
                key={key}
            >
                {Object.values(item[i])[0]}
            </GeneralButton>
        )
    })
}

export default ArrayList