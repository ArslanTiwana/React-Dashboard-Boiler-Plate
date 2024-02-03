import React, { Component } from 'react'
import Chart from "react-apexcharts";

export class StackedColumn extends Component {
	state = {
		series: [{
			name: 'Pending',
			data: [44, 55, 41, 67, 22, 43]
		}, {
			name: 'Processing',
			data: [13, 23, 20, 8, 13, 27]
		}, {
			name: 'Completed',
			data: [11, 17, 15, 15, 21, 14]
		}],
		options: {
			chart: {
				stacked: true,
				toolbar: {
					show: true
				},
				zoom: {
					enabled: true
				}
			},
			colors: ['#3e82f7', '#04d182', '#ff6b72'],
			responsive: [{
				breakpoint: 480,
				options: {
					legend: {
						position: 'bottom',
						offsetX: -10,
						offsetY: 0
					}
				}
			}],
			plotOptions: {
				bar: {
					horizontal: false,
				},
			},
			xaxis: {
				type: 'string',
				categories: ['Plates', 'Panaflex', 'Wedding Card', 'Film',
					'Color Print', 'Offset'
				],
			},
			legend: {
				position: 'right',
				offsetY: 40
			},
			fill: {
				opacity: 1
			}
		}
	};

	render() {
		return (
			<Chart
				options={this.state.options}
				series={this.state.series}
				type="bar"
				height= {300}
			/>
		)
	}
}

export default StackedColumn
