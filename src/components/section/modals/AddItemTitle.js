import React from 'react'
import styled from 'styled-components'

const Add = styled.div.attrs({
    className: 'btn btn-success',
})`
    margin 15px 15px 15px 15px
`

const AddItemTitle = (props) => {
    return (
        <Add onClick={props.onAddHandle}>
            Add {props.AddItemTitleectName}
        </Add>
    )
}

export default AddItemTitle