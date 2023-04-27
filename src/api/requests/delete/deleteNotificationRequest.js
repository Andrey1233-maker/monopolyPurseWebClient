import api from "../../apiConfig";
import { notificationWithIdQueryCreator } from "../../apiCreator";

export async function deleteNotificationRequest(action) {
  try {
    const response = await api.delete(
      notificationWithIdQueryCreator(action.id)
    );
    return response;
  } catch (e) {
    throw new Error(`deleteNotificationRequest: request failed ~ ${e}`);
  }
}
