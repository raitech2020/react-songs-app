// Action creator
export const selectSong = (song) => {
    // Return an Action
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}

// Action creator
export const createPolicy = (name, amount) => {
    // Return an Action
    return {
        type: 'CREATE_POLICY',
        payload: {
            name: name,
            amount: amount
        }
    }
}

// Action creator
export const deletePolicy = (name) => {
    // action
    return {
        type: 'DELETE_POLICY',
        payload: {
            name: name
        }
    }
}

// Action creator
export const createClaim = (name, amountOfMoneyToCollect) => {
    // action
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name: name,
            amountOfMoneyToCollect: amountOfMoneyToCollect
        }
    }
}
