import { useCallback, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"; 
import { DefaultButton } from "../../components/DefaultButton/DefaultButton";
import { DefaultInput } from "../../components/DefaultInput/DefaultInput";
import { defaultButtonTypes } from '../../consts'
import { requestGetAuthDefaultLoginActionCreator } from "../../redux/actions/actionCreators";

export function AuthFragment() {

    const [emailValue, setmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onChangeEmailValue = useCallback((newEmail) => {
        setmailValue(newEmail)
    }, [setmailValue])

    const onChangePasswordValue = useCallback((newPassword) => {
        setPasswordValue(newPassword)
    }, [setPasswordValue])

    const onClickAuthBtn = useCallback(() => {
        window.location.assign('https://accounts.google.com/o/oauth2/auth?client_id=724831104412-3j4keepifvf6n3jdes2ti455v0ick2lp.apps.googleusercontent.com&redirect_uri=http://localhost:5000/auth/google/callback&access_type=offline&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email')
    }, [emailValue, passwordValue])

    const onClickDefaultAuthBtn = useCallback(() => {
        dispatch(requestGetAuthDefaultLoginActionCreator({emailValue, passwordValue}))
    }, [dispatch, emailValue, passwordValue])

    const onClickRegBtn = useCallback(() => {
        navigate('/reg')
    }, [navigate])

    return (
        <div class='auth_fragment'>
            <p class='auth_fragment__title'>Авторизация</p>
            <div class='auth_fragment__inps'>
                <DefaultInput title={'Почта'} value={emailValue} onChange={onChangeEmailValue}/>
                <DefaultInput title={'Пароль'} value={passwordValue} onChange={onChangePasswordValue}/>
            </div>
            <div class='auth_fragment__btns'>
                <DefaultButton onClick={onClickDefaultAuthBtn} title='Войти' type={defaultButtonTypes.ACCEPT}/>
                <DefaultButton onClick={onClickAuthBtn} title='Войти через Google' type={defaultButtonTypes.DENY}/>
                <DefaultButton onClick={onClickRegBtn} title='Регистрация'/>
            </div>
        </div>
    )
}