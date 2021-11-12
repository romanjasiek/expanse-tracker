import { nanoid } from "nanoid";

import ChartBar from './ChartBar';

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return <div className="chart">
        {props.dataPoints.map(dataPoint => {
            return <ChartBar 
                        value={dataPoint.value} 
                        maxValue={totalMaximum} 
                        label={dataPoint.label} 
                        key={nanoid()} />})}
    </div>
}

export default Chart;