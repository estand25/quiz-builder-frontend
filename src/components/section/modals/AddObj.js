import React from 'react'
import styled from 'styled-components'

const AddButton = styled.div.attrs({
    className: 'btn btn-success',
})`
    margin 15px 15px 15px 15px
`

const AddObj = (props) => {
    return (
        <AddButton onClick={props.onAddHandle}>
            Add {props.AddObjectName}
        </AddButton>
    )
}

export default AddObj