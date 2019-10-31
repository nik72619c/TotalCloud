import React from 'react';
import logo from './logo.svg';
import './App.css';
import Record from './Record';
import TimeLine from './TimeLine';
class App extends React.Component {
  state = {
    records: [],
    chartData: [
             [
      { type: 'string', id: 'Name' },
      { type: 'date', id: 'Start' },
      { type: 'date', id: 'End' },
            ]
    ]
  }

  prepareData = ()=>{
    let chartIndex = 1;
      for(let i=0;i<this.state.records.length;i++){
        let [startDay,startMonth,startYear] = this.state.records[i].start.split('/');
        let [endDay,endMonth,endYear] = this.state.records[i].end.split('/');
        this.state.chartData[chartIndex] = [this.state.records[i].name,  new Date(`${startMonth}/${startDay}/${startYear}`), new Date(`${endMonth}/${endDay}/${endYear}`)];
        chartIndex++;
      }
      this.setState({chartData : this.state.chartData });
      console.log('data', this.state.chartData);
  }

  render(){
  return (
    <div className="container-fluid">
    <Record sendRecordsToParent = {(records)=> {
      this.setState({ records });
      this.prepareData();
        }
      }/>
    <TimeLine chartData = {this.state.chartData}/>
    </div>
  )
  }
}

export default App;
