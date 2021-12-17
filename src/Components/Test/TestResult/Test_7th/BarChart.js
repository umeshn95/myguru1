import React, { Fragment } from 'react'
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';



const ChartMain = ({data}) => {

    return (
        <Fragment>
            <Fragment>
                <Paper className="container mt-5 mb-5">
                    <h1 className='bold'>Career Cluster Assessment Bar Chart</h1>
                    <Chart
                        data={data}
                    >
                        <ArgumentAxis />
                        <ValueAxis max={16} />

                        <BarSeries
                            valueField="totalCount"
                            argumentField="industry_Grade"
                        />
                        <Title text="Bar Chart" />
                        <Animation />
                    </Chart>

                </Paper>

            </Fragment>
        </Fragment>
    )
}


export default ChartMain

