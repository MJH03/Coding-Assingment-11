//U68997808
//Step 1: Setup
function main() {
    var barData = [100, 420, 230, 850, 560, 925]
    var width = 500;
    var barHeight = 20;
    var margin = 1;

//Step 2: Scaling
    var scale = d3.scaleLinear()
                    .domain([d3.min(barData), d3.max(barData)])
                    .range([50, 500])

//Step 3: Bars Rendering

    var svg = d3.select('body').append('svg')
                        .attr('width', width)
                        .attr('height', barHeight * barData.length);
    
    var group = svg.selectAll('g')
                .data(barData)
                .enter()
                .append('g')
                .attr('transform', function(d,i){
                        return 'translate(0,' + i * barHeight + ')';
                });
    group.append('rect')
            .attr('width', function(d){
                    return scale(d);
            })
            .attr('height', barHeight - margin)
    
}