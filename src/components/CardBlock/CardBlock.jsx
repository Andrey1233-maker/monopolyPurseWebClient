import styles from './CardBlock.module.css'

export default function CardBlock({ card }) {

    return (
        <div className={styles.card} style={{background: card.style}}>
            <div className={styles.card__number}>
                {card.number}
            </div>
        </div>
    )
}