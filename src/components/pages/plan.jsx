import React, {useEffect} from "react";
import {useParams, useSearchParams} from "react-router-dom";

const Plan = () => {

    const { demoParam } = useParams()
    const [ params, setParams ] = useSearchParams() //как useState + url

    useEffect(() => {
        console.log(demoParam)
        setParams({ userName: 'Zhenya', userAge: '29' })
    }, [ demoParam, setParams ]) //при изменении него вызывать useEffect

    return (
        <React.Fragment>
            <h3 style={{display: "block", margin: "30px", fontFamily: "sans-serif"}}>
                Username: { params.get('userName')}
            </h3>
        </React.Fragment>
    )
}

export default Plan
