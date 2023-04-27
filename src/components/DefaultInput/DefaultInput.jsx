import './defaultInput.styles.css'

export default function DefaultInput({title, value, onChange}) {

    return (
        <div class='default_input'>
            <input 
                class='default_input__input'
                value={value} 
                onChange={({target}) => {
                    onChange(target.value)
                }}
                placeholder={title}
            />
        </div>
    )
}