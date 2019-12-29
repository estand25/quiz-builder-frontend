const OptionGenerator = (limit, internal) => {
    var ret = []

    for(var i = 0; i < limit; i = i + internal){
        if(i <= 9){  
            ret.push('0'+i)
        } else {
            ret.push(i)
        }
    }

    return ret
}

const item = {
    Question: 'InputText',
    Answer: 'InputText',
    Options: 'CustomInput',
    Status: ['Option', ['On','Off']],
    Order: ['Option', OptionGenerator(51,1)],
    Point: ['Point', OptionGenerator(50,5)]
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