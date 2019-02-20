import {RESTART_GAME, CHANGE_FEEDBACK, MAKE_GUESS, AURAL_UPDATE} from '../actions'

const initialState= {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.floor(Math.random() * 100) + 1
}


export const hotColdReducer = (state=initialState, action) => {
    if(action.type===RESTART_GAME) {
        return Object.assign({}, state, {
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: Math.floor(Math.random() * 100) + 1
        })
    }
    else if(action.type===MAKE_GUESS){
        return Object.assign({}, state, {
            guesses: action.guesses,
            feedback: action.feedback
        })
    }

    else if(action.type===AURAL_UPDATE){
        return Object.assign({}, state, {
            auralStatus: action.auralStatus
        })
    }
    else return state;

}