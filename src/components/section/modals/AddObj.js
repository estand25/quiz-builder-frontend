import React from 'react'
import styled from 'styled-components'

const Add = styled.div.attrs({
    className: 'btn btn-success',
})`
    margin 15px 15px 15px 15px
`

const AddObj = (props) => {
    return (
        <Add onClick={props.onAddHandle}>
            Add {props.AddObjectName}
        </Add>
    )
}

export default AddObj