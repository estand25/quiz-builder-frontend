const item = {
    Name: 'InputText',
    Description: 'InputText',
    Status: ['Option', ['On','Off']]
}

const itemEntries = Object.entries(item)

const itemValues = itemEntries.map((entries) => {
    return (
        entries[0]
    )
})

const initialItemStates = () => {
    var _state = {}

    for(var c=0; c < itemValues.length; c++){
        _state[itemValues[c]] = ''
    }

    return _state
}

export default {
    item,
    itemEntries,
    itemValues,
    initialItemStates
}