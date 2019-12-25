import React from 'react'
import styled from 'styled-components'
import { ArrayList } from '../modals'

const Holder = styled.div``

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`
const Label = styled.label`
    margin: 5px;
`

const Spacing = styled.div`
    padding: 5ps;
`

const ModifyQuiz = (props) => {
    const t = Object.entries(props)

    return (
        <Wrapper>
            {t.map((item,index) => 
                <Row key={index}>
                    <Label>{item[0] + ": "}
                        {_.isArray(item[1]) ? ArrayList(item[1]) : item[1] }
                    </Label>
                </Row>
            )}
        </Wrapper>
    )
}

export default ModifyQuiz