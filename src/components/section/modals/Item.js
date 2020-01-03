import React, {useState} from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { ArrayList, ModifyItem } from '../modals'

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
    className: 'btn btn-outline-success',
})`
    margin 15px 15px 15px 15px
`

const Cancel = styled.div.attrs({
    className: 'btn btn-outline-danger',
})`
    margin 15px 15px 15px 15px
`

const Item = (props) => {
    const { item_, onDelete, onModify, entries} = props

    const [onEdit, setOnEdit] = useState(false)
    const [item_id, setItem_id] = useState('')

    const OnEditRender = () => {
        const value = Object.values(item_)        
        const name = Object.keys(item_)

        var state = {}
        for(var i = 0; i < name.length; i++){
            state[name[i]] = value[i]
        }

        setItem_id(state['_id'])

        if(!onEdit){
            return (
                <Wrapper>
                    {Object.entries(item_).map((item,index) => 
                        <Row key={index}>
                            <Label>{item[0] + ": "}
                                {_.isArray(item[1]) ? ArrayList(item[1], true) : item[1]}
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
                        entries={entries}
                    />                
                    <Update
                        onClick={() => onModify(state, setOnEdit)}
                    >
                        {'Update'}
                    </Update>
                    <Cancel
                        onClick={() => setOnEdit(!onEdit)}
                    >
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
            <Delete
                onClick={() => onDelete(item_id)}
            >
                {'Delete'}
            </Delete>
            <OnEditRender />
        </Wrapper>
    )
}

export default Item
