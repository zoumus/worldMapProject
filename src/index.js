import * as d3 from "d3";
import { csvFormatBody } from "d3";
import * as topojson from "topojson";
import createMap from "./scripts/map";
import {fetchData} from "./scripts/util/apiUtil";
import {renderSlider} from "./scripts/map.js"

document.addEventListener("DOMContentLoaded", async function(){
    let data = await fetchData("../src/scripts/data.json");
    data = data
    // .map(object => {
    //     let countryName = object["Country Name"];
    //     return {[countryName]: object}
    // })
    //console.log(Object.keys(data[0])[0] === 'Aruba')
    //console.log(data[0]["Country Name"])
    // console.log(data[0])
    
    // data.forEach (object => {
    //     console.log(`GDP in 2010: ${object['2010']}`,`Country Name: ${object['Country Name']}`)
    // })
    const dataObject = data.reduce(
        (obj, item) => {
            let name = item["Country Name"]
           return Object.assign(obj, { [name]: item })
        
        }, {});
      
      console.log(dataObject)

    const show  =[];
    createMap();
    let map = document.querySelector('.map').addEventListener('click', e => {
        console.log(e.target.dataset.name);
        console.log(e.target.dataset, "data when clicked")
        // console.log(data, "static data")

        let countryName = e.target.dataset.name;
        let modal = document.getElementById("modal");
        let countryNameHolder = document.getElementById('country-name')
        let countryCodeHolder = document.getElementById('country-code')
        let countryYearHolder = document.getElementById('country-year')

        modal.style.color = 'white'
        countryNameHolder.innerHTML = dataObject[countryName]['Country Name']
        countryCodeHolder.innerHTML = dataObject[countryName]['Country Code']

        // body.appendChild(modal)
    })
    // console.log(map);
    renderSlider()
})