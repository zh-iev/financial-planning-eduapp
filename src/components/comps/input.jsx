import React from "react";
import css from "../../styles/form.css";

const {Input} = css

const InputComponent = (props) => {

    const { type, ph, maxLen, action, inputValue } = props

    //const [ inputValue, setInputValue ] = useState(0)

    return (
        <React.Fragment>
            <Input
                value = {inputValue}
                type={type}
                placeholder={ph}
                maxLength={maxLen}
                onChange={event => {
                    action(event.target.value)
                }}/>
        </React.Fragment>
    )
}

export default InputComponent
