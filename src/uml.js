// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   ArcElement,
//   Legend,
// } from 'chart.js';
// import { Line, Bar, Pie } from 'react-chartjs-2';

// ChartJS.register(
// 	CategoryScale,
// 	LinearScale,
// 	PointElement,
// 	LineElement,
// 	BarElement,
// 	ArcElement,
// 	Title,
// 	Tooltip,
// 	Legend
// );

// export class BaseChart{

// 	constructor(area,settings){
// 		this.area = area;
// 		this.settings = settings;
// 	}

// 	draw_chart(area,settings){
// 		new ChartJS(this.area, settings);
// 	}
	
// }

// export class ConfiguredChart extends BaseChart{

// 	constructor(lab,arr){
// 		super();
// 		this.settings = {};
// 		this.data = {};
// 		this.datasets = new Array();
// 		this.datasetsData = {};
// 		this.datasetsData1 = {};
// 		this.datasetsData2 = {};
// 		this.options = {};
// 		this.title={};
// 		this.tooltips={};
// 		this.scales={};
// 		this.xAxes = new Array();
// 		this.yAxes = new Array();
// 		this.xt={};
// 		this.yt={};
// 		this.ticks={};
// 		this.lab = lab;
// 		this.arr = arr;
// 		this.bg = ['#ba7e7e','#9CB909','#8672AF','#54bed8','#d4d854','#54d889','#FFFF00','#2BFF00','#D400FF','#FF4F4F','#4FFF8A','#00099C','#FF4500','#FFD700','#FF69B4','#00FFFF','#FF4500','#FFD700','#FF69B4','#00FFFF','#728FCE','#8FCF72','#CF728F'];	
// 	}

// 	getdata()
// 	{
// 	this.data.labels = this.lab;
// 	this.datasetsData.data = this.arr;
// 	this.datasetsData.label = "JSON Data";
// 	this.datasetsData.backgroundColor = ['#ba7e7e','#C2FFFF','#8672AF','#54bed8','#d4d854','#54d889','#FFFF00','#2BFF00','#D400FF','#FF4F4F','#4FFF8A','#9CB909','#00099C','#FF4500','#FFD700','#FF69B4','#00FFFF','#FF4500','#FFD700','#FF69B4','#00FFFF','#728FCE','#8FCF72','#CF728F'];
// 	this.datasets.push(this.datasetsData);
// 	this.data.datasets = this.datasets;
// 	this.settings.data = this.data;
// 	return this.settings.data;
// 	}

// 	getstackdata()
// 	{
// 	this.data.labels = this.lab;
// 	this.datasetsData.data = this.arr[0];
// 	this.datasetsData.label = "Male";
// 	this.datasetsData.backgroundColor = this.bg[0];
// 	this.datasets.push(this.datasetsData);

// 	this.data.labels = this.lab;
// 	this.datasetsData1.data = this.arr[1];
// 	this.datasetsData1.label = "Female";
// 	this.datasetsData1.backgroundColor = this.bg[1];
// 	this.datasets.push(this.datasetsData1);

// 	this.data.datasets = this.datasets;
// 	this.settings.data = this.data;
// 	return this.settings.data;
// 	}

// 	getlinedata()
// 	{

// 			this.data.labels = this.lab;
			
// 			this.datasetsData.label="JSON Selected Data";
//             this.datasetsData.fill= false;
//             this.datasetsData.lineTension= 0.1;
//             this.datasetsData.backgroundColor= "#000000";
//             this.datasetsData.borderColor= "#000000";
//             this.datasetsData.borderCapStyle= 'butt';
//             this.datasetsData.borderDash= [];
//             this.datasetsData.borderDashOffset= 0.0;
//             this.datasetsData.borderJoinStyle= 'miter';
//             this.datasetsData.pointBorderColor= "rgba(75,192,192,1)";
//             this.datasetsData.pointBackgroundColor= "#fff";
//             this.datasetsData.pointBorderWidth= 1;
//             this.datasetsData.pointHoverRadius= 5;
//             this.datasetsData.pointHoverBackgroundColor= "rgba(75,192,192,1)";
//             this.datasetsData.pointHoverBorderColor= "rgba(220,220,220,1)";
//             this.datasetsData.pointHoverBorderWidth= 2;
//             this.datasetsData.pointRadius= 1;
//             this.datasetsData.pointHitRadius= 10;
// 			this.datasetsData.data = this.arr;
//             this.datasetsData.spanGaps= false;
//             this.datasets.push(this.datasetsData);
//          	this.data.datasets = this.datasets;

