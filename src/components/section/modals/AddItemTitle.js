import React from 'react'
import styled from 'styled-components'

const Add = styled.div.attrs({
    className: 'btn btn-success',
})`
    margin 15px 15px 15px 15px
`

const AddItemTitle = ({onAddHandle, titleName}) => {
    return (
        <Add onClick={onAddHandle}>
            Add {titleName}
        </Add>
    )
}

export default AddItemTitle