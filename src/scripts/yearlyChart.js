import { stratify } from "d3";
import * as d3 from 'd3'

export const yearlyBarChart = (stateObj,counter) => {

    let canvasElement = document.createElement("canvas");
    
    counter++
    let oldCanvas = document.getElementById(`${counter}`)
    if(oldCanvas){
        oldCanvas.remove()
    }
    canvasElement.setAttribute("id",`${counter}`)
    let chartHolder = document.getElementById("chart-holder")
    chartHolder.append(canvasElement)
    let ctx = canvasElement.getContext('2d');
    let labels = ['2005', '2008', '2011', '2015', '2018', '2020'];
    const data = {
        labels: labels,
        datasets: [{
            label: 'country GDP per years',
            data: [
                stateObj["2005"]/1000000000,
                stateObj["2008"]/1000000000,
                stateObj["2011"]/1000000000,
                stateObj["2015"]/1000000000,
                stateObj["2018"]/1000000000,
                stateObj["2020"]/1000000000,
                ],
            fill: true,
            backgroundColor: ['#ffee6f'],
            borderColor: ['blue'],
            borderWidth: 1,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }

    const font = {
        weight: 'bold',
        size: 15
        
    }

    const scales = {
        xAxis: {
            title: {
                text: 'YEAR',
                color: 'black',
                display: true,
                font: font
            },
            ticks: {
                // color: '#fff'
            }
        },
        yAxis: {
            title: {
                text: 'GDP (Billions)',
                display: true,
                color: 'black',
                font: font
            },
            ticks: {
                // color: '#fff'
            }
        }
        }
    const plugins = {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: `GDP of ${stateObj['Country Name']}`,
            color: 'black',
            font: font
        }
    }

    let myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            plugins: plugins,
            legend: {
                display: false,
            },
            scales: scales,
            // layout: layout
        }
    })
}