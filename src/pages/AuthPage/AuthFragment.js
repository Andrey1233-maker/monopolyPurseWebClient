import { useCallback, useState } from "react";
import { DefaultButton } from "../../components/DefaultButton/DefaultButton";
import { DefaultInput } from "../../components/DefaultInput/DefaultInput";
import { defaultButtonTypes } from '../../consts'

export function AuthFragment() {

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
        <div class='auth_fragment'>
            <p class='auth_fragment__title'>Авторизация</p>
            <div class='auth_fragment__inps'>
                <DefaultInput title={'Почта'} value={emailValue} onChange={onChangeEmailValue}/>
                <DefaultInput title={'Пароль'} value={passwordValue} onChange={onChangePasswordValue}/>
            </div>
            <div class='auth_fragment__btns'>
                <DefaultButton onClick={onClickAuthBtn} title='Войти' type={defaultButtonTypes.ACCEPT}/>
                <DefaultButton onClick={onClickAuthBtn} title='Войти через Google' type={defaultButtonTypes.DENY}/>
                <DefaultButton onClick={onClickAuthBtn} title='Регистрация'/>
            </div>
        </div>
    )
}