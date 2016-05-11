/**
 * Created by Christopher on 5/5/2016.
 */

$(function() {


   d3.json("data.json", function(error, root) {
       if(error) throw error;

       var chart = TreeChart().height(2200);

       chart.nodeColor("blue");
       chart.linkColor("red");
       var div = d3.select("#my-Div").datum(root).call(chart);


    });


});
