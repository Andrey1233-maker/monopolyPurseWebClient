import { TableItem } from "../../components/TableItem/TableItem";

import './tableListPage.styles.css'

export function TableListFragment() {

    return (
        <div class="list__bg">
            <div class="list">
                <TableItem createTable={true}/>
                <TableItem table={null}/>
            </div>
        </div>
    )
}