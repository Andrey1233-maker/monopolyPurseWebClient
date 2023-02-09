import { REQUEST_GET_AUTH_DAFAULT_LOGIN_ACTION, REQUEST_POST_AUTH_DEFAULT_REG_ACTION } from "./actionTypes";

export function requestGetAuthDefaultLoginActionCreator({email, password}) {
    return {
        type: REQUEST_GET_AUTH_DAFAULT_LOGIN_ACTION,
        email,
        password,
    }
}

export function requestPostAuthDefaultRegActionCreator({email, password, name}) {
    return {
        type: REQUEST_POST_AUTH_DEFAULT_REG_ACTION, 
        email,
        password,
        name,
    }
}