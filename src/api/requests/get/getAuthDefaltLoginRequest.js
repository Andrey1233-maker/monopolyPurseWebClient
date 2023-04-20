import api from '../../apiConfig'
import { getAuthDefaultLoginQueryCreator } from '../../apiCreator'

export async function getAuthDefaultLoginRequest(action) {
    try {
        const response = (await api.get(getAuthDefaultLoginQueryCreator(action.email, action.auth_key))).data
        if('message' in response) {
            throw new Error(`getAuthDefaultLoginRequest: request failed ¬ ${response.message}`)
        }
        return response.token
    }
    catch(e) {
        throw e
    }
}