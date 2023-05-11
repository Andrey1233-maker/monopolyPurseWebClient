
import { useSelector } from 'react-redux'

import { tableFromTableInfoReducerSelector } from './../../redux/reducers/selectors'

import styles from './TableInfoPage.module.css'
import PlayerBlock from '../../components/PlayerBlock/PlayerBlock'


export default function TableInfoPage() {

    const table = useSelector(tableFromTableInfoReducerSelector)

    if(!table) {
        return (<div className={styles.page}>
            <p className={styles.page__title}>Комната не найдена</p>
        </div>)
    }
    
    return (
        <div className={styles.page}>
            <p className={styles.page__title}>{table.title}</p>
            <p className={styles.page__desc}>{table.description}</p>

            <p className={styles.page__title}>Список игроков</p>
            <div className={styles.page__player_list}>
                {table.players.map((player) => 
                    (<PlayerBlock player={player}/>)
                )}
            </div>
        </div>
    )
}       