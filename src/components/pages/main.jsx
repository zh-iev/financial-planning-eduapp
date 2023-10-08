import React, {useState} from "react";
import css from "../../styles/form.css";
import InputComponent from "../comps/input";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const { FormController, Button } = css

const Main = (props) => {
    const [value, setValue] = useState("")
    const [type, setType] = useState("")
    const [comment, setComment] = useState("")

    const {action} = props
    const validation = () => {
        if (value.length > 2 && type && comment) {
            const dataLine = `${type}::${value}::${comment}`
            action(prev => [...prev, dataLine])
            setValue('')
            setType('')
            setComment('')
        }
    }

    const handleChange = (event) => {
        setType(event.target.value)
    };
    const handleChangeComment = (event) => {
        setComment(event.target.value)
    };

    return (
        <React.Fragment>
            <FormController>
                <FormControl style={{'margin': '15px'}}>
                    <FormLabel id="buttons-group-label">Select the type</FormLabel>
                    <RadioGroup
                        aria-labelledby="buttons-group-label"
                        defaultValue="expenses"
                        name="radio-buttons-group"
                        value={type}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="expenses" control={<Radio />} label="Expenses" />
                        <FormControlLabel value="income" control={<Radio />} label="Income" />
                    </RadioGroup>
                </FormControl>
                <InputComponent style={{'margin': '15px'}} inputValue={value} action={setValue} type={"number"} ph={"Sum"} maxLen={100}/>
                {type === "income" && <InputComponent style={{'margin': '150px'}} inputValue={comment} action={setComment} type={"text"} ph={"Comment"} maxLen={100}/>}
                {type === "expenses" &&
                    <FormControl style={{'margin': '15px'}}>
                        <FormLabel id="comment-buttons-group-label">Select the type</FormLabel>
                        <RadioGroup
                            aria-labelledby="comment-buttons-group-label"
                            defaultValue="Other"
                            name="comment-radio-buttons-group"
                            value={comment}
                            onChange={handleChangeComment}
                        >
                            <FormControlLabel value="Basic" control={<Radio />} label="Basic (utilities, water, electricity, gas, etc.)" />
                            <FormControlLabel value="Nutrition" control={<Radio />} label="Nutrition" />
                            <FormControlLabel value="Clothing" control={<Radio />} label="Clothing and shoes" />
                            <FormControlLabel value="Health" control={<Radio />} label="Health" />
                            <FormControlLabel value="Education" control={<Radio />} label="Education and development" />
                            <FormControlLabel value="Rest" control={<Radio />} label="Rest" />
                            <FormControlLabel value="Other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                }
                <Button $backgroundcolor = {
                    value.length > 2 && type && comment ? "lightgreen" : "lightgrey"
                }
                onClick={validation}>Save</Button>
            </FormController>
        </React.Fragment>
    )
}

export default Main
