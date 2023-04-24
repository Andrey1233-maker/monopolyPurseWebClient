import { TablePageMenu } from "./TablePageMenu";
import { TableFragmentTransferStory } from './TableFragmentTransferStory'

import './TablePage.styles.css'

export function TableFragment() {

    return (
        <div class="table_page_content">
            <TablePageMenu />
            <TableFragmentTransferStory />
        </div>
    )
}