export function legend(){
    var svg = d3.select('.map');
    svg.append('circle').attr('cx', 550).attr('cy', 550).attr('r', 10).style('fill', '#f5ebeb')
    svg.append('circle').attr('cx', 550).attr('cy', 580).attr('r', 10).style('fill', '#3ab1c8')
    svg.append('circle').attr('cx', 550).attr('cy', 580).attr('r', 10).style('fill', '#2772db')
    svg.append('circle').attr('cx', 550).attr('cy', 580).attr('r', 10).style('fill', '#3ab1c8')


    svg.append('text').attr('x', 570).attr('y', 553).text('z').style('font-size', '15px').attr('alignment-baseline', 'middle')
    svg.append('text').attr('x', 570).attr('y', 583).text('u').style('font-size', '15px').attr('alignment-baseline', 'middle')
    svg.append('text').attr('x', 570).attr('y', 583).text('z').style('font-size', '15px').attr('alignment-baseline', 'middle')
    svg.append('text').attr('x', 570).attr('y', 583).text('u').style('font-size', '15px').attr('alignment-baseline', 'middle')

}