import React from 'react'
import { ModifyItem } from '../modals'

const AddItem = (props) => {
    const {status, _state, entries } = props

    if(status){
        return (
            <div>
                <ModifyItem
                    _state={_state}
                    entries={entries}
                />
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}

export default AddItem