import { useCallback, useState } from "react";
import { DefaultButton } from "../../components/DefaultButton/DefaultButton";
import { DefaultInput } from "../../components/DefaultInput/DefaultInput";
import { defaultButtonTypes } from '../../consts'

export function RegistrationFragment() {

    const [emailValue, setmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    const onChangeEmailValue = useCallback((newEmail) => {
        setmailValue(newEmail)
    }, [setmailValue])

    const onChangePasswordValue = useCallback((newPassword) => {
        setPasswordValue(newPassword)
    }, [setPasswordValue])

    const onClickAuthBtn = useCallback(() => {
        console.log(emailValue, passwordValue)
    }, [emailValue, passwordValue])

    return (
        <div class='registration_fragment'>
            <p class='registration_fragment__title'>Регистрация</p>
            <p class='registration_fragment__desc'>Для регистрации нужно ввести настоящий email, на него придет письмо для поддтверждения почты.<br/><br/>Но мы советуем зарегестрироваться через Google</p>
            <div class='registration_fragment__inps'>
                <DefaultInput title={'Почта'} value={emailValue} onChange={onChangeEmailValue}/>
                <DefaultInput title={'Никнейм'} value={emailValue} onChange={onChangeEmailValue}/>
                <DefaultInput title={'Пароль'} value={passwordValue} onChange={onChangePasswordValue}/>
                <DefaultInput title={'Подтверждение пароля'} value={passwordValue} onChange={onChangePasswordValue}/>
                <DefaultInput title={'Код подтверждения'} value={passwordValue} onChange={onChangePasswordValue}/>
            </div>
            <div class='registration_fragment__btns'>
                <DefaultButton onClick={onClickAuthBtn} title='Зарегестрироваться' type={defaultButtonTypes.ACCEPT}/>
                <DefaultButton onClick={onClickAuthBtn} title='Войти через Google' type={defaultButtonTypes.DENY}/>
                <DefaultButton onClick={onClickAuthBtn} title='Назад'/>
            </div>
        </div>

    )
}