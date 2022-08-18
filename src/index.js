import * as d3 from "d3";
import { csvFormatBody } from "d3";
import * as topojson from "topojson";
import createMap from "./scripts/map";
import {fetchData} from "./scripts/util/apiUtil";
import {renderSlider} from "./scripts/map"
import {yearlyBarChart} from "./scripts/yearlyChart"
// import {legend} from "./scripts/legend"




document.addEventListener("DOMContentLoaded", async function(){
    let data = await fetchData("./src/scripts/data.json");
    data = data

    renderSlider()
    
        const dataObject = data.reduce(
            (obj, item) => {
                let name = item["Country Name"]
                return Object.assign(obj, { [name]: item })
                
            }, {});
            
           
    createMap(dataObject,data);

    let sliderInput = document.getElementById("year-slider")
    sliderInput.addEventListener("change", (e) => {
        document.querySelector('svg').remove();
        createMap(dataObject, data,e.target.value)
      });


    yearlyBarChart(data);
    
    
})