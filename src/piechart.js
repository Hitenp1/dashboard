import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend }  from 'recharts';


const data01 = [
      {name: 'Analytics', value: 3, fill: '#83a6ed'},
      {name: 'Food', value: 2, fill: '#8884d8'},
      {name: 'Entertainment', value: 3, fill: '#8dd1e1'},
      {name: 'FinTech', value: 2, fill: '#82ca9d'},
      {name: 'EduTech', value: 3, fill: '#a4de6c'},
      {name: 'Health Care', value: 1, fill: '#d0ed57'},
      {name: 'Robotics', value: 3,fill: '#ffc658'},
      {name: 'Machine Learning', value: 3, fill: '#fff158'},
      {name: 'Messaging', value: 3, fill: '#ff9e58'},
      {name: 'Internet', value: 1, fill: '#f65a58'},
      {name: 'Science', value: 3, fill: '#ea6383'},
      {name: 'Security', value: 3, fill: '#de6ca3'},
    ];

const style = {
    top: 3,
    left: 400,
    lineHeight: '24px'
  };

const GraphPie = React.createClass({
  render () {
    return (
      <PieChart width={480} height={300} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data01}
          label
          cx={180}
          cy={150}
        />
         <Tooltip/>
         <Legend iconSize={10} width={200} height={120} layout='vertical' verticalAlign='middle' wrapperStyle={style}
         />
      </PieChart>
    );
  }
})

export default GraphPie;

