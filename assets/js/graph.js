queue()
    .defer(d3.csv, "assets/data/storeSales.csv")
    .await(makeGraphs);

function makeGraphs(error, salesData) {
    var ndx = crossfilter(salesData);

    salesData.forEach(function(d) {
        d.sales = parseInt(d.Sales);

    
    show_sales_by_state(ndx);
    show_sales_by_manager(ndx)
    
    dc.renderAll();
    
    })

function show_sales_by_state(ndx){
    var dim = ndx.dimension(dc.pluck("State"));
    var group = dim.group();
    
    dc.barChart("#chart0")
    .width(400)
    .height(300)
    .margins({top: 10, right: 50, bottom: 30, left: 50})
    .dimension(dim)
    .group(group)
    .transitionDuration(500)
    .x(d3.scale.ordinal())
    .xUnits(dc.units.ordinal)
    .elasticY(true)
    .xAxisLabel("Sales")
    .yAxis().ticks(15);
    
}

function show_sales_by_manager(ndx){
    var dim = ndx.dimension(dc.pluck("Manager"));
    var group = dim.group();
    
    dc.barChart("#chart1")
    .width(400)
    .height(300)
    .margins({top: 10, right: 50, bottom: 30, left: 50})
    .dimension(dim)
    .group(group)
    .transitionDuration(500)
    .x(d3.scale.ordinal())
    .xUnits(dc.units.ordinal)
    .elasticY(true)
    .xAxisLabel("Sales")
    .yAxis().ticks(15);


}
}
