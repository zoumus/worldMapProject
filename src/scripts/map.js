import * as d3 from "d3";
import * as topojson from "topojson";

const createMap = function(){

    const width = 900;
    const height = 600;

    const svg = d3.select('body').append('svg').attr('width', width).attr('height', height);

    const projection = d3.geoMercator().scale(120)
        .translate([width / 2, height / 1.4]);
    const path = d3.geoPath(projection);

    const g = svg.append('g');
    console.log(svg)

    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
        .then(data => {

            const countries = topojson.feature(data, data.objects.countries);
            g.selectAll('path').data(countries.features).enter().append('path').attr('class', 'country').attr('d', path);

        });
}
// function renderSlider() {
//     const slider = document.createElement("div");
//     slider.setAttribute("id", "slider-container");

//     const sliderInput = document.createElement("input");
//     sliderInput.setAttribute("id", "year-slider");
//     sliderInput.setAttribute("type", "range");
//     sliderInput.setAttribute("min", "2005");
//     sliderInput.setAttribute("max", "2020");
//     sliderInput.setAttribute("value", "2018");
//     sliderInput.setAttribute("step", "1");

//     const sliderLabel = document.createElement("span");
//     sliderLabel.setAttribute("id", "slider-current-year");
//     sliderLabel.innerHTML = 2018;
    
//     slider.appendChild(sliderInput);
//     slider.appendChild(sliderLabel);
//     document.getElementsByClassName("us-map-container")[0].appendChild(slider);

//     document.getElementById("slider-current-year").style.left = `calc( 100% - 12.5px - ${document.getElementById("slider-current-year").offsetWidth / 2}px)`;
// }

export default createMap;
    