import api from "../../apiConfig";
import { NOTIFICATION_PATH } from "../../apiPath";

export async function getNotificationsRequest() {
  try {
    const response = (await api.get(NOTIFICATION_PATH)).data;
    if ("message" in response) {
      throw new Error(
        `getNotificationsRequest: request failed ¬ ${response.message}`
      );
    }
    return response;
  } catch (e) {
    throw e;
  }
}
