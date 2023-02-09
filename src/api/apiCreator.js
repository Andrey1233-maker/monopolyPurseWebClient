import { AUTH_DEFAULT_LOGIN_PATH } from "./apiPath"

export function getAuthDefaultLoginQueryCreator({email, password}) {
    return `${AUTH_DEFAULT_LOGIN_PATH}?email=${email}&password=${password}`
}