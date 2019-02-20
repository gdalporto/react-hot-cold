export const RESTART_GAME = 'RESTART_GAME'
export const restart_Game = () =>({
    type: RESTART_GAME
})

export const MAKE_GUESS = 'MAKE_GUESS'
export const make_Guess = (feedback, guess) => ({
    type: MAKE_GUESS,
    feedback,
    guess
})

export const CHANGE_FEEDBACK = 'CHANGE_FEEDBACK'
export const change_Feedback = (feedback) => ({
    type: CHANGE_FEEDBACK,
    feedback
})

export const AURAL_UPDATE = 'AURAL_UPDATE'
export const aural_Update = (auralStatus) => ({
    type: aural_Update,
    auralStatus
})

