import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'
    
const Holder = styled.div``

const GeneralButton = styled.button`
    color: gray;
    font-size: 1em;
    margin: 5px;
    padding: 5px;
    border: 2px solid gray;
    border-radius: 3px;
`
const ArrayList = (item, readyOnly, label,  onChange) => {    
    if(item.length === 0 ){
        return (
            <Holder />
        )
    }

    const onDoubleClick = (_item, event) => {
        if(!readyOnly){
            if(
                window.confirm(
                    'Do you want to delete this option ' + _item + ' permantly?'
                )
            ) {
                var _i = item.filter( i => {
                    var i_ = Object.entries(i)
                    return _item !== i_[0][1]
                })
                onChange(label, _i)
            }
        }
    }

    return Object.keys(item).map((key, i) => {
        return (
            <GeneralButton
                key={key}
                onDoubleClick={e => onDoubleClick(Object.values(item[i])[0], e)}
            >
                {Object.values(item[i])[0]}
            </GeneralButton>
        )
    })
}

export default ArrayList