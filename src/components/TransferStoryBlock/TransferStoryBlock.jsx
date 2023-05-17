import { useMemo } from 'react'
import classnames from 'classnames'

import MiniCardBlock from '../MiniCardBlock';
import styles from './TransferStoryBlock.module.css'


export default function TransferStoryBlock({ transfer }) {

  const transferSum = useMemo(() =>( transfer.sum > 0 ? `<<< +${transfer.sum} <<<` : `>>> ${transfer.sum} >>>` ), [transfer])
  const transferColor = useMemo(() =>( transfer.sum > 0 ? '#00cd33' : '#b93333' ), [transfer])

  return (
    <div className={classnames(styles.transfer_block, {
      [styles.transfer_block_pos]: transfer.sum >= 0,
      [styles.transfer_block_neg]: transfer.sum < 0})}>
      <div className={styles.card_section}>
        <MiniCardBlock card={transfer.currencySender}/>
        <p className={styles.card_section__user_name}>Andrew</p>
      </div>
      <p className={styles.transfer_block__sum} style={{color: transferColor}}>{transferSum}</p>
      <div className={styles.card_section}>
        <p className={styles.card_section__user_name}>Satchi</p>
        <MiniCardBlock card={transfer.currencyRecipier}/>
      </div>
    </div>
  );
}
