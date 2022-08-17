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
                // label: '',
                data: [
                        stateObj["2005"],
                        stateObj["2008"],
                        stateObj["2011"],
                        stateObj["2015"],
                        stateObj["2018"],
                        stateObj["2020"],
                        ],

                backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        },
    });
}