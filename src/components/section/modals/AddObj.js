import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div.attrs({
    className:'form-group',
})`
    margin: 0 30px;
`

const AddButton = styled.div.attrs({
    className: 'btn btn-success',
})`
    margin 15px 15px 15px 15px
`

const AddObj = (props) => {
    return (
        <Wrapper>
            <AddButton onClick={props.onAddHandle}>
                Add {props.AddObjectName}
            </AddButton>
        </Wrapper>
    )
}

export default AddObj