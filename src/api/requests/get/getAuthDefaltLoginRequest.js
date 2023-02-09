import api from '../../apiConfig'
import { getAuthDefaultLoginQueryCreator } from '../../apiCreator'

export async function getAuthDefaultLoginRequest({email, password}) {
    try {
        const response = (await api.get(getAuthDefaultLoginQueryCreator({email, password})).toPromise()).getAuthDefaultLoginQueryCreator
        if('message' in response) {
            throw new Error(`getAuthDefaultLoginRequest: request failed ¬ ${response.message}`)
        }
        return response.token
    }
    catch(e) {
        throw e
    }
}