
import './borderButton.styles.css'

export function BorderButton({label, onClick}) {

    return (
        <button onClick={onClick} class='border_button'>
            {label}
        </button>
    )
}