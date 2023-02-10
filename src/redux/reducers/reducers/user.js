import { SET_USER_TO_USER_REDUCE_ACTION } from "../../actions/actionTypes";

const initialState = {
    user: null,
}

export function userReducer(state = initialState, action) {
    switch(action.type) {
        case SET_USER_TO_USER_REDUCE_ACTION:
            return { ...state, user: action.user }
        default:
            return state
    }
}