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
                label: 'gdp of each country',
                data: [
                        stateObj["2005"]/1000000000,
                        stateObj["2008"]/1000000000,
                        stateObj["2011"]/1000000000,
                        stateObj["2015"]/1000000000,
                        stateObj["2018"]/1000000000,
                        stateObj["2020"]/1000000000,
                        ],

                backgroundColor: ['blue'],
                borderColor: ['rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            label: {
                display: false
            }
        }
    });
}