# Whole World GDP 
   Whole World GDP is a web application that displays a GDP by year for all countries. <a href="https://zoumus.github.io/worldMapProject/">Live Site</a>


## Technologies, Libraries, APIs:
   - javascript
   - D3.js
   - Chart.js
   - HTML5
   - CSS
   - Whole world geographic data obtained through https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json
   - Whole world GDP data obtained throught https://www.worldbank.org/en/about/annual-report/world-bank-group-downloads


## Features:
![](https://github.com/zoumus/worldMapProject/blob/main/images/ezgif.com-gif-maker.gif)

   - data visualization to render an interactive map by mouseover a country or a click
   - Interact with graphs, charts with a variety of :hover and :active events.
   - year slider animation where the user have access to switch the year
   - information pop up on click


### Detail Information Tooltip
The application includes a tooltip that follows the mouse pointer and will show detailed information when hovering over different countries. The code for the tooltip is as follows:

![](https://github.com/zoumus/worldMapProject/blob/main/images/Screen%20Shot%202022-10-12%20at%205.56.33%20PM.png)

The functionality of the tooltip is made up of three parts. The tooltip is created to initially have opacity of 0, or transparent.

The onmousemove event will be triggered whenever the mouse pointer moves and the tooltip's position will be set to match the pointer's position.
An event listener was added to track whether the mouse pointer hovers over a country on the World map. When it does, the tooltip's text will be changed according to the specific detail information and the opacity value will be set to 1.
A mouseout event lisenter is also added to clear the the tooltip's text and reset the opacity back to 0.

## Future Features:
   - add more data to show
   - Allows data comparasion between different countries
  