//     this.settings.data = this.data;
// 	return this.settings.data;
// 	}

// 	getoptions()
// 	{
// 	this.options.responsive='false';
// 	this.options.maintainAspectRatio = 'true';
// 	this.options.responsiveAnimationDuration = 500;

// 	this.ticks.beginAtZero = 'true'
// 	this.yt.ticks = this.ticks;
// 	this.yAxes.push(this.yt);
// 	this.scales.yAxes=this.yAxes;
// 	this.options.scales = this.scales;
// 	this.settings.options = this.options;
// 	return this.settings.options;
// 	}

// 	getstackoptions()
// 	{
// 	this.title.display = 'true';
// 	this.options.title = this.title;
// 	this.options.responsive = 'true';
	
// 	this.tooltips.mode = 'index';
// 	this.tooltips.intersect = 'false';
// 	this.options.tooltips = this.tooltips;
	
// 	this.xt.stacked = 'true';
// 	this.xAxes.push(this.xt);
	
// 	this.ticks.beginAtZero = 'true'
// 	this.yt.ticks = this.ticks;
// 	this.yt.stacked = 'true';
// 	this.yAxes.push(this.yt);
	
// 	this.scales.xAxes=this.xAxes;
// 	this.scales.yAxes=this.yAxes;
// 	this.options.scales = this.scales;
// 	this.settings.options = this.options;
// 	return this.settings.options; }

// }

// export class pie_chart extends ConfiguredChart{

// 	constructor(lab,arr,area){
// 		super();
// 		this.lab = lab;
// 		this.arr = arr;
// 		this.area =area;
// 	}

// 	create_settings(){
// 		var config = new ConfiguredChart(this.lab,this.arr);
// 		config.type='pie';
// 		config.data=config.getdata();
// 		console.log(config.data);
// 		console.log(config.data.labels);
// 		console.log("1");
// 		console.log(config.datasetsData.data);
// 		super.draw_chart(this.area, config);
// 	}
	
// 	drawChart(){
// 	    var config = new ConfiguredChart(this.lab,this.arr);
// 		config.type='pie';
// 		config.data=config.getdata();
// 		console.log(config.data.labels);
// 		var First= new Array();
// 		var Second= new Array();
// 		First= Array.from(config.data.labels);
// 		Second=Array.from(config.datasetsData.data);	
// 		const data = {
// 			First,
// 			datasets: [{data:Second}]
// 		};	
// 		return (<Pie data={data}/>);
// 	}  
// }

// export class bar_chart extends ConfiguredChart{

// 	constructor(lab,arr,area){
// 		super();
// 		this.lab = lab;
// 		this.arr = arr;
// 		this.area =area;
// 	}

// 	create_settings (){
// 		var config = new ConfiguredChart(this.lab,this.arr);
// 		config.type='bar';
// 		config.data=config.getdata();
// 		config.options=config.getoptions();
// 		super.draw_chart(this.area, config);
// 	}
	
// 	drawChart(){
//     	var config = new ConfiguredChart(this.lab,this.arr);	
// 		config.type='bar';
// 		config.data=config.getdata();
// 		config.options=config.getoptions();
// 		console.log("bar");
// 		console.log(config.data.labels);
// 		console.log(config.options);
// 		var First= new Array();
// 		var Second= new Array();
// 		First= Array.from(config.data.labels);	
// 		Second=Array.from(config.datasetsData.data);		
// 		const data = {
// 			First,
// 			datasets: [{data:Second}]
// 		};		
// 		return (<Bar options={config.options} data={data} />);	
// 	}
// }
// export class line_chart extends ConfiguredChart{ 

	// constructor(lab,arr,area){
	// 	super();
	// 	this.lab = lab;
	// 	this.arr = arr;
	// 	this.area =area;
	// }

// 	create_settings (){
// 		var config = new ConfiguredChart(this.lab,this.arr);
// 		config.type='line';
// 		config.data=config.getlinedata();
// 		config.options=config.getoptions();
// 		super.draw_chart(this.area, config);
// 	}
	
// 	drawChart(){
//     	var config = new ConfiguredChart(this.lab,this.arr);
// 		config.type='line';
// 		config.data=config.getlinedata();
// 		config.options=config.getoptions();
// 		console.log(config.data.labels);
// 		var First= new Array();
// 		var Second= new Array();
// 		First= Array.from(config.data.labels);
// 		Second=Array.from(config.datasetsData.data);	
// 		const data = {
// 			First,
// 			datasets: [{data:Second}]
// 		};	
// 		return(
// 			<Line options={config.options} data={data} />
// 		);
// 	}	
// }

