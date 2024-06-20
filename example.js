//U68997808
//Step 1: Setup
function main() {
    var barData = [100, 420, 230, 850, 560, 925]
    var width = 500;
    var barHeight = 20;
    var margin = 1;

//Steph 2: Scaling
    var scale = d3.scaleLinear()
                    .domain([d3.min(barData), d3.max(barData)])

}