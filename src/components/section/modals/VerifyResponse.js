
const VerifyResponse = (state, questionList, setShow, setDisplayBody) => {
    if(state == {}){
        window.alert('You have not responsed to any of the questions. Please response.')
    }
    
    var returnValue = {}
    var score = 0

    for(var i = 1; i <= Object.getOwnPropertyNames(state).length; i ++){
        var displayItem = {}
        displayItem.Question = questionList[i-1].Question
        displayItem.Answer = questionList[i-1].Answer
        displayItem.Response = state[i]

        if(questionList[i-1].Answer == state[i]){
            displayItem.IsCorrect = true
            score = score + questionList[i-1].Point
        } else {
            displayItem.IsCorrect = false
        }
        returnValue[i] = displayItem
    }

    setShow()
    returnValue.Score = score
    setDisplayBody(returnValue)
}

export default VerifyResponse