import React from 'react'

const ListObj = (props) => {
    return (
        <div>
            {props.list.map((i) =>
                <props.template
                    key={i._id}
                    {...i}
                />
            )}
        </div>
    )
}

export default ListObj