import React from 'react'
import { AddItemTitle, AddItem, ListOrEmpty, } from '../modals'

const AddEditListItem = ({onAddHandle, addItemTitle, status, setAddStatus, state, itemNew, addEntries, list, itemDelete, itemModidy, entries, emptyMessage}) => {
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
            <ListOrEmpty
                list={list}
                itemDelete={itemDelete}
                itemModify={itemModidy}
                entries={entries}
                emptyMessage={emptyMessage}
            />
        </div>
    )
}

export default AddEditListItem