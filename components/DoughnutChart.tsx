'use client';

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
	Chart as chartJs,
	ArcElement,
	Legend,
	Tooltip,
	plugins,
} from 'chart.js';

chartJs.register(ArcElement, Legend, Tooltip);

function DoughnutChart({ accounts }: DoughnutChartProps) {
	const data = {
		datasets: [
			{
				label: 'Banks',
				data: [2500, 8646, 5553],
				backgroundColor: ['#074765', '#8745ed', '#8755bb'],
			},
		],
		labels: ['Bank 1', 'Bank 2', 'Bank 3'],
	};

	return (
		<Doughnut
			data={data}
			options={{
				cutout: '60%',
				plugins: {
					legend: {
						display: false,
					},
				},
			}}
		/>
	);
}

export default DoughnutChart;
