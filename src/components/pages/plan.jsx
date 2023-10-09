import React, {useEffect, useState} from "react";

const Plan = () => {

    const [data, setData] = useState({name: "Zhenya", age: 20, hobby: "design", prof: "it"})
    const [count, setCount] = useState(0)

    const changeCount = () => {
        setData({
            ...data,
            age: 21,
            hobby: "hotrdm;lsa"
        })
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        // Всё равно увеличится на 1
        // А вот тут на 3:
        setCount(last => last + 1)
        setCount(last => last + 1)
        setCount(last => last + 1)
    }

    useEffect(() => {
        console.log(data.age)
    }, [data]) //при изменении него вызывать useEffect

    return (
        <React.Fragment>
            <span style={{display: "block"}}>{data.name}</span>
            <span style={{display: "block"}}>{data.age}</span>
            <span style={{display: "block"}}>{data.prof}</span>
            <span style={{display: "block"}}>{data.hobby}</span>
            <span style={{display: "block"}}>{count}</span>
            <button onClick={changeCount}>Change</button>
        </React.Fragment>
    )
}

export default Plan
