import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


const data = [
      {name: '2012', Investments: 2},
      {name: '2013', Investments: 7},
      {name: '2014', Investments: 12},
      {name: '2015', Investments: 11},
      {name: '2016', Investments: 11},
      {name: '2017', Investments: 3},

];
const SimpleBarChart = React.createClass({
  render () {
    return (
      <BarChart width={500} height={250} data={data}
            >
       <XAxis dataKey="name" />
       <YAxis dataKey="Investments"/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="Investments" fill="#83a6ed" />
      </BarChart>
    );
  }
})

export default SimpleBarChart;