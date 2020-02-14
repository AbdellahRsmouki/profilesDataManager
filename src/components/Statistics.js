import React, { Component } from 'react'
import Title from './Title';
import Chart from './Chart';
import axios from '../axios';

export default class Statistics extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            chartData:{}
        }
        // this.getChartData = this.getChartData.bind(this);   
    }

    componentWillMount(){
        this.getChartData();
    }

    // GETDATA
    getData(){
      axios
          .get(`/statistics/`, {})
          .then(res => {
              const data = res.data
              console.log("getted statistics from the api: "+ JSON.stringify(data))
              this.setState({profiles:data});

          })
          .catch((error) => {
              console.log(error)
          })
  }

    getChartData(){
        // Ajax calls here
        this.setState({
          chartData:{
            labels: ['Casablanca', 'Paris', 'Rabat', 'Temara'],
            datasets:[
              {
                label:'ENSIAS Laureats',
                data:[
                  853,
                  234,
                  588,
                  23
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)'
                ]
              }
            ]
          }
        });
    }
    render() {
        return (
            <section className="services center-statistics">
                <Title title="Statistiques"/>
                <div className="chart">
                <Chart chartData={this.state.chartData} legendPosition="bottom"/>
                </div>  
            </section>
        )
    }
}
