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

const AddItem = (props) => {
    const {status, _state, entries } = props

    if(status){
        return (
            <div>
                <ModifyItem
                    _state={_state}
                    entries={entries}
                />
                <AddedItem>
                    {'Add'}
                </AddedItem>
                <Cancel>
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