import React, {useState} from "react";
import DataList from "../views/local/DataList";
import DataChart from "../views/local/DataChart";
import {useParams} from "react-router-dom";

const Stat = (props) => {
    const {statData} = props
    const [isShowChart, setIsShowChart] = useState(true)

    const { viewType } = useParams()

    return (
        <React.Fragment>
            <DataList viewType={viewType} setShow={setIsShowChart} data={statData}/>
            <DataChart viewType={viewType} data={statData} show={isShowChart}/>
        </React.Fragment>
    )
}

export default Stat
