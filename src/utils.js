import { adminRoleString, bankerRoleString, playerRoleString } from "./consts"
import { defaultProfilePicture } from './consts'

export const getRoleByEmun = (roleNumber) => {
    switch(roleNumber) {
        case 2:
            return adminRoleString;
        case 1:
            return bankerRoleString;
        default:
            return playerRoleString;
    }
}

export const getProfilePictureByUser = (user) => user.picture ?? defaultProfilePicture
