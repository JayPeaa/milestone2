queue()
    .defer(d3.csv, "assets/data/storeSales.csv")
    .await(makeGraphs);



function makeGraphs(error, salesData) {
    var ndx = crossfilter(salesData);
    var all = ndx.groupAll();

    var financialYearChart = dc.barChart("#chart0");
    var consolidatedMonthlySales = dc.lineChart("#chart6");
    var compositeChart = dc.compositeChart("#chart4");
    var chainPieChart = dc.pieChart("#chart3");
    var salesByCategory = dc.barChart("#chart5");
    var salesByManager = dc.barChart("#chart2");
    var salesByCountry = dc.barChart("#chart1");
    //var recordCount = dc.dataCount(".dc-data-count");
    //var recordTable = dc.dataTable(".dc-data-table");

    show_sales_by_state(ndx);
    show_sales_by_manager(ndx);
    show_sales_by_category(ndx);
    show_sales_by_chain(ndx);
    show_sales_by_chain_line(ndx);
    show_sales_by_month(ndx);
    show_consolidated_sales_line(ndx);

    salesData.forEach(function(d) {
        d.sales = parseInt(d.Sales)

    })


    dc.renderAll();
    $('#preloader').fadeOut('slow');
    $('.chart-title').fadeIn('slow');
    

    function show_sales_by_state(ndx) {
        var dim = ndx.dimension(dc.pluck("Region"));
        var group = dim.group().reduceSum(dc.pluck('Sales'));

        let barColors = d3.scale.ordinal().range(["#EA3500", "#FEC928", "#8CE888", "#093F9B", "#282828"])


        salesByCountry
            .width(360)
            .height(300)
            .colorAccessor(function(d) {
                return d.key
            })
            .colors(barColors)
            .margins({ top: 10, right: 50, bottom: 40, left: 65 })
            .dimension(dim)
            .group(group)
            .transitionDuration(500)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("Country")
            .yAxisLabel("Sales in £'s")
            .yAxis().ticks(10);




    }

    function show_sales_by_manager(ndx) {
        var dim = ndx.dimension(dc.pluck("Manager"));
        var group = dim.group().reduceSum(dc.pluck('Sales'));

        let barColors = d3.scale.ordinal().range(["#EA3500", "#EA3500", "#8CE888", "#8CE888", "#FEC928", "#FEC928", "#093F9B", "#282828"])


        salesByManager
            .width(360)
            .height(300)
            .colorAccessor(function(d) {
                return d.key
            })
            .colors(barColors)
            .margins({ top: 10, right: 50, bottom: 40, left: 65 })
            .dimension(dim)
            .group(group)
            .transitionDuration(500)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("Manager")
            .yAxisLabel("Sales in £'s")
            .yAxis().ticks(10);


    }

    function show_sales_by_category(ndx) {
        var dim = ndx.dimension(dc.pluck("Category"));
        var group = dim.group().reduceSum(dc.pluck('Sales'));

        let barColors = d3.scale.ordinal().range(["#4C73B6"])


        salesByCategory
            .width(360)
            .height(300)
            .colorAccessor(function(d) {
                return d.key
            })
            .colors(barColors)
            .margins({ top: 10, right: 50, bottom: 40, left: 65 })
            .dimension(dim)
            .group(group)
            .transitionDuration(500)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("Category")
            .yAxisLabel("Sales in £'s")
            .yAxis().ticks(10);


    }

    function show_sales_by_chain(ndx) {
        var dim = ndx.dimension(dc.pluck("Chain"));
        var group = dim.group().reduceSum(dc.pluck('Sales'));

        let barColors = d3.scale.ordinal().range(["#093F9B", "#8CE888"])


        chainPieChart
            .height(300)
            .radius(130)
            .colorAccessor(function(d) {
                return d.key
            })
            .colors(barColors)
            .dimension(dim)
            .group(group)
            .transitionDuration(1500)


    }

    function show_sales_by_chain_line(ndx) {

        var parseDate = d3.time.format("%d/%m/%Y").parse;
        salesData.forEach(function(d) {
            d.Month = parseDate(d.Month);
        })

        var month_dim = ndx.dimension(dc.pluck("Month"));
        var total_sales_per_month = month_dim.group().reduceSum(dc.pluck("Sales"));

        var minDate = month_dim.bottom(1)[0].Month;
        var maxDate = month_dim.top(1)[0].Month;

        var newYouSales = month_dim.group().reduceSum(function(d) {
            if (d.Chain === "New You") {
                return d.Sales;
            }
            else {
                return 0;
            }
        });

        var freshLookSales = month_dim.group().reduceSum(function(d) {
            if (d.Chain === "Fresh Look") {
                return d.Sales;
            }
            else {
                return 0;
            }
        });


        compositeChart
            .width(450)
            .height(300)
            .margins({ top: 10, right: 10, bottom: 40, left: 65 })
            .dimension(month_dim)
            .x(d3.time.scale().domain([minDate, maxDate]))
            .yAxisLabel("Sales in £'s")
            .legend(dc.legend().x(80).y(20).itemHeight(12).gap(5))
            .renderHorizontalGridLines(true)
            .compose([
                dc.lineChart(compositeChart)
                .colors('green')
                .group(newYouSales, "New You"),
                dc.lineChart(compositeChart)
                .colors('red')
                .group(freshLookSales, "Fesh Look")
            ])

            .brushOn(false)

    }

    function show_consolidated_sales_line(ndx) {

        var month_dim = ndx.dimension(dc.pluck("Month"));
        var total_sales_per_month = month_dim.group().reduceSum(dc.pluck("Sales"));

        var minDate = month_dim.bottom(1)[0].Month;
        var maxDate = month_dim.top(1)[0].Month;


        consolidatedMonthlySales
            .width(450)
            .height(300)
            .margins({ top: 10, right: 10, bottom: 40, left: 65 })
            .dimension(month_dim)
            .group(total_sales_per_month)
            .transitionDuration(500)
            .x(d3.time.scale().domain([minDate, maxDate]))
            .xAxisLabel("Month")
            .yAxisLabel("Sales in £'s")
            .yAxis().ticks(10);

    }




    function show_sales_by_month(ndx) {
        var dim = ndx.dimension(dc.pluck("Financial Year"));
        var group = dim.group().reduceSum(dc.pluck('Sales'));

        let barColors = d3.scale.ordinal().range(["#4C73B6"])



        financialYearChart
            .width(360)
            .height(300)
            .colorAccessor(function(d) {
                return d.key
            })
            .colors(barColors)
            .margins({ top: 10, right: 50, bottom: 40, left: 65 })
            .dimension(dim)
            .group(group)
            .transitionDuration(500)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("Financial Year")
            .yAxisLabel("Sales in £'s")
            .yAxis().ticks(10);


    }


    /*  recordCount
      .dimension(ndx)
      .group(all);

      recordTable
      .dimension(month_dim)
      .group(function(d) {
          var format = d3.format('02d');
          return d.Month.getFullYear() + '/' + format((d.Month.getMonth() + 1));
      })
      .columns([
          "Month",
          "Financial Year",
          "Chain",
          "Region",
          "Manager",
          "Category",
          "Sales"
      ])*/



}
