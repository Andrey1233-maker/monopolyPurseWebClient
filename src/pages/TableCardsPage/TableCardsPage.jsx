import { useState } from 'react'
import classnames from 'classnames'

import {CardBlock, DefaultButton, DefaultInput } from '../../components'
import styles from './TableCardsPage.module.css'
import { useCallback } from 'react'

export default function TableCardsPage() {

    const [newCard, setNewCard] = useState({ style: '#909090', number: '1234'})

    const onChangeNumber = useCallback((number) => {
        setNewCard({...newCard, number })
    }, [setNewCard, newCard])

    const onChangeNewStyle = useCallback((style) => {
        setNewCard({...newCard, style})
    }, [setNewCard, newCard])

    const onClickCreateCard = useCallback(() => {
        // @todo
    }, [])

    const cards = [
        { style: '#0C2CBA', number: '1234', balance: 12000},
        { style: '#0C2CBA', number: '1234', balance: 12000},
        { style: '#0C2CBA', number: '1234', balance: 12000},
        { style: '#0C2CBA', number: '1234', balance: 12000},
        { style: '#0C2CBA', number: '1234', balance: 12000},
        { style: '#0C2CBA', number: '1234', balance: 12000},
        { style: '#0C2CBA', number: '1234', balance: 12000},
    ]

    return (
        <div className={styles.page}>
            <p className={styles.page__title}>Ваши кошельки</p>
            <div className={styles.page__dual_section}>
                <div className={styles.dual_section__cards_list}>
                    {cards.map((card) => (
                        <div className={styles.card_item}>
                            <CardBlock card={card}/>
                            <div className={styles.card_item__info}>
                                <p className={styles.info__number}>Номер кошелька: {card.number}</p>
                                <p className={styles.info__balance}>Баланс на кошельке: {card.balance}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.dual_section__wall}/>
                <div className={styles.dual_section__create_card}>
                    <p className={styles.page__title}>Создать кошелёк</p>
                    <CardBlock card={newCard}/>
                    <DefaultInput title={'Номер карты'} value={newCard.number} onChange={onChangeNumber}/>
                    <div className={styles.create_card__style_selector}>
                        <div style={{background: '#0C2CBA'}} className={classnames(styles.style_selector__option, {
                            [styles.style_selector__option_target]: newCard.style === '#0C2CBA'
                        })}
                        onClick={() => onChangeNewStyle('#0C2CBA')}/>
                        <div  style={{background: '#F50E00'}} className={classnames(styles.style_selector__option, {
                            [styles.style_selector__option_target]: newCard.style === '#F50E00'
                        })}
                        onClick={() => onChangeNewStyle('#F50E00')}/>
                        <div  style={{background: '#00C22A'}} className={classnames(styles.style_selector__option, {
                            [styles.style_selector__option_target]: newCard.style === '#00C22A'
                        })}
                        onClick={() => onChangeNewStyle('#00C22A')}/>
                        <div  style={{background: '#F5ED00'}} className={classnames(styles.style_selector__option, {
                            [styles.style_selector__option_target]: newCard.style === '#F5ED00'
                        })}
                        onClick={() => onChangeNewStyle('#F5ED00')}/>
                        <div  style={{background: '#D500E4'}} className={classnames(styles.style_selector__option, {
                            [styles.style_selector__option_target]: newCard.style === '#D500E4'
                        })}
                        onClick={() => onChangeNewStyle('#D500E4')}/>  
                    </div>
                    <DefaultButton title={'Создать кошелёк'} onClick={onClickCreateCard}/>
                </div>
            </div>
        </div>
    )
}