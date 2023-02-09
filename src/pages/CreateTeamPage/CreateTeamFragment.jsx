
import { useCallback } from "react"
import { useState } from "react"
import { DefaultInput } from "../../components/DefaultInput/DefaultInput"
import { DefaultButton } from "../../components/DefaultButton/DefaultButton"
import { defaultButtonTypes, roomCovers } from "../../consts"

import './CreateTeamPage.styles.css'

export function CreateTeamFragment() {

    const [choosenCover, setChoosenCover] = useState()

    const onClickCover = useCallback((newColor) => {
        setChoosenCover(newColor)
    }, [setChoosenCover])

    return (
        <div class="fragment__background">
            <div class="fragment">
                <p class="fragment__title">Создание комнаты</p>
                <p class="fragment__field">Название комнаты: <DefaultInput /></p>
                <p class="fragment__field">Описание комнаты: <DefaultInput /></p>
                <p class="fragment__title_mini">Обложка комнаты</p>
                <div class="fragment__covers">
                    {roomCovers.map((color) => (
                        <div 
                            class={`covers__item ${(color === choosenCover) && 'cover__item_active'}`} 
                            style={{background: color}}
                            onClick={() => onClickCover(color)}
                        />
                    )
                    )}
                </div>
                <div class="fragment__btns">
                    <DefaultButton title={"Создать комнату"} type={defaultButtonTypes.ACCEPT}/>
                    <DefaultButton title={"Назад"} type={defaultButtonTypes.DENY}/>
                </div>
            </div>
        </div>
    )
}