// export class stack_chart extends bar_chart{

// 	constructor(lab,arr,area){
// 		super();
// 		this.lab = lab;
// 		this.arr = arr;
// 		this.area =area;
// 	}

// 	create_settings (){
// 		var config = new ConfiguredChart(this.lab,this.arr);
// 		config.type='bar';
// 		config.data=config.getstackdata();
// 		config.options=config.getstackoptions();
// 		console.log("stack");
// 		console.log(config.data.labels);
// 		console.log(config.datasetsData.data[0]);
// 		console.log(config.datasetsData.data[1]);
// 		super.draw_chart(this.area, config);
// 	}
	
// 	drawChart(){
// 	    var config = new ConfiguredChart(this.lab,this.arr);
// 		config.type='bar';
// 		config.data=config.getstackdata();
// 		config.options=config.getstackoptions();
// 		console.log(config.data.labels);
// 		var First= new Array();
// 		var Second= new Array();
// 		var Third= new Array();
// 		First= Array.from(config.data.labels);
// 		Second=Array.from(config.datasetsData.data);
// 		Third=Array.from(config.datasetsData.data);
// 		const data = {
// 			First,
// 			datasets: [{data:Second}, {data:Third}]
// 		};		
// 		return (<Bar options={config.options} data={data} />);	
// 	}	
// }
//*********************************************************************************** */

// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// class BaseChart {
//   constructor(area, settings) {
//     this.area = area;
//     this.settings = settings;
//   }

//   drawChart(area, settings) {
    
//   const { data, options } = settings;

//   // Clear existing content
//   d3.select(area).html('');

//   // Set up chart dimensions
//   const width = 400;
//   const height = 200;

//   // Create SVG container
//   const svg = d3.select(area)
//     .append('svg')
//     .attr('width', width)
//     .attr('height', height);

//   // Implement your D3.js drawing logic here based on the chart type
//   // For example, if it's a bar chart:

//   const xScale = d3.scaleBand()
//     .domain(data.labels)
//     .range([0, width])
//     .padding(0.1);

//   const yScale = d3.scaleLinear()
//     .domain([0, d3.max(data.datasets[0].data)])
//     .range([height, 0]);

//   svg.selectAll('rect')
//     .data(data.datasets[0].data)
//     .enter()
//     .append('rect')
//     .attr('x', (d, i) => xScale(data.labels[i]))
//     .attr('y', d => yScale(d))
//     .attr('width', xScale.bandwidth())
//     .attr('height', d => height - yScale(d))
//     .attr('fill', 'steelblue');
//   }
// }

// class ConfiguredChart extends BaseChart {
//   constructor(lab, arr) {
//     super();
//     this.settings = {};
//     this.data = {};
//     this.datasets = [];
//     this.datasetsData = {};
//     this.datasetsData1 = {};
//     this.datasetsData2 = {};
//     this.options = {};
//     this.title = {};
//     this.tooltips = {};
//     this.scales = {};
//     this.xAxes = [];
//     this.yAxes = [];
//     this.xt = {};
//     this.yt = {};
//     this.ticks = {};
//     this.lab = lab;
//     this.arr = arr;
//     this.bg = ['#ba7e7e', '#9CB909', '#8672AF', '#54bed8', '#d4d854', '#54d889', '#FFFF00', '#2BFF00', '#D400FF', '#FF4F4F', '#4FFF8A', '#00099C', '#FF4500', '#FFD700', '#FF69B4', '#00FFFF', '#FF4500', '#FFD700', '#FF69B4', '#00FFFF', '#728FCE', '#8FCF72', '#CF728F'];
//   }

//   getData() {
//     // Implement logic to get data using D3.js
//   }

//   getStackData() {
//     // Implement logic to get stacked data using D3.js
//   }

//   getLineData() {
//     // Implement logic to get line data using D3.js
//   }

//   getOptions() {
//     // Implement logic to get chart options using D3.js
//   }

//   getStackOptions() {
//     // Implement logic to get stacked chart options using D3.js
//   }
// }

// class PieChart extends ConfiguredChart {
//   constructor(lab, arr, area) {
//     super();
//     this.lab = lab;
//     this.arr = arr;
//     this.area = area;
//   }

//   createSettings() {
//     // Implement logic to create settings for pie chart using D3.js
//   }

//   drawChart() {
//     // Implement logic to draw pie chart using D3.js
//   }
// }

// class BarChart extends ConfiguredChart {
//   constructor(lab, arr, area) {
//     super();
//     this.lab = lab;
//     this.arr = arr;
//     this.area = area;
//   }

//   createSettings() {
//     // Implement logic to create settings for bar chart using D3.js
//   }

//   drawChart() {
//     // Implement logic to draw bar chart using D3.js
//   }
// }

// class LineChart extends ConfiguredChart {
//   constructor(lab, arr, area) {
//     super();
//     this.lab = lab;
//     this.arr = arr;
//     this.area = area;
//   }

//   createSettings() {
//     // Implement logic to create settings for line chart using D3.js
//   }

//   drawChart() {
//     // Implement logic to draw line chart using D3.js
//   }
// }

// class StackChart extends BarChart {
//   constructor(lab, arr, area) {
//     super();
//     this.lab = lab;
//     this.arr = arr;
//     this.area = area;
//   }

//   createSettings() {
//     // Implement logic to create settings for stacked chart using D3.js
//   }

//   drawChart() {
//     // Implement logic to draw stacked chart using D3.js
//   }
// }
//********************************************************************************************************************************** */

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// BarChart
class BarChart{

	

 BarChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    drawChart();
  }, [data]);

  const drawChart = () => {
    const svg = d3.select(chartRef.current);

    // Clear existing content
    svg.selectAll('*').remove();

    // Set up chart dimensions
    const width = 400;
    const height = 200;

    // Create scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, width])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([height, 0]);

    // Draw bars
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => xScale(d.label))
      .attr('y', (d) => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => height - yScale(d.value))
      .attr('fill', 'steelblue');
  };

  return <svg ref={chartRef} width={400} height={200} />;
};
}

// PieChart
class PieChart{ 
 PieChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    drawChart();
  }, [data]);

  const drawChart = () => {
    const svg = d3.select(chartRef.current);

    // Clear existing content
    svg.selectAll('*').remove();

    // Set up chart dimensions
    const width = 400;
    const height = 200;
    const radius = Math.min(width, height) / 2;

    // Create pie chart
    const pie = d3.pie().value((d) => d.value);
    const arcs = pie(data);

    // Create arc generator
    const arc = d3.arc().outerRadius(radius).innerRadius(0);

    // Draw pie chart
    svg.selectAll('path')
      .data(arcs)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => d3.schemeCategory10[i]);
  };

  return <svg ref={chartRef} width={400} height={200} />;
};
}
// LineChart
class LineChart {
 LineChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    drawChart();
  }, [data]);

  const drawChart = () => {
    const svg = d3.select(chartRef.current);

    // Clear existing content
    svg.selectAll('*').remove();

    // Set up chart dimensions
    const width = 400;
    const height = 200;

    // Create scales
    const xScale = d3
      .scalePoint()
      .domain(data.map((d) => d.label))
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([height, 0]);

    // Create line generator
    const line = d3.line().x((d) => xScale(d.label)).y((d) => yScale(d.value));

    // Draw line chart
    svg.append('path')
      .datum(data)
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue');
  };

  return <svg ref={chartRef} width={400} height={200} />;
};
}
// StackChart (using stacked bars)
class StackChart {
 StackChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    drawChart();
  }, [data]);

  const drawChart = () => {
    const svg = d3.select(chartRef.current);

    // Clear existing content
    svg.selectAll('*').remove();

    // Set up chart dimensions
    const width = 400;
    const height = 200;

    // Stack the data
    const stackedData = d3.stack().keys(data.columns)(data);

    // Create scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, width])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(stackedData[stackedData.length - 1], (d) => d[1])])
      .range([height, 0]);

    // Create color scale
    const color = d3.scaleOrdinal().range(d3.schemeCategory10);

    // Draw stacked bars
    svg.selectAll('g')
      .data(stackedData)
      .enter()
      .append('g')
      .attr('fill', (d) => color(d.key))
      .selectAll('rect')
      .data((d) => d)
      .enter()
      .append('rect')
      .attr('x', (d) => xScale(d.data.label))
      .attr('y', (d) => yScale(d[1]))
      .attr('height', (d) => yScale(d[0]) - yScale(d[1]))
      .attr('width', xScale.bandwidth());
  };

  return <svg ref={chartRef} width={400} height={200} />;
};
}
export { BarChart, PieChart, LineChart, StackChart };
