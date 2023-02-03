
import { DefaultButton } from '../DefaultButton/DefaultButton'
import './notificationModal.styles.css'

export function NotificationModal({message}) {
    return (
        <div class='notification_modal__bg'>
            <div class='notification_modal'>
                <p class='notification_modal__title'>Предупреждение</p>
                <p>{message}</p>
                <DefaultButton title='Понятно'/>
            </div>
        </div>
    )
}