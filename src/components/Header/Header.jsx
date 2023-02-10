import { useCallback, useState, useEffect, useMemo } from "react";
import { useNavigate } from 'react-router-dom'

import { readToken } from '../../readToken'
import { BorderButton } from "../BorderButton/BorderButton"

import logo from '../../logo.svg'

import './header.styles.css'
import { useSelector } from "react-redux";
import { userFromuserReducerSelector } from '../../redux/reducers/selectors'

export function Header() {

    const navigate = useNavigate()

    const user = useSelector(userFromuserReducerSelector)

    const onClickRegBtn = useCallback(() => {
        navigate('/reg')
    }, [navigate])
 
    const onClickAuthBtn = useCallback(() => {
        navigate('/auth')
    }, [navigate])

    const userContent = useMemo(() => {
        if(user) {
            console.log(user)
            return (
                <div class="header__user">
                    <img src={user.picture} class="header__avatar"/>
                    <div class="header__user_names">
                        <p class="user__name">{user.name}</p>
                        <p class="user__email">{user.email}</p>
                    </div>
                </div>
            )
        }
        return (
            <div class="header__btns">
                <BorderButton label={'Регистрация'} onClick={onClickRegBtn}/>
                <BorderButton label={'Вход'} onClick={onClickAuthBtn}/>
            </div>
        )
    }, [user])

    return (
        <div class="header">
            <div class="header__title">
                <img class="header__logo" src={logo}/>
                <p>Кошелёк монополии</p>
            </div>
            {userContent}
        </div>
    )
}