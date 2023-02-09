import { useMemo } from 'react'

import { DefaultInput } from '../DefaultInput/DefaultInput'

import './TableItem.styles.css'

export function TableItem({table, createTable}) {

    const content = useMemo(() => {

        if(createTable) {
            return (<>
                <p class="block__title">Создать комнату</p>
            </>)
        }

        if(table) {
            return (<>
                    <p class="block__title">{table.name}</p>
                </>)
        }

        return (<>
            <p class="block__title">Присоеденниться к комнате</p>
            <input class="block__input"/>
        </>)
    }, [table])

    return (
        <div class={`block ${createTable && 'block__create'}`}>
            {content}
        </div>
    )
}