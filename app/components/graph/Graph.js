import React, { useRef, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { data, labels } from "./data.js";

const Graph = () => {
	const graphData = {
		labels,
		datasets: [
			{
				label: "Revenue generated (in millions)",
				data,

				backgroundColor: "rgba(255, 1, 55, 0)",
				borderWidth: 2,
				borderColor: "#383838",
				lineTesion: 0.5,
				pointBackgroundColor: "#00ff00",
				pointBorderWidth: 0,
				// pointBorderColor: "#00ff00",
				// xAxisID: "Time in years",
				// yAxisID: "Revenue in millions",
				// maintainAspectRatio: false,
				responsive: true,
				maintainAspectRatio: true,
			},
		],
	};

	const options = {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
						stepSize: 5,
						// suggestedMin: 50,
						// suggestedMax: 50,
					},
				},
			],
		},
		title: {
			display: true,
			text: "Revenue generated",
			fontSize: 14,
			fontColor: "#343a40",
			fontFamily: "'Quicksand'",
		},
	};
	return (
		<div className="graph-container">
			<Line
				data={graphData}
				height={15}
				width={25}
				redraw={true}
				options={options}
			/>
		</div>
	);
};

export default Graph;
