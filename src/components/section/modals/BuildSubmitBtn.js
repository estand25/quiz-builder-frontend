import React from 'react'
import styled from 'styled-components'

const Submit = styled.div.attrs({
    className: 'btn btn-outline-secondary'
})`
margin 15px 15px 15px 5px
`

const Cancel = styled.div.attrs({
    className: 'btn btn-outline-danger',
})`
    margin 15px 15px 15px 15px
`
const BuildSubmitBtn = (props) => {
    const { length, setExpand, onSubmit } = props
    
    if(length > 0){
        return (
            <div>
                <Submit onClick={onSubmit}>
                    {'Submit'}
                </Submit>
                <Cancel onClick={setExpand}>
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

export default BuildSubmitBtn