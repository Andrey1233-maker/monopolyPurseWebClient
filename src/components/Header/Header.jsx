import { useCallback, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import { readToken } from '../../readToken'
import { BorderButton } from "../BorderButton/BorderButton"

import logo from '../../logo.svg'

import './header.styles.css'

export function Header() {

    const [token, setToken] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const currentToken = readToken()
        setToken(currentToken)
    })

    const onClickRegBtn = useCallback(() => {
        navigate('/reg')
    }, [navigate])
 
    const onClickAuthBtn = useCallback(() => {
        navigate('/auth')
    }, [navigate])

    return (
        <div class="header__bg">
            <div class="header">
                <div class="header__title">
                    <img class="header__logo" src={logo}/>
                    <p>Кошелёк монополии</p>
                </div>
                <div class="header__btns">
                    <BorderButton label={'Регистрация'} onClick={onClickRegBtn}/>
                    <BorderButton label={'Вход'} onClick={onClickAuthBtn}/>
                </div>
            </div>
        </div>
    )
}