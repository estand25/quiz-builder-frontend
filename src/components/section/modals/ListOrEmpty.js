import React from 'react'
import { ListItem, EmptyList, Item } from '../modals'

const ListOrEmpty = ({list, itemDelete, itemModify, entries, emptyMessage}) => {
    const Render = () => {
        if(list.length > 0){
            return (
                <ListItem
                    list={list}
                    template={Item}
                    itemDelete={itemDelete}
                    itemModify={itemModify}
                    entries={entries}
                />
            )
        } else {
            return (
                <EmptyList
                    emptyMessage={emptyMessage}
                />
            )
        }
    }

    return (
        <Render />
    )
}

export default ListOrEmpty