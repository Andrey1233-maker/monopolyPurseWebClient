
import close_icon from './X.svg'

import './NotificationList.styles.css'

export function NotificationList({notifications}) {

    return (
        <div class="notification_list__form">
            <p class="notification_list__form__title">У вас <span class="form__title__bold">{notifications.length}</span> уведомлений</p>
            {notifications.map((notification) => (
                <div class="notificaton_list__item">
                    <p class="item__text">{notification.content}</p>
                    <img src={close_icon} alt='Удалить'/>
                </div>    
            ))}
        </div>
    )
}