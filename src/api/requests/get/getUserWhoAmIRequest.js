import { USER_WHO_AM_I_PATH } from "../../apiPath";
import api from "../../apiConfig";

export async function getUserWhoAmIRequest() {
  try {
    const response = (await api.get(USER_WHO_AM_I_PATH)).data;
    if ("message" in response) {
      throw response.message;
    }
    return response.user;
  } catch (e) {
    throw new Error(`getUserWhoAmIRequest: request failed ~ ${e}`);
  }
}
