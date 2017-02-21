import React from 'react';
import {RadialBarChart, RadialBar, Legend, Tooltip} from 'recharts';


const data = [
      {name: 'Seed', companies: 11, fill: '#8884d8'},
      {name: 'Series A', companies: 13, fill: '#83a6ed'},
      {name: 'Seris B', companies: 12, fill: '#8dd1e1'},
      {name: 'Series C', companies: 3, fill: '#82ca9d'},
      {name: 'Series D', companies: 1, fill: '#a4de6c'},
      {name: 'Series E', companies: 1, fill: '#d0ed57'},
      {name: 'Other: Venture, Debt, PE, C-Note', companies: 2, fill: '#ffc658'}
    ];



const SimpleRadialBarChart = React.createClass({
  render () {
    return (
      <RadialBarChart width={600} height={300} cx={275} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data}>
        <RadialBar minAngle={15} label background clockWise={true} dataKey='companies'/>
        <Legend iconSize={10} width={500} verticalAlign='bottom' wrapperStyle={{bottom: '70px', left: '35px'}}/>
        <Tooltip/>
        </RadialBarChart>
    );
  }
})

export default SimpleRadialBarChart;

