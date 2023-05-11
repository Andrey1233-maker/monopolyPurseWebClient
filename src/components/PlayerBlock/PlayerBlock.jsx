import { getRoleByEmun, getProfilePictureByUser } from './../../utils'

import styles from './PlayerBlock.module.css'

export default function PlayerBlock({ player }) {
    
    return (
        <div className={styles.player_block}>
            <img src={getProfilePictureByUser(player.user)} className={styles.player_block__user_pic}/>
            <div className={styles.player_block__user_info}>
                <p className={styles.user_info__name}>{player.user.name}</p>
                <p className={styles.user_info__role}>{player.user.email}</p>
                <p className={styles.user_info__role}>{getRoleByEmun(player.role)}</p>
            </div>
        </div>
    )
}