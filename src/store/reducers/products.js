import items from '../../db'

const INITIAL_STATE = items

export default function products(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'UPDATE_COUNT':
            console.log(state)
            const newItems = state.map(item => item.id === action.payload.id ?
                { ...item, count: action.payload.count } :
                item
            )
            return newItems
        default:
            return state
    }
}