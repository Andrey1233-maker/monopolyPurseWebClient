import api from '../../apiConfig'
import { TABLE_PATH } from '../../apiPath'

export async function getTablesRequest() {
    try {
        const response = (await api.get(TABLE_PATH)).data
        if('message' in response) {
            throw new Error(`getTablesRequest: request failed ¬ ${response.message}`)
        }
        return response
    }
    catch(e) {
        throw e
    }
}