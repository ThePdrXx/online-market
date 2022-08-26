const INITIAL_STATE = {
    name: '',
    email: '',
    gender: '',
}

export default function products(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SAVE_USER_DATA':
            return action.payload
        default:
            return state
    }
}