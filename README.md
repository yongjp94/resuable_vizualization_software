# resuable_vizualization_software

## This API allows a user to create a dendrogram chart.

The user will pass in a .json file that has different objects that point
to different children.

````json
{ "name" : "flare",
  "children" : [
    {"name" : "analytics"},
    {"name" : "function"}]
}
````
This format is needed in order for the program to read in the nodes in
the proper parent/child level.

To initialize the chart you must do the following:

````javascript
//pull in the json file
 d3.json("data.json", function(error, root) {
        if(error) throw error;

 //Call the TreeChart() function and alter any of the attributes
 var chart = TreeChart().height(2200);

 //finally select the where you want the graphic and attach the data
 //to it and call the chart function
 var div = d3.select("#my-Div").datum(root).call(chart);
 });
````
All of this will allow you to create a deondrogram chart with the
preset attributes.  In order to change or see what the attributes are
all you need to do is call any of their functions.  They are as follows:

````javascript
chart.height() //sets or returns the height of the svg

chart.width() //sets or returns the width of the svg

chart.nodeColor() //sets or returns the color for each node

chart.linkColor() //sets or returns the color for the paths from node to node

chart.brushSize() //returns or sets the brush size for the nodes and paths

````