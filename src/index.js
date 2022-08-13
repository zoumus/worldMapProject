import * as d3 from "d3";
import * as topojson from "topojson";
import createMap from "./scripts/map";
import {fetchData} from "./scripts/util/apiUtil";

document.addEventListener("DOMContentLoaded", async function(){
    let data = await fetchData("../src/scripts/data.json");
    // data = data.map(object => {
    //     let countryName = object["Country Name"];
    //     return {[countryName]: object}
    // })
    console.log(data)
    
    // data.forEach (object => {
    //     console.log(`GDP in 2010: ${object['2010']}`,`Country Name: ${object['Country Name']}`)
    // })


    createMap();
})