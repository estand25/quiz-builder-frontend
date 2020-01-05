import React from 'react'
import styled from 'styled-components'
import { ModifyItem } from '../modals'

const AddedItem = styled.div.attrs({
    className: 'btn btn-outline-primary',
})`
    margin 15px 15px 15px 15px
`

const Cancel = styled.div.attrs({
    className: 'btn btn-outline-danger',
})`
    margin 15px 15px 15px 15px
`

const AddItem = ({status, _state, itemNew, entries, setAddStatus }) => {
    if(status){
        return (
            <div>
                <ModifyItem
                    _state={_state}
                    entries={entries}
                />
                <AddedItem
                    onClick={() => itemNew(_state)}
                >
                    {'Add'}
                </AddedItem>
                <Cancel
                    onClick={() => setAddStatus(false)}
                >
                    {'Cancel'}
                </Cancel>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}

export default AddItem