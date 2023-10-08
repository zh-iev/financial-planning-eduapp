import React, {useState} from "react";
import css from "../../../styles/dataList.css";

const {DataContainer, ContentCell, ContentLine, TypesLine, TypeItem} = css

const DataList = (props) => {
    const {data = [], setShow} = props
    const [dataType, setDataType] = useState('')
    const filteredData = data.filter(item => item.split("::")[0].toLowerCase() === dataType.toLowerCase())

    const dataSum = data.filter(item => item.split("::")[0].toLowerCase() === dataType.toLowerCase())
        .reduce((sum, item) => {
            sum += +item.split("::")[1].split(' ')[0]
            return sum
        }, 0)

    const dataBalance = data
        .reduce((balance, item) => {
            if (item.split("::")[0].toLowerCase() === "income") {
                return balance +  +(item.split("::")[1].split(" ")[0])
            } else {
                return balance - +(item.split("::")[1].split(" ")[0])
            }
        }, 0)

    return (
        <React.Fragment>
            <TypesLine>
                <TypeItem style={{color: dataType === "income" ? "black" : ''}} onClick={() => {setDataType("income"); setShow(false)}}>Income</TypeItem>
                <TypeItem style={{color: dataType === "expenses" ? "black" : ''}} onClick={() => {setDataType("expenses"); setShow(true)}}>Expenses</TypeItem>
                <TypeItem style={{color: dataType === "" ? "black" : ''}} onClick={() => {setDataType(""); setShow(false)}}>Common</TypeItem>
            </TypesLine>
            <DataContainer>
                <ContentLine key={"head"}>
                    <ContentCell style={{ fontFamily: "Montserrat Semibold"}} width={"20%"}>Type</ContentCell>
                    <ContentCell style={{ fontFamily: "Montserrat Semibold"}} width={"20%"}>Sum</ContentCell>
                    <ContentCell style={{ fontFamily: "Montserrat Semibold"}} width={"60%"}>Comment</ContentCell>
                </ContentLine>
                { filteredData.length > 0 && <React.Fragment>
                    { filteredData.map((item, index) => {
                        return (
                            <ContentLine key={index}>
                                <ContentCell width={"20%"}>{item.split('::')[0]}</ContentCell>
                                <ContentCell width={"20%"}>{item.split('::')[1]}</ContentCell>
                                <ContentCell width={"60%"}>{item.split('::')[2]}</ContentCell>
                            </ContentLine>)
                    }) }
                    <ContentLine key={"total"}>
                        <ContentCell width={"20%"}></ContentCell>
                        <ContentCell width={"20%"}>{ dataSum }</ContentCell>
                        <ContentCell width={"60%"}></ContentCell>
                    </ContentLine>
                </React.Fragment>
                }
                { filteredData.length === 0 && <React.Fragment>
                    { data.map((item, index) => {
                        return (
                            <ContentLine key={index}>
                                <ContentCell width={"20%"}>{item.split('::')[0]}</ContentCell>
                                <ContentCell width={"20%"}>{item.split('::')[1]}</ContentCell>
                                <ContentCell width={"60%"}>{item.split('::')[2]}</ContentCell>
                            </ContentLine>)
                    }) }
                    <ContentLine key={"total"}>
                        <ContentCell width={"20%"}></ContentCell>
                        <ContentCell width={"20%"}>{ dataBalance }</ContentCell>
                        <ContentCell width={"60%"}></ContentCell>
                    </ContentLine>
                </React.Fragment>
                }
            </DataContainer>
        </React.Fragment>
    )
}

export default DataList
