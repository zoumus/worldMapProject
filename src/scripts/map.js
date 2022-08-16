import * as d3 from "d3";
import * as topojson from "topojson";

const createMap = function (dataObject) {
  const width = 900;
  const height = 600;

  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "map");

  const projection = d3
    .geoMercator()
    .scale(120)
    .translate([width / 2, height / 1.4]);
  const path = d3.geoPath(projection);

  // const g = svg.append('g');
  console.log(svg);

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
      .attr("data-name", (ele) => ele.properties.name)
      .attr("fill", (obj) => {
        //   const gdpLevel = data.find(fn => +obj)
      });
  });
    let tooltip;

  d3.select(".map")
  
    .on("mouseover", function (e) {
      console.log("data object", dataObject);
      console.log(e.target.dataset.name);
      if (e.target.nodeName === "path") {
        // console.log(dataObject[e.target.dataset.name],"data set")
        // return tooltip.style("visibility", "visible")
        let countryName = e.target.dataset.name;
        let modal = document.getElementById("modal");
        let countryNameHolder = document.getElementById("country-name");
        let countryCodeHolder = document.getElementById("country-code");
        let countryYearHolder = document.getElementById("country-year");

        let yr = document.getElementById("year-slider").value;
        console.log(yr, "input");
        // for (let i = 2005; i <= 2020; i++) {
            // let year = `${i}`
        countryYearHolder.innerHTML = dataObject[countryName][yr];
        //   }
         tooltip = d3
            .select("#tooltip")
            .append("div")
            .style("position", "absolute")
            .style("visibility", "hidden")
            .style("top", "300px")
            .style("width", "300px")
            .style("z-index", 99)
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "1px")
            .style("border-radius", "5px")
            .style("padding", "10px")
            .html(`<ul><li>${dataObject[countryName]["Country Name"]} (${dataObject[countryName]["Country Code"]}]</li><li>${dataObject[countryName][yr]}</li></ul>`);

        modal.style.color = "transparent";

        // const test = dataObject[countryName]["Country Name"]

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
    .on("mouseout", function () {
      return tooltip.style("visibility", "hidden");
    });
    
 
};

// d3.select("#circleCustomTooltip")
// .on("mouseover", function(){return tooltip.style("visibility", "visible");})
// .on("mousemove", function(){return tooltip.style("top", (event.pageY-2390)+"px").style("left",(event.pageX-800)+"px");})
// .on("mouseout", function(){return tooltip.style("visibility", "hidden");});

export function renderSlider() {
  const slider = document.createElement("div");
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
  });

  slider.appendChild(sliderInput);
  slider.appendChild(sliderLabel);
  document.getElementsByClassName("title-years")[0].appendChild(slider);

  document.getElementById(
    "slider-current-year"
  ).style.left = `calc( 100% - 12.5px - ${
    document.getElementById("slider-current-year").offsetWidth / 2
  }px)`;
}

export default createMap;
