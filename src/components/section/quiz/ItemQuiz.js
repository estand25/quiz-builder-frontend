import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 5px 5px 5px 5px;
    border: 1px solid black;
    margin: 10px;
`
const Row = styled.div`
    margin: 5px;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
`

const Label = styled.label`
    margin: 1px;
    font-size: 20px;
`

const ItemQuiz = (props) => {
    const t = Object.entries(props)
    
    return (
        <Wrapper>
            {t.map((item,index) => 
                <Row key={index}>
                    <Label>{item[0] + ": "}
                        {item[1]}
                    </Label>
                </Row>
            )}
        </Wrapper>
    )
}

export default ItemQuiz
