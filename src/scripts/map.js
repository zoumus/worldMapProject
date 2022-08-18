import * as d3 from "d3";
import * as topojson from "topojson";
import { yearlyBarChart } from "./yearlyChart";
import {legend} from "../scripts/legend"


export const createMap = function (dataObject,dataArray, year=2005) {
  const width = 900;
  const height = 600;

  const svg = d3
    .select(".top-one")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "map");

  const projection = d3
    .geoMercator()
    .scale(120)
    .translate([width / 2, height / 1.4]);
  const path = d3.geoPath(projection);

  d3.json(
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
  ).then((data) => {
    const countries = topojson.feature(data, data.objects.countries);
    svg
      .selectAll("path")
      .data(countries.features)
      .enter()
      .append("path")
      .attr("class", "country")
      .attr("d", path)
      .attr("data-id", el => el.id)
      .attr("data-name", (ele) => ele.properties.name)
      .attr("fill", (obj) => {
           const countryObj = dataArray.find(fn => obj["properties"]["name"] === fn["Country Name"]) || {}
           let yr = document.getElementById("year-slider").value;
           let gdpLevel = countryObj[yr]
           let gdp = gdpLevel/1000000000

            if(!gdp) return 'white'

            if (gdp >= 0 &&  gdp < 500) {
               return '#f5ebeb'
            } else if(gdp >= 500 && gdp < 1000) {
               return '#3ab1c8'
            } else if(gdp >= 1000 && gdp < 1500) {
               return '#2772db'
            } else {
               return "#070f4e"
            }

      });
      // legend();
  });
  

    let tooltip;
    d3.select(".map")

      .on('click', (e) => {
        let countryName = e.target.dataset.name;
        yearlyBarChart(dataObject[countryName],0)
      })
  
        .on("mouseover", function (e) {

        
        if (e.target.nodeName === "path") {
            let countryName = e.target.dataset.name;
            let modal = document.getElementById("modal");
            let countryNameHolder = document.getElementById("country-name");
            let countryCodeHolder = document.getElementById("country-code");
            let countryYearHolder = document.getElementById("country-year");
            // let canvas = document.getElementById("canvas");
            // canvas.remove()
            // yearlyBarChart(dataObject[countryName],0)
            
            let yr = document.getElementById("year-slider").value;

            countryYearHolder.innerHTML = dataObject[countryName][year];
            tooltip = d3
                .select("#tooltip")
                .append("div")
                .style("position", "absolute")
                .style("visibility", "hidden")
                .style("top", "300px")
                .style("width", "300px")
                .style("z-index", 2)
                .style("background-color", "white")
                .style("border", "solid")
                .style("border-width", "1px")
                .style("border-radius", "5px")
                .style("padding", "10px")
                .html(`<ul><li>${dataObject[countryName]["Country Name"]} (${dataObject[countryName]["Country Code"]}]</li><li>${dataObject[countryName][yr]}</li></ul>`);

            modal.style.color = "transparent";

            countryNameHolder.innerHTML =
            dataObject[countryName]["Country Name"];
            countryCodeHolder.innerHTML =
            dataObject[countryName]["Country Code"];
            // countryCodeHolder.innerHTML = dataObject[countryName]['Country year']
            return tooltip.style("visibility", "visible");
        } else {
            return null;
        }
        })

        .on("mousemove", function () {
        return tooltip
            .style("top", event.pageY - 100 + "px")
            .style("left", event.pageX - 30 + "px");
        })
        // .on("click", function(e) {

        // })
        
        .on("mouseout", function () {
        return tooltip.style("visibility", "hidden");
        });
    
 
};

export function renderSlider() {
  const slider = document.querySelector("#sliderLabel");
  slider.setAttribute("id", "slider-container");

  const sliderInput = document.createElement("input");
  sliderInput.setAttribute("id", "year-slider");
  sliderInput.setAttribute("type", "range");
  sliderInput.setAttribute("min", "2005");
  sliderInput.setAttribute("max", "2020");
  // sliderInput.setAttribute("value", "2020");

  sliderInput.setAttribute("step", "1");

  const sliderLabel = document.createElement("span");
  sliderLabel.setAttribute("id", "slider-current-year");

  sliderInput.addEventListener("change", (e) => {
    sliderLabel.innerHTML = e.target.value;
    // createMap(dataObject, dataArray,e.target.value)
  });

  slider.appendChild(sliderInput);
  slider.appendChild(sliderLabel);
  // document.getElementsByClassName("title-years")[0].appendChild(slider);

  document.getElementById(
    "slider-current-year"
  )
  .style.left = '500px';

  document.getElementById(
    "slider-current-year"
  )
  .style.top = '775px'

  // `calc( 100% - 12.5px - ${
  //   document.getElementById("slider-current-year").offsetWidth / 2
  // }px)`;
}
export default createMap;
