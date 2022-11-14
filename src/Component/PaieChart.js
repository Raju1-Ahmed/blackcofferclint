import React, { useEffect, useState } from 'react';
import LineChart from './LineChart';

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
                    let arr = data.slice(100, 200)
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
        <div className='my-10'>
            <h4 className='text-xl font-bold text-center my-12'>Purches Your Products</h4>
            {/* <h4 className='text-xl font-bold text-center my-12'>Purches Your Products: {users.length}</h4> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    // users.map(user => <LineChart
                    //     key={user._id}
                    //     user={user}
                    // ></LineChart>)
                }

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
        </div>
    );
};

export default PaieChart;