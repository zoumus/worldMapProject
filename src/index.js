import * as d3 from "d3";
import { csvFormatBody } from "d3";
import * as topojson from "topojson";
import createMap from "./scripts/map";
import {fetchData} from "./scripts/util/apiUtil";
import {renderSlider} from "./scripts/map"


document.addEventListener("DOMContentLoaded", async function(){
    let data = await fetchData("../src/scripts/data.json");
    data = data
    console.log(data)
    renderSlider()
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
            
            // console.log(Object.keys(dataObject))
    //   console.log(dataObject)


    const show  =[];
    createMap(dataObject);
    // let map = document.querySelector('.map').addEventListener('mouseover', e => {
    //     console.log(e.target.dataset.name);
    //     console.log(e.target.dataset, "data when clicked")
    //     // console.log(data, "static data")

    //     let countryName = e.target.dataset.name;
    //     let modal = document.getElementById("modal");
    //     let countryNameHolder = document.getElementById('country-name')
    //     let countryCodeHolder = document.getElementById('country-code')
    //     let countryYearHolder = document.getElementById('country-year')

    //     modal.style.color = 'white'
    //     countryNameHolder.innerHTML = dataObject[countryName]['Country Name']
    //     countryCodeHolder.innerHTML = dataObject[countryName]['Country Code']
    //     // countryCodeHolder.innerHTML = dataObject[countryName]['Country year']

    //     let yr = document.getElementById("year-slider").value
    //     console.log(yr, "input")
        
    //     for (let i = 2005; i <= 2020; i ++) {
    //         // let year = `${i}`
    //         countryYearHolder.innerHTML = dataObject[countryName][yr]
    //     }


        // body.appendChild(modal)
    // })
    // console.log(map);
    
})