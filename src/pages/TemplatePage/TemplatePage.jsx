import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'

import './TemplatePage.styles.css'

export function TemplatePage({content}) {

    return (
        <div class="page">
            <Header />
            {content}
            <Footer />
        </div>
    )
}