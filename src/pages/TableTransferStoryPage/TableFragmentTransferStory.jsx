
import { TransferStoryBlock } from '../../components'

import styles from "./TableTransferStoryPage.module.css";

export default function TableFragmentTransferStoryPage() {

  const transfers = [{
    currencySender: {
      number: '1234',
      style: '#00cd33'
    },
    currencyRecipier: {
      number: '3121',
      style: '#b93333',

    },
    sum: 123,
    },
    {
      currencySender: {
        number: '1234',
        style: '#00cd33',
      },
      currencyRecipier: {
        number: '3121',
        style: '#b93333',
      },
      sum: -123,
    },
  ]

  return (
    <div className={styles.table_page__form}>
      <p className={styles.table_page__title}>История переводов</p>
      <div className={styles.table_page__list}>
        {
          (transfers?.length > 0) ? (transfers.map(transfer => (
            <TransferStoryBlock transfer={transfer}/>
          ))) :
          (<p>Не было операций с вашими счетами</p>)
        }
      </div>
    </div>
  );
}
