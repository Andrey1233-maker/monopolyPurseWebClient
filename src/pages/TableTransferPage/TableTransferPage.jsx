import { DefaultButton, DefaultInput } from '../../components'
import MiniCardBlock from '../../components/MiniCardBlock'
import { defaultButtonTypes } from '../../consts'
import styles from './TableTransferPage.module.css'

export default function TableTransferPage() {


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
            <p className={styles.page__title}>Совершить перевод</p>
            <div className={styles.page__transaction_steps}>
                <div className={styles.transaction_steps__my_cards}>
                    {cards.map((card) => (
                        <div className={styles.card_item}>
                            <MiniCardBlock card={card}/>
                            <p>Баланс: {card.balance}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.dual_section__wall}/>
                <div className={styles.transaction_steps__transfer_sum}>
                    <p className={styles.page__title1}>Сумма перевода</p>
                    <DefaultInput value={1200} title={'Сумма перевода'}/>
                    <p className={styles.page__title1}>Номер кошелька получателя</p>
                    <DefaultInput value={1200} title={'Номер кошелька получателя'}/>
                    <DefaultButton title={'Совершить перевод'} type={defaultButtonTypes.ACCEPT}/>
                </div>
            </div>
        </div>
    )
}