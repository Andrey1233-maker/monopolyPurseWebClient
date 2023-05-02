
import { TransferStoryBlock } from '../../components'

import "./TableTransferStoryPage.styles.css";

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
    <div class="table_page__form">
      <p class="table_page__form__title">История переводов</p>
      {
        (transfers?.length > 0) ? (transfers.map(transfer => (
          <TransferStoryBlock transfer={transfer}/>
        ))) :
        (<p>Не было операций с вашими счетами</p>)
      }
    </div>
  );
}
