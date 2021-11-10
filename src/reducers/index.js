import {combineReducers} from "redux";

const songsReducer = () => {
    return [
        {
            title: 'Baby got back',
            duration: '4:04'
        },
        {
            title: 'I want it that way',
            duration: '5:05'
        },
        {
            title: 'The boy is mine',
            duration: '6:06'
        },
        {
            title: 'Say my name',
            duration: '7:07'
        }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}

const policiesReducer = (listOfPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name]
    }
    if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(name => name !== action.payload.name)
    }

    return listOfPolicies
}

const claimsReducer = (oldListOfClaims = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
        return [...oldListOfClaims, action.payload]
    }

    return oldListOfClaims
}

const accountingReducer = (bagOfMoney = 100, action) => {
    if (action === 'CREATE_CLAIM') {
        bagOfMoney = bagOfMoney - action.payload.amountOfMoneyToCollect
    }
    if (action === 'CREATE_POLICY') {
        bagOfMoney = bagOfMoney + action.payload.amount
    }

    return bagOfMoney
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
    policies: policiesReducer,
    claims: claimsReducer,
    accounting: accountingReducer
})
