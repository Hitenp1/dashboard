import React, { Component } from 'react';
import Dashboard from 'react-dazzle';

// Widgets
import BarChart from './barchart';
import Radial from './radial';
import ForceGraph from './forcegraph';
import Pie from './piechart';

//Styles
//Using bootstrap as the UI library
import 'bootstrap/dist/css/bootstrap.css';
// Default styles.
//import 'react-dazzle/lib/style/style.css';
//Custom Styles
import './App.css';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      widgets: {
        ChartWidget: {
          type: BarChart,
          title: 'Investments/Year',
        },
        RadialWidget: {
          type: Radial,
          title: 'Funding Rounds',
        },
        PieWidget: {
          type: Pie,
          title: 'Company Composition',
        },
        GraphWidget: {
          type: ForceGraph,
          title: 'Portfolio Web',
        },
      },
      layout: {
        rows: [{
          columns: [{
            className: 'col-lg-6',
            widgets: [{key: 'GraphWidget'}],
          },{
            className: 'col-lg-6',
            widgets: [{key: 'PieWidget'}]
          }],
        },{
          columns: [
          {
            className: 'col-lg-6',
            widgets: [{key: 'RadialWidget'}]
          },
          {
            className: 'col-lg-6',
            widgets: [{key: 'ChartWidget'}]
          }],
        }],
      }
    };
  }

  render() {
    return <Dashboard  widgets={this.state.widgets} layout={this.state.layout}  />
  }
}


export default App;


