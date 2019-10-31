import React from 'react';
import {Chart} from 'react-google-charts';

export default class TimeLine extends React.Component {
    state = {
        data: [
                [
      { type: 'string', id: 'Name' },
      { type: 'date', id: 'Start' },
      { type: 'date', id: 'End' },
    ]
    ]
    }

    render(){
        return (
          <div>
          <Chart
  width={'90%'}
  height={'700px'}
  chartType="Timeline"
  loader={<div>Loading Chart</div>}
  data={this.props.chartData}
  options={{
    showRowNumber: true,
  }}
  rootProps={{ 'data-testid': '1' }}
/>
          </div>
        )
    }
}