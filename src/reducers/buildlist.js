import { actions } from '../actions/type'

const initalState = {
    previewList: [],
    quizzies: [],
    questions: [],
    buildListFlag: false
}

export default (state = initalState, action) => {
    switch (action.type) {
        case actions.SET_BUILD_LIST:
            const {quizzies, questions} = action

            // console.log('action quizzies', quizzies);
            // console.log('action questions', questions);
            // console.log('action', 'SET_BUILD_LIST');

            var buildList = []

            for(var a = 0; a < quizzies.length ; a++){
                var buildItem = {}
        
                buildItem._id = quizzies[a]._id
                buildItem.Name = quizzies[a].Name
                buildItem.Description = quizzies[a].Description
                buildItem.Status = quizzies[a].Status
                buildItem.Questions = []
                buildItem.State = {}
                
                for(var b = 0; b < questions.length; b++){
                    var questionItem = {}
                    var _state_ = {}
        
                    if(quizzies[a].Name == questions[b].Quiz){   
                        _state_[questions[b].Order] = ""                  
                        questionItem._id = questions[b]._id
                        questionItem.Question = questions[b].Question
                        questionItem.Options = questions[b].Options
                        questionItem.Answer = questions[b].Answer
                        questionItem.Status = questions[b].Status
                        questionItem.Order = questions[b].Order
                        questionItem.Point = questions[b].Point
        
                        buildItem.Questions.push(questionItem)
                    }
                    buildItem.State = Object.assign(buildItem.State,_state_)
                }
        
                buildList.push(buildItem)
            } 
    
            return {...state,
                previewList: buildList
            }
        case actions.SET_BUILD_LIST_QUIZ:
            // console.log('action', 'SET_BUILD_LIST_QUIZ');
            // console.log('action quizzies', action.quizzies);
            // console.log('state questions', state.questions);
            
            const quiz_ = action.quizzies
            const question_ = state.questions

            // console.log('action questions', quiz_);
            // console.log('state quizzies', question_);
            
            var buildList = []

            for(var a = 0; a < quiz_.length ; a++){
                var buildItem = {}
        
                buildItem._id = quiz_[a]._id
                buildItem.Name = quiz_[a].Name
                buildItem.Description = quiz_[a].Description
                buildItem.Status = quiz_[a].Status
                buildItem.Questions = []
                buildItem.State = {}
                
                for(var b = 0; b < question_.length; b++){
                    var questionItem = {}
                    var _state_ = {}
        
                    if(quiz_[a].Name == question_[b].Quiz){   
                        _state_[question_[b].Order] = ""                  
                        questionItem._id = question_[b]._id
                        questionItem.Question = question_[b].Question
                        questionItem.Options = question_[b].Options
                        questionItem.Answer = question_[b].Answer
                        questionItem.Status = question_[b].Status
                        questionItem.Order = question_[b].Order
                        questionItem.Point = question_[b].Point
        
                        buildItem.Questions.push(questionItem)
                    }
                    buildItem.State = Object.assign(buildItem.State,_state_)
                }
        
                buildList.push(buildItem)
            } 

            return {...state,
                quizzies: action.quizzies,
                questions: state.questions,
                buildListFlag: !quiz_ && !question_ ? false : true,
                previewList: buildList
            }
        case actions.SET_BUILD_LIST_QUESTION:
            // console.log('action', 'SET_BUILD_LIST_QUESTION');
            // console.log('action questions', action.questions);
            // console.log('state quizzies', state.quizzies);
            
            const quiz_1 = state.quizzies
            const question_1 = action.questions

            // console.log('action questions', quiz_1);
            // console.log('state quizzies', question_1);

            var buildList = []

            for(var a = 0; a < quiz_1.length ; a++){
                var buildItem = {}
        
                buildItem._id = quiz_1[a]._id
                buildItem.Name = quiz_1[a].Name
                buildItem.Description = quiz_1[a].Description
                buildItem.Status = quiz_1[a].Status
                buildItem.Questions = []
                buildItem.State = {}
                
                for(var b = 0; b < question_1.length; b++){
                    var questionItem = {}
                    var _state_ = {}
        
                    if(quiz_1[a].Name == question_1[b].Quiz){   
                        _state_[question_1[b].Order] = ""                  
                        questionItem._id = question_1[b]._id
                        questionItem.Question = question_1[b].Question
                        questionItem.Options = question_1[b].Options
                        questionItem.Answer = question_1[b].Answer
                        questionItem.Status = question_1[b].Status
                        questionItem.Order = question_1[b].Order
                        questionItem.Point = question_1[b].Point
        
                        buildItem.Questions.push(questionItem)
                    }
                    buildItem.State = Object.assign(buildItem.State,_state_)
                }
        
                buildList.push(buildItem)
            } 

            return {...state,
                quizzies: state.quizzies,
                questions: action.questions,
                buildListFlag: !quiz_ && !question_ ? false : true,
                previewList: buildList
            }
        case actions.GET_BUILD_LIST:
            // console.log('action', 'GET_BUILD_LIST');
            // console.log('action questions', action.quizzies);
            // console.log('state quizzies', action.questions);
            
            const quiz_2 = action.quizzies
            const question_2 = action.questions

            // console.log('action questions', quiz_2);
            // console.log('state quizzies', question_2);

            var buildList = []

            for(var a = 0; a < quiz_2.length ; a++){
                var buildItem = {}
        
                buildItem._id = quiz_2[a]._id
                buildItem.Name = quiz_2[a].Name
                buildItem.Description = quiz_2[a].Description
                buildItem.Status = quiz_2[a].Status
                buildItem.Questions = []
                buildItem.State = {}
                
                for(var b = 0; b < question_2.length; b++){
                    var questionItem = {}
                    var _state_ = {}
        
                    if(quiz_2[a].Name == question_2[b].Quiz){   
                        _state_[question_2[b].Order] = ""                  
                        questionItem._id = question_2[b]._id
                        questionItem.Question = question_2[b].Question
                        questionItem.Options = question_2[b].Options
                        questionItem.Answer = question_2[b].Answer
                        questionItem.Status = question_2[b].Status
                        questionItem.Order = question_2[b].Order
                        questionItem.Point = question_2[b].Point
        
                        buildItem.Questions.push(questionItem)
                    }
                    buildItem.State = Object.assign(buildItem.State,_state_)
                }
        
                buildList.push(buildItem)
            } 

            return {...state,
                buildListFlag: !quiz_ && !question_ ? false : true,
                previewList: buildList
            }
        default:
            return state
    }
}