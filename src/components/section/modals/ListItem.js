import React from 'react'

const ListItem = (props) => {
    const {list, itemDelete, itemModify, entries} = props
    return (
        <div>
            {list.map((i) =>
                <props.template
                    key={i._id}
                    item_={i}
                    onDelete={itemDelete}
                    onModify={itemModify}
                    entries={entries}
                />
            )}
        </div>
    )
}

export default ListItem