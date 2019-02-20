export const RESTART_GAME = 'RESTART_GAME'
export const restart_Game = () =>({
    type: RESTART_GAME
})

export const MAKE_GUESS = 'MAKE_GUESS'
export const make_Guess = (guess) => ({
    type: MAKE_GUESS,
    guess
})


export const AURAL_UPDATE = 'AURAL_UPDATE'
export const aural_Update = (auralStatus) => ({
    type: aural_Update,
    auralStatus
})

