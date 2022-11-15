import React, { useEffect, useState } from 'react';

import Chart, {
    ArgumentAxis,
    Label,
    Legend,
    Series,
} from 'devextreme-react/chart';



export const populationData = [{
    arg: 1960,
    val: 3032019978,
}, {
    arg: 1970,
    val: 3683676306,
}, {
    arg: 1980,
    val: 4434021975,
}, {
    arg: 1990,
    val: 5281340078,
}, {
    arg: 2000,
    val: 6115108363,
}, {
    arg: 2010,
    val: 6922947261,
}, {
    arg: 2020,
    val: 7795000000,
}];

const PaieChart = () => {
    const [users, setUsers] = useState([]);
    //   console.log("data check", products[0].title)
    useEffect(() => {
        try {
            fetch('https://blackcoffersever.onrender.com/allinfo')
                .then((res) => res.json())
                .then(data => {
                    // console.log("data from pieChart:", data.slice(0, 10));
                    let arr = data.slice(150, 200)
                    console.log("data from arr:", arr);
                    let filterdArr = []
                    for (let i = 0; i < arr.length; i++) {
                        let element = arr[i];
                        if (element.start_year && element.intensity && element.end_year) {

                            // console.log("element:", element);
                            element.arg = element.end_year
                            element.val = element.intensity
                            filterdArr.push(element)

                        }
                    }
                    console.log("filterdArr:", filterdArr)
                    setUsers(filterdArr)
                })
        } catch (error) {
            console.log("error data fetch in piechart", error);
        }
    }, []);
    return (
        <div className='mr-5'>
            <Chart
                title="REPORT"
                dataSource={users}
                id="chart"
            >

                <ArgumentAxis tickInterval={20}>
                    <Label format="decimal" />
                </ArgumentAxis>

                <Series
                    type="bar"
                />

                <Legend
                    visible={false}
                />

            </Chart>

        </div>
    );
};

export default PaieChart;