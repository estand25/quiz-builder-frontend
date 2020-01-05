import React from 'react'
import { AddItemTitle, ListItem, Item, AddItem, EmptyList } from '../modals'

const AddEditListItem = ({onAddHandle, addItemTitle, status, setAddStatus, state, itemNew, addEntries, list, itemDelete, itemModidy, entries, emptyMessage}) => {
    const ListOrEmpty = () => {
        if(list.length > 0){
            return (
                <ListItem
                    list={list}
                    template={Item}
                    itemDelete={itemDelete}
                    itemModidy={itemModidy}
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
        <div>
            <AddItemTitle
                onAddHandle={onAddHandle}
                titleName={addItemTitle}
            />
            <AddItem
                status={status}
                setAddStatus={setAddStatus}
                _state={state}
                itemNew={itemNew}
                entries={addEntries}
            />
            <ListOrEmpty/>
        </div>
    )
}

export default AddEditListItem