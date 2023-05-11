import { SET_SELECTED_TABLE_TO_TABLE_REDUCER_ACTION } from './../../actions/actionTypes'

const initial = {
    table: null,
}

export default function tableInfoReducer(state = initial, action) {
    switch(action.type) {
        case SET_SELECTED_TABLE_TO_TABLE_REDUCER_ACTION:
            return { ...state, table: action.table };
        default:
            return state
    }
}