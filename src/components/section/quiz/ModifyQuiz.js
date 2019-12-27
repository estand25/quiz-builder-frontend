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

const Item = (props) => {
    var list = ''
    var type = ''

    if(_.isArray(props.type)){
        var temp = Object.values(props.type)
        type = temp[0]
        list = temp[1]
        
    } else {
        type = props.type
    }    

    switch (type) {
        case 'InputText':
            return (      
                <Spacing>
                    <Label>{props.label}</Label>       
                    <InputText
                        type="text"
                        value={props.value[props.label]}
                        onChange={e => props.onChange(e, props.label)}
                    />
                </Spacing>  
            )
        case 'Option':
            return (
                <div>
                    <Spacing>
                        <Label>{props.label}</Label>
                    </Spacing>
                    <Select
                        value={props.value[props.label]}
                        onChange={e => props.onChange(e, props.label)}
                    >
                        <option value="" hidden>
                            - Select One -
                        </option>
                        {list.map((l) =>                             
                            <option key={l} value={l}>
                                {l}
                            </option>
                        )}
                    </Select>
                </div>
            )
        default:
            return (
                <></>
            )
    }
}

const ModifyQuiz = (props) => {
    const [quizFields, setQuizFields] = useState({
        Name: '',
        Description: '',
        Status: ''
    });
    
    const t = Object.entries(props)

    const a = t.map((i) => {
        return (
            i[0]
        )
    })

    var _state = {}
    for(var c=0; c< a.length; c++){
        _state[a[c]] = ''
    }

    const changeState = (name, value) => {
        console.log('ChangeState', name);
        console.log('ChangeState', value.target.value);
    }
    
    return (
        <Wrapper>
            {t.map((item,index) => 
                <Row key={index}>
                    <Item
                        label={item[0]}
                        type={_.isArray(item[1]) ? item[1] : item[1] }
                        value={_state}
                        onChange={(n,v) => changeState(n,v)}
                    />
                </Row>
            )}
        </Wrapper>
    )
}

export default ModifyQuiz

//https://itnext.io/how-to-build-a-dynamic-controlled-form-with-react-hooks-2019-b39840f75c4f