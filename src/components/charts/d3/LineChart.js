import { useState, useRef, useEffect } from 'react'
import * as d3 from 'd3'

// D3 manipulates the DOM, so we need to useRef here in order to give D3 access to DOM element
const LineChart = ({ data = [] }) => {
    const svgRef = useRef()

    useEffect(() => {
        console.log(data)
        // setting up svg
        const w = 800;
        const h = 500;
        const svg = d3.select(svgRef.current)
            .attr('width', w)
            .attr('height', h)
            .style('background', '#d3d3d3')
            .style('margin-top', '50')
            .style('margin-left', '100')
            .style('overflow', 'visible')

        // setting the scaling
        const xScale = d3.scaleLinear()
            .domain([0, data.length - 1])
            .range([0, w])
        const yScale = d3.scaleLinear()
            .domain([0, h])
            .range([h, 0]) // this is inverted (cuz u start visually at the top-left)
        const generateScaledLine = d3.line()
            .x((d, i) => xScale(i))
            .y((d, i) => yScale(i))
            .curve(d3.curveCardinal)

        // setting the axes
        const xAxis = d3.axisBottom(xScale)
            .ticks(data.length)
            .tickFormat(i => data[i].x)
        const yAxis = d3.axisLeft(yScale)
            .ticks([0, 10])
        svg.append('g')
            .call(xAxis)
            .attr('transform', `translate(0, ${h})`)
        svg.append('g')
            .call(yAxis)

        // setting up the data for the svg
        svg.selectAll('.line')
            .data([data])
            .join('path')
                .attr('d', d => generateScaledLine(d))
                .attr('fill', 'none')
                .attr('stroke', 'black') 
    }, [data])

    return (
        <div>
            <svg ref={svgRef}></svg>
        </div>        
    )
}

export default LineChart
