/**
 * Created by Christopher on 5/5/2016.
 */

var TreeChart = function() {

    var colorNode, colorLink, brushSize, height, width;

    colorNode = "#fff";
    colorLink = "#ccc";
    brushSize = "1.5";
    height = 2200;
    width = 960;

    var chart = function(selection) {

        selection.each(function(root) {

            console.log(root);
            var div = d3.select(this);

            var cluster = d3.layout.cluster()
                .size(height, width - 160);


            var diagonal = d3.svg.diagonal()
                .projection(function(d) {
                    console.log([d.y, d.x]);
                    return [d.y, d.x]; });
            
            var svg = div.append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(40,0)");
            
            var nodes = cluster.nodes(root);
            var links = cluster.links(nodes);

            var link = svg.selectAll(".link")
                .data(links)
                .enter().append("path")
                .attr("class", "link")
                .style("fill", colorLink)
                .style('stroke-width', brushSize)
                .attr("d", diagonal);
            

            var node = svg.selectAll(".node")
                .data(nodes)
                .enter().append("g")
                .attr("class", "node")
                .style('fill', colorNode)
                .style('stroke-width', brushSize)
                .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

            node.append("circle")
                .attr("r", 4.5);

            node.append("text")
                .attr("dx", function(d) { return d.children ? -8 : 8; })
                .attr("dy", 3)
                .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
                .text(function(d) { return d.name; });

            d3.select(self.frameElement).style("height", height + "px");

            console.log(root);

        })
    };

    chart.height = function(value) {
        if(!arguments.length) return height;
        height = value;
        return this;
    };

    chart.width = function(value) {
        if(!arguments.length) return width;
        width = value;
        return this;
    };

    chart.nodeColor = function(value) {
      if(!arguments.length) return colorNode;
        colorNode = value;
        return this;
    };

    chart.linkColor = function(value) {
        if(!arguments.length) return colorLink;
        colorLink = value;
        return this;
    };

    chart.brushSize = function(value) {
        if(!arguments.length) return brushSize;
        brushSize = value;
        return this;
    };
    
    return chart;
};
