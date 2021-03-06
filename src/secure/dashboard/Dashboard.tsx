    import React, {Component} from "react";
    import Wrapper from "./components/Wrapper";
    import c3 from 'c3'
    import axios from "axios";


    class Dashboard extends Component {

        componentDidMount = async () => {
            let chart = c3.generate({
                bindto: '#chart',
                data: {
                    x: 'x',
                    columns: [
                        ['x'],
                        ['Sales'],
                    ],
                    types: {
                        Sales: 'bar'
                    }
                },
                axis: {
                    x: {
                        type: 'timeseries',
                        tick: {
                            format: '%Y-%m-%d'
                        }
                    }
                }
            });

            const response = await axios.get('chart')
            const records : {date: string, sum: number} []= response.data.data
            //console.log(records)

            chart.load({
                columns: [
                    ['x', ...records.map(r => r.date)],
                    ['Sales', ...records.map(s => s.sum)]
                ]
            })
        }

        render() {
            return (
                <Wrapper>

                   <h2>Daily Sales</h2>
                    <div id="chart"/>
                </Wrapper>
            )
        }
    }



    export default Dashboard;

