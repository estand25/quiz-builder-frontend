import React, {useState} from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { ArrayList, ModifyItem } from '../modals'
import { Constant } from '../quiz'

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
const Edit = styled.div.attrs({
    className: 'btn btn-primary',
})`
    margin 15px 15px 15px 15px
`

const Delete = styled.div.attrs({
    className: 'btn btn-danger',
})`
    margin 15px 15px 15px 15px
`
const Update = styled.div.attrs({
    className: 'btn btn-success',
})`
    margin 15px 15px 15px 15px
`

const Cancel = styled.div.attrs({
    className: 'btn btn-danger',
})`
    margin 15px 15px 15px 15px
`


const ItemQuiz = (props) => {
    const [onEdit, setOnEdit] = useState(false)
    const [onDelete, setOnDelete] = useState(false)

    const OnEditBtnRender = () => {
        return (
            <div>
                <Update>
                    {'Update'}
                </Update>
                <Cancel>
                    {'Cancel'}
                </Cancel>
            </div>
        )
    }

    const OnEditRender = () => {
        const { itemEntries} = Constant
        const value = Object.values(props)        
        const name = Object.keys(props)

        var state = {}
        for(var i = 0; i < name.length; i++){
            state[name[i]] = value[i]
        }

        if(!onEdit){
            return (
                <Wrapper>
                    {Object.entries(props).map((item,index) => 
                        <Row key={index}>
                            <Label>{item[0] + ": "}
                                {_.isArray(item[1]) ? ArrayList(item[1]) : item[1] }
                            </Label>
                        </Row>
                    )}
                </Wrapper>
            )

        } else {
            return (
                <div>
                    <ModifyItem
                        _state={state}
                        entries={itemEntries}
                    />                
                    <Update>
                        {'Update'}
                    </Update>
                    <Cancel>
                        {'Cancel'}
                    </Cancel>
                </div>
            )
        }
    }

    return(
        <Wrapper>
            <Edit
                onClick={() => setOnEdit(!onEdit)}
            >
                {'Edit'}
            </Edit>
            <Delete>
                {'Delete'}
            </Delete>
            <OnEditRender />
        </Wrapper>
    )
}

export default ItemQuiz
