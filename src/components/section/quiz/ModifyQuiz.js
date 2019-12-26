import React,{useState} from 'react'
import styled from 'styled-components'
import { ArrayList } from '../modals'

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

const Holder = styled.div``

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Select = styled.select`
    width: 100%;
    height: 35px;
    background: white;
    color: gray;
    font-size: 14px;
    border: 1px solid black;

    option {
        color: black;
        background: white;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 15px 15px 15px 15px;
    }
`

const Label = styled.label`
    margin: 1px;
    font-size: 20px;
`

const Spacing = styled.div`
    padding: 5ps;
`

const ModifyQuiz = (props) => {
    const [quizFields, setQuizFields] = useState({
        Name: '',
        Description: '',
        Status: ''
    });

    const t = Object.entries(props)

    return (
        <Wrapper>
            {t.map((item,index) => 
                <Row key={index}>
                    <Item
                        label={item[0]}
                        type={item[1]}
                        value={quizFields.Name}
                        onChange={setQuizFields}
                    />
                </Row>
            )}
        </Wrapper>
    )
}

const Item = (props) => {
    switch (props.type) {
        case 'InputText':
            return (      
                <Spacing>
                    <Label>{props.label}</Label>       
                    <InputText
                        type="text"
                        value={props.value}
                        onChange={props.onChange}
                    />
                </Spacing>  
            )
        case 'Option':
            return (
                <div>
                    'Array'
                </div>
            )
        default:
            return (
                <></>
            )
    }
}

export default ModifyQuiz