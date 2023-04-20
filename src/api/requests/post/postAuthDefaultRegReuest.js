import api from "../../apiConfig"
import { AUTH_DEFAULT_REG_PATH } from "../../apiPath"

export async function postAuthDefaultRegReuest(action) {
    try {
        const response = (await api.post(AUTH_DEFAULT_REG_PATH, action)).data

        if('message' in response) {
            throw new Error(`postAuthDefaultRegReuest: request failed ~ ${response.message}`)
        }

        return response
    }
    catch(e) {
        throw e
    }
}