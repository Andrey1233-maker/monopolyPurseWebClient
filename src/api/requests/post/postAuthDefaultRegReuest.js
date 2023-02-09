import api from "../../apiConfig"
import { AUTH_DEFAULT_REG_PATH } from "../../apiPath"

export async function postAuthDefaultRegReuest({email, password, name}) {
    try {
        const response = (await api.post(AUTH_DEFAULT_REG_PATH, {
            email, 
            password, 
            name,
        }).toPromise()).data

        if('message' in response) {
            throw new Error(`postAuthDefaultRegReuest: request failed ~ ${response.message}`)
        }

        return response.token
    }
    catch(e) {
        throw e
    }
}