var word = $( "#word-container" );
var margin = {top: 10, right: 20, bottom: 30, left: 20},
    width = word.width() - margin.left - margin.right,
    height = 120 - margin.top - margin.bottom;

d3.csv("public/assets/data.csv", function(error, data) {

    var categories = d3.keys(d3.nest().key(function(d) { return d.category; }).map(data));
    var color = d3.scale.ordinal().range(["#0C1575","#000000","#FF5714","#EC008C","#F0A546","#0043FF","#FF6138"]);
    var fontSize = d3.scale.pow().exponent(5).domain([0,1]).range([10,80]);

    var layout = d3.layout.cloud()
        .timeInterval(10)
        .size([width, height])
        .words(data)
        .rotate(function(d) { return 0; })
        .font('monospace')
        .fontSize(function(d,i) { return fontSize(Math.random()); })
        .text(function(d) { return d.password; })
        .spiral("archimedean")
        .on("end", draw)
        .start();

    var svg = d3.select('#word-container').append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var wordcloud = svg.append("g")
        .attr('class','wordcloud')
        .attr("transform", "translate(" + width/2 + "," + height/2 + ")");

    var x0 = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1)
        .domain(categories);

    var xAxis = d3.svg.axis()
        .scale(x0)
        .orient("bottom")
        .ticks(0)
        .outerTickSize(0)
        .tickPadding(01);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll('text')
        .style('font-size','16px')
        .style('fill',function(d) { return color(d); })
        .style('font','sans-serif');

    $("#content").css("visibility", "visible");

    function draw(words) {
        wordcloud.selectAll("text")
            .data(words)
            .enter().append("text")
            .attr('class','word')
            .style("font-size", function(d) { return d.size + "px"; })
            .style("font-family", function(d) { return d.font; })
            .style("fill", function(d) {
                var paringObject = data.filter(function(obj) { return obj.password === d.text});
                return color(paringObject[0].category);
            })
            .attr("text-anchor", "middle")
            .attr("transform", function(d) { return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"; })
            .text(function(d) { return d.text; });
    };

});