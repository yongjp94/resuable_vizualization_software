/**
 * Created by Christopher on 5/5/2016.
 */

$(function() {
    //Your code to make the chart goes here. 
    var data;
    
    var chart = TreeChart().height(900);
    //pull in the json file
    var div;
    d3.json('data.json', function(error, root) {
        if(error) throw error;

        //Call the TreeChart() function and alter any of the attributes

        //finally select the where you want the graphic and attach the data
        //to it and call the chart function
        div = d3.select("#my-Div").datum(root).call(chart);
    });
        
    
    $('#change-to-2').on('click', function() {
        d3.json('data2.json', function(error, root) {
            if(error) throw error;

            //finally select the where you want the graphic and attach the data
            //to it and call the chart function
            div = d3.select("#my-Div").datum(root).call(chart);
        });
    });
});
