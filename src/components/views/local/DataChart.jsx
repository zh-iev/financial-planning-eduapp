import React, {useEffect, useState} from "react";
import css from "../../../styles/dataList.css";
import { ResponsivePie } from "@nivo/pie"

const {DataContainer} = css

const MyResponsivePie = ({data /* see data tab */}) => (
    <ResponsivePie
        data={data}
        margin={{top: 40, right: 80, bottom: 80, left: 80}}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{from: 'color'}}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'left',
                direction: 'column',
                justify: false,
                translateX: -80,
                translateY: -150,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)

const DataChart = (props) => {
    const {data = [], show} = props
    const filteredData = data.filter(item => item.split('::')[0] === "expenses")

    const [ val1, setVal1 ] = useState(0)
    const [ val2, setVal2 ] = useState(0)
    const [ val3, setVal3 ] = useState(0)
    const [ val4, setVal4 ] = useState(0)
    const [ val5, setVal5 ] = useState(0)
    const [ val6, setVal6 ] = useState(0)
    const [ val7, setVal7 ] = useState(0)

    useEffect(() => {
        for (let i=0; i < filteredData.length; i++) {
            if (filteredData[i].split("::")[2] === "Basic") {
                setVal1(prev => prev + +filteredData[i].split("::")[1])
            }
            if (filteredData[i].split("::")[2] === "Nutrition") {
                setVal2(prev => prev + +filteredData[i].split("::")[1])
            }
            if (filteredData[i].split("::")[2] === "Clothing") {
                setVal3(prev => prev + +filteredData[i].split("::")[1])
            }
            if (filteredData[i].split("::")[2] === "Health") {
                setVal4(prev => prev + +filteredData[i].split("::")[1])
            }
            if (filteredData[i].split("::")[2] === "Education") {
                setVal5(prev => prev + +filteredData[i].split("::")[1])
            }
            if (filteredData[i].split("::")[2] === "Rest") {
                setVal6(prev => prev + +filteredData[i].split("::")[1])
            }
            if (filteredData[i].split("::")[2] === "Other") {
                setVal7(prev => prev + +filteredData[i].split("::")[1])
            }
        }
    },[])

    return <React.Fragment>
        {show && <DataContainer style={{height: "500px"}}>
        <MyResponsivePie
            data={[
                {
                    "id": "Basic",
                    "label": "Basic",
                    "value": val1,
                    "color": "hsl(64, 70%, 50%)"
                },
                {
                    "id": "Nutrition",
                    "label": "Nutrition",
                    "value": val2,
                    "color": "hsl(124, 70%, 50%)"
                },
                {
                    "id": "Clothing and shoes",
                    "label": "Clothing and shoes",
                    "value": val3,
                    "color": "hsl(141, 70%, 50%)"
                },
                {
                    "id": "Health",
                    "label": "Health",
                    "value": val4,
                    "color": "hsl(11, 70%, 50%)"
                },
                {
                    "id": "Education",
                    "label": "Education",
                    "value": val5,
                    "color": "hsl(174, 70%, 50%)"
                },
                {
                    "id": "Rest",
                    "label": "Rest",
                    "value": val6,
                    "color": "hsl(41,70%,50%)"
                },
                {
                    "id": "Other",
                    "label": "Other",
                    "value": val7,
                    "color": "hsl(267,70%,50%)"
                },

            ]}/>
        </DataContainer>}
    </React.Fragment>
}

export default DataChart
