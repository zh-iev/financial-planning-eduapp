import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

const Plan = () => {

    const { demoParam } = useParams()

    useEffect(() => {
        console.log(demoParam)
    }, [ demoParam ]) //при изменении него вызывать useEffect

    return (
        <React.Fragment>
            <h3 style={{display: "block", margin: "30px", fontFamily: "sans-serif"}}>
                Страница планирования</h3>
        </React.Fragment>
    )
}

export default Plan
