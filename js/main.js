/**
 * Created by Christopher on 5/5/2016.
 */

$(function() {
    
    var width = 960,
        height = 2200;

    var cluster = d3.layout.cluster()
        .size([height, width - 160]);

    var diagonal = d3.svg.diagonal()
        .projection(function(d) {
            console.log([d.y, d.x]);
            return [d.y, d.x]; });

    var svg = d3.select("#my-Div").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(40,0)");

    d3.json("data.json", function(error, root) {
        if (error) throw error;

        console.log(root);

        var nodes = cluster.nodes(root);
        var links = cluster.links(nodes);

        console.log(root);

        var link = svg.selectAll(".link")
            .data(links)
            .enter().append("path")
            .attr("class", "link")
            .attr("d", diagonal);

        var node = svg.selectAll(".node")
            .data(nodes)
            .enter().append("g")
            .attr("class", "node")
            .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })

        node.append("circle")
            .attr("r", 4.5);

        node.append("text")
            .attr("dx", function(d) { return d.children ? -8 : 8; })
            .attr("dy", 3)
            .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
            .text(function(d) { return d.name; });

        console.log(root);

    });

    d3.select(self.frameElement).style("height", height + "px");

   d3.json("data.json", function(error, root) {
        if(error) throw error;

       var chart = TreeChart().height(2200);

       var cluster = d3.layout.cluster()
           .size([chart.height(), chart.width() - 160]);

       var diagonal = d3.svg.diagonal()
           .projection(function(d) {
               console.log([d.y, d.x]);
               return [d.y, d.x]; });
       console.log(root);



        var div = d3.select("#my-Div").datum(root).call(chart);

        console.log(chart.height());
    }); 


})
