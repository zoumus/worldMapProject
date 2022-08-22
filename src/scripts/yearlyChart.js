import { stratify } from "d3";

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

    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2005', '2008', '2011', '2015', '2018', '2020'],
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

                backgroundColor: ['rgb(106, 226, 106)'],
                borderColor: ['blue'],
                borderWidth: 1
            }]
        },
    });
}