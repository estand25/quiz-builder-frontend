import React from 'react'

const AddItem = (props) => {
    const {item, status, _state, entries } = props
    
    if(status){
        return (
            <div>
                <props.modifyTemplate
                    _state={_state}
                    entries={entries}
                    {...item}
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