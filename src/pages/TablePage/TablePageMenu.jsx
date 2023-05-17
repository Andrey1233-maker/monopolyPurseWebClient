import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./TablePage.module.css";

export function TablePageMenu({tableId}) {

  const navigate = useNavigate()

  const onClick = useCallback((path) => {
    navigate(`${path}`)
  }, [navigate, tableId])

  return (
    <div className={styles.table_page__form}>
      <p className={styles.table_page__form__part} onClick={() => onClick('')}>О комнате</p>
      <p className={styles.table_page__form__part} onClick={() => onClick('wallets')}>Мои кошельки</p>
      <p className={styles.table_page__form__part} onClick={() => onClick('transfers')}>История переводов</p>
      <p className={styles.table_page__form__part} onClick={() => onClick('transaction')}>Совершить перевод</p>
    </div>
  );
}
