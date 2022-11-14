import React from 'react';

import SelectBox from 'devextreme-react/select-box';
import Chart, {
    CommonSeriesSettings,
    Series,
    ValueAxis,
    Export,
    Legend,
    Tooltip,
    Title,
    Grid,
    Format,
} from 'devextreme-react/chart';
import service from './data.js';

const countriesInfo = service.getCountriesInfo();
const energySources = service.getEnergySources();
const types = ['line', 'stackedline', 'fullstackedline'];

export const continentSources = [
    { value: 'Habiganj', name: 'Habiganj' },
    { value: 'Sylhet', name: 'Sylhet' },
    { value: 'Dhaka', name: 'Dhaka' },
    { value: 'Chitagang', name: 'Latin America & Caribbean' },
    { value: 'northamerica', name: 'Northern America' },
    { value: 'oceania', name: 'Oceania' },
];

export const populationData = [{
    year: '1750',
    africa: 106000000,
    asia: 502000000,
    europe: 163000000,
    latinamerica: 16000000,
    northamerica: 2000000,
    oceania: 2000000,
    total: 791000000,
}, {
    year: '1800',
    africa: 107000000,
    asia: 635000000,
    europe: 203000000,
    latinamerica: 24000000,
    northamerica: 7000000,
    oceania: 2000000,
    total: 978000000,
}, {
    year: '1850',
    africa: 111000000,
    asia: 809000000,
    europe: 276000000,
    latinamerica: 38000000,
    northamerica: 26000000,
    oceania: 2000000,
    total: 1262000000,
}, {
    year: '1900',
    africa: 133000000,
    asia: 947000000,
    europe: 408000000,
    latinamerica: 74000000,
    northamerica: 82000000,
    oceania: 6000000,
    total: 1650000000,
}, {
    year: '1950',
    africa: 229895000,
    asia: 1403388000,
    europe: 547287000,
    latinamerica: 167368000,
    northamerica: 171614000,
    oceania: 12675000,
    total: 2532227000,
}, {
    year: '2000',
    africa: 811101000,
    asia: 3719044000,
    europe: 726777000,
    latinamerica: 521419000,
    northamerica: 313289000,
    oceania: 31130000,
    total: 6122770000,
}, {
    year: '2050',
    africa: 2191599000,
    asia: 5142220000,
    europe: 719257000,
    latinamerica: 750956000,
    northamerica: 446862000,
    oceania: 55223000,
    total: 9306128000,
}];



const LineChart = () => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         type: 'line',
    //     };
    //     this.handleChange = this.handleChange.bind(this);
    // }

    return (
        <div>
            <Chart
                id="chart"
                palette="Vintage"
                dataSource={populationData}
            >
                <CommonSeriesSettings
                    argumentField="year"
                    type="fullstackedbar"
                />
                {
                    continentSources.map((item) => <Series
                        key={item.value}
                        valueField={item.value}
                        name={item.name} />)
                }
                <Series
                    axis="total"
                    type="spline"
                    valueField="total"
                    name="Total"
                    color="#008fd8"
                />

                <ValueAxis>
                    <Grid visible={true} />
                </ValueAxis>
                <ValueAxis
                    name="total"
                    position="right"
                    title="Total Population, billions"
                >
                    <Grid visible={true} />
                </ValueAxis>

                <Legend
                    verticalAlignment="bottom"
                    horizontalAlignment="center"
                />
                <Export enabled={true} />
                <Tooltip
                    enabled={true}
                    shared={true}
                    customizeTooltip={customizeTooltip}
                >
                    <Format
                        type="largeNumber"
                        precision={1}
                    />
                </Tooltip>
                <Title text="Evolution of Population by Continent" />
            </Chart>
        </div>
        // <React.Fragment>
        //     <Chart
        //         palette="Violet"
        //         dataSource={countriesInfo}
        //     >
        //         <CommonSeriesSettings
        //             argumentField="country"
        //             type={this.state.type}
        //         />
        //         {
        //             energySources.map((item) => <Series
        //                 key={item.value}
        //                 valueField={item.value}
        //                 name={item.name} />)
        //         }
        //         <Margin bottom={20} />
        //         <ArgumentAxis
        //             valueMarginsEnabled={false}
        //             discreteAxisDivisionMode="crossLabels"
        //         >
        //             <Grid visible={true} />
        //         </ArgumentAxis>
        //         <Legend
        //             verticalAlignment="bottom"
        //             horizontalAlignment="center"
        //             itemTextPosition="bottom"
        //         />
        //         <Export enabled={true} />
        //         <Title text="Energy Consumption in 2004">
        //             <Subtitle text="(Millions of Tons, Oil Equivalent)" />
        //         </Title>
        //         <Tooltip enabled={true} />
        //     </Chart>
        //     <div className="options">
        //         <div className="caption">Options</div>
        //         <div className="option">
        //             <span>Series Type </span>
        //             <SelectBox
        //                 dataSource={types}
        //                 value={this.state.type}
        //                 onValueChanged={this.handleChange}
        //             />
        //         </div>
        //     </div>
        // </React.Fragment>
    )
}
// handleChange(e) {
//     this.setState({ type: e.value });
//   }

function customizeTooltip(pointInfo) {
    const items = pointInfo.valueText.split('\n');
    const color = pointInfo.point.getColor();

    items.forEach((item, index) => {
        if (item.indexOf(pointInfo.seriesName) === 0) {
            const element = document.createElement('span');

            element.textContent = item;
            element.style.color = color;
            element.className = 'active';

            items[index] = element.outerHTML;
        }
    });

    return { text: items.join('\n') };
}


export default LineChart;