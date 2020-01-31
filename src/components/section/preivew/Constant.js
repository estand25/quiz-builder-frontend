const item = {
    QuestionName: 'InputText',
    Options: ['InputOption',[]]
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

const itemStatesGen = (valuesList) => {
    var _state = {}

    for(var c=0; c < valuesList.length; c++){
        _state[valuesList[c]] = ''
    }

    return _state
}

const itemValuesGen = (itemEntries) => {
    return itemEntries.map((entry) => {
        return (
            entry[0]
        )
    })
}

export default {
    item,
    itemEntries,
    itemValues,
    initialItemStates,
    itemStatesGen,
    itemValuesGen
